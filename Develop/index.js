// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title?'
      },
      {
        type: 'input',
        message: 'What is your description of the project?',
        name: 'Description',
      },
      {
        type: 'input',
        message: 'How do you install this project?',
        name: 'Installation',
      },
      {
        type: 'input',
        message: 'What do you use the app for?',
        name: 'Usage',
      },
      {
        type: 'input',
        message: 'How do you contribute?',
        name: 'Contribution',
      },
      {
          type: 'input',
          message: 'How do you test this app?',
          name: 'Tests',
      },
      {
        type: 'input',
        message: 'Enter in the License',
        name: 'License',
    },
    {
        type: 'input',
        message: 'Enter Github username?',
        name: 'Username',
    },
    {
        type: 'input',
        message: 'What is your E-mail?',
        name: 'Email',
    }
    ];

// TODO: Create a function to write README file
const writeToFile = userInput => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generateREADME.md', userInput, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    });
};


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(data => {
            console.log(data)
            var userInput = generateMarkdown(data);
            writeToFile(userInput)
        });

}

// Function call to initialize app
init();

//export 
module.exports = questions;
