// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// linking to page where the README is developed
const generate = require("./utils/generateMarkdown")

// An array of questions for user input
const questions = () => {
    // using inquirer to prompt questions to user
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false; 
                }
            }

        },
        {
            type: 'input',
            name: 'title',
            message: 'What is your project name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!');
                    return false; 
                }
            }
        }, 
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'GNU'],
            default: ["MIT"],
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please choose a license!');
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the steps required to install your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter steps required to install your project!');
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this app?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a usage description!');
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'test', 
            message: 'What command should be run to run tests?',
            default: 'npm test'
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'What does the user need to know about contributing to the repo?'
        }
    ]);
};


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
