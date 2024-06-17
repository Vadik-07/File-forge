const express = require('express');
const path = require('path');
const fs = require('fs');
const { log } = require('console');
const { name } = require('ejs');

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', function(req, res) {
    fs.readdir('./files', function(err, files) {
        res.render("index", { files: files});
    });
});


app.get('/files/:filename', function(req, res) {
    const filename = req.params.filename.trim(); // Trim any extra whitespace
    const filePath = `./files/${filename}`; // Construct file path correctly
    console.log("File path:", filePath); // Log the file path for debugging

    fs.readFile(filePath, 'utf-8', (err, filedata) => {
        if (err) {
            console.error("Error reading file:", err); // Log any errors
            return res.status(404).send('File not found'); // Handle file not found error
        }
        console.log("File data:", filedata); // Log file data for debugging
        res.render('show', { filename, filedata }); // Use destructuring to simplify the object
    });
});

app.get("/files/edit/:filename", function(req, res){
    res.render("edit", {filename: req.params.filename})
});

app.post("/edit", function(req, res) {
    console.log(req.body);
    const prefile = req.body.Previous + '.txt'
    const newfile = req.body['new-name'] + '.txt'
    console.log(prefile);
    console.log(newfile);
    
    fs.rename(`./files/${prefile}`, `./files/${newfile}`, (err) => {
        if (err) {
            console.error('Error renaming file:', err);
            return res.status(500).send(`Error renaming file: ${err.message}`);
        }
        console.log('File renamed successfully');
        res.redirect('/');
    });
});


app.post('/create', function(req, res){
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(err){
        res.redirect("/")
    })
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
