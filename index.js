// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please provide a short description of your application:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the steps required to install your application?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Please provide instructions and examples for use:',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'Which license is this application covered under?',
      name: 'license',
      choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License',
       'BSD 2-Clause License', 'BSD 3-Clause License', 'Boost Software License 1.0',
       'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0',
       'GNU Affero General Public License v3.0', 'GNU General Public License v2.0',
       'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
    },
    {
      type: 'input',
      message: 'Please provide guidelines for other developers to contribute to your application:',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'Please write tests for your application:',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
];

// Create a function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then((data) => {
         // write README file
         const fileName = `${data.title.toLowerCase().split(' ').join('')}README.md`;
         fs.writeFile(fileName, generateMarkdown(data), 
           (err) => err ? console.log(err) : console.log('Successfully create a professional README fo your project!')
         );
       })
}

// Function call to initialize app
init();