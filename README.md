FileForge

FileForge is a simple file management and text editing web application built using Node.js and Express. It allows users to create, view, edit, and rename text files via a web interface.

Features

File Listing: View all files stored in the server's files directory.
File Creation: Create new text files through a form.
File Editing: Edit the contents of existing files.
File Renaming: Rename files through a form.

Screenshots:  Main Interface
![Screenshot 2024-06-17 172937](https://github.com/Vadik-07/File-forge/assets/157019400/2986ec15-f2bf-413b-bd57-73fa92197339)

Rename Page
![Screenshot 2024-06-17 173040](https://github.com/Vadik-07/File-forge/assets/157019400/58bf685c-699d-4dfe-a021-45c4ca4d4369)

Read More Page
![Screenshot 2024-06-17 173148](https://github.com/Vadik-07/File-forge/assets/157019400/6d158034-f8d3-404f-ac46-34d7b0bd02f7)


Getting Started

Prerequisites

->  Node.js: Ensure you have Node.js installed. You can download it from Node.js official website.

Installation

1. Clone the Repository

> git clone https://github.com/Vadik-07/file-forge.git
> cd file-forge

2. Install Dependencies

> npm install

3. Run the Server

> node index.js

4. Open Your Browser and navigate to 'http://localhost:3000'.


File Structure
• Here's an overview of the project structure:

FileForge/

│

├── files/                  # Directory for storing text files

│   └── example.txt         # Optional: Include a sample file or use .gitkeep to track empty directory

│

├── node_modules/           # Directory for Node.js modules (excluded from Git)

│

├── public/                 # Static files served to the client

│   ├── images/             # Images

│   ├── javascripts/        # Client-side JavaScript

│   └── stylesheets/        # CSS files

│       ├── form_style.css

│       └── task_style.css

│

├── views/                  # EJS templates for rendering pages

│   ├── edit.ejs

│   ├── index.ejs

│   └── show.ejs

│

├── .gitignore              # Git ignore file

├── index.js                # Main server file

├── package.json            # Node.js dependencies and scripts

├── package-lock.json       # Locked versions of dependencies

└── README.md               # Project documentation


Usage
1. Access the Main Page: Visit http://localhost:3000 to see a list of files.
2. Create a New File: Use the form on the main page to create a new file.
3. View a File: Click on a file name to view its contents.
4. Edit a File: Click the “Edit” button on a file's page to edit its contents.
5. Rename a File: Click the “Rename” button on a file's page to change its name.


Development

To contribute or make changes, follow these steps:

1. Fork the Repository
Create a Feature Branch
> git checkout -b feature/new-feature

2. Commit Your Changes
> git commit -m "Add new feature"

3. Push to the Branch
> git push origin feature/new-feature

4. Open a Pull Request: Go to the repository on GitHub and open a pull request.


License

This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements

• Node.js: For the runtime environment.

• Express: For the web framework.

• EJS: For the templating engine.

