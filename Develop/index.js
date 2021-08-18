// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const generate = require('Develop/generateMarkdown.js')

// TODO: Create an array of questions for user input
// Filler questions
const questions = [
    {type: "input",
     name: "title",
     message: "What is your project title?"
    },
    {type: "input",
     name: "description",
     message: "Provide a short description explaining the what, why and how of your application."
    },
    {type: "input",
     name: "story",
     message: "What is your user story?"
    },
    {type: "input",
     name: "tools",
     message: "Please include any resources used in the building of the application (ex. Bootstrap)"
    },
    {type: "input",
     name: "deployedLink",
     message: "Add your deployed link."
    },
    {type: "input",
     name: "installation",
     message: "Please provide any installation instructions."
    },
    {type: "input",
     name: "usage",
     message: "Provide instructions and examples for use?"
    },
    {type: "input",
    name: "codeSnippet",
    message: "Please include a snippit of code from your work."
   },
   {type: "input",
    name: "preview",
    message: "Please provide a photo of your working site."
   },
    {type: "input",
     name: "license",
     message: "Please provide the license or badge link"
    },
    {type: "input",
    name: "test",
    message: "Please provide the project tests"
   },
    {type: "input",
    name: "contributing",
    message: "Please provide any contributing parties."
   },
  {type: "input",
  name: "github",
  message: "What is your GitHub username?"
 },
 {type: "input",
  name: "linkedin",
  message: "What is your Linkedin username?"
 },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
