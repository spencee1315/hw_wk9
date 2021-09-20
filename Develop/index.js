// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const generate = require("./utils/generateMarkdown")

// An array of questions for user input
// Filler questions
const questions = [
    {type: "input",
     name: "title",
     message: "What is your project title?"
    },
    {type: "input",
     name: "badge",
     message: "Please provide any badges you want to include."
    },
    {type: "input",
     name: "description",
     message: "Provide a short description explaining the what, why and how of your application."
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
     name: "license",
     message: "Please provide the license or badge link"
    },
    {type: "input",
    name: "contributing",
    message: "Please provide details if someone else would like to contribute to your project."
   },
    {type: "input",
    name: "test",
    message: "Please provide the project tests"
   },
   {type: "input",
    name: "repo",
    message: "What is your repository link?"
   },
  {type: "input",
  name: "contactInfo",
  message: "What is your GitHub username?"
 },
];

// A function to write the README file
inquirer
    .prompt(questions)
    .then(function(data){
        const queryUrl = 'https://api.github.com/users/${data.username}';

        axios.get(queryUrl).then(function(res){

            const githubInfo = {
                githubImage: res.data.avatar_url,
                email: res.data.email,
                profile: res.data.html_url,
                name: res.data.name
            };

            fs.writeFile("README.md", generate(data, githubInfo), function(err) {
                if (err) {
                    throw err;
                };

                console.log("Success! Your new README file was created and is ready for your viewing.");
            });
        });
    });

// A function to initialize app
function init() {

}

// A function call to initialize app
init();
