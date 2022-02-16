// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    }, 
    {
        type: "input",
        name: "description",
        message: "What is the description of your project?"
    }, 
    {
        type: "input",
        name: "installation",
        message: "What are the instructions for installation?"
    }, 
    {
        type: "input",
        name: "usage",
        message: "What are the instructions for usage for your project?"
    }, 
    {
        type: "checkbox",
        name: "license",
        message: "Select A License.",
        choices: ["MIT", "Apache", "GNU", "BSD"]
    }, 
    {
        type: "input",
        name: "contributions",
        message: "Enter instructions on how to contribute to your project."
    }, 
    {
        type: "input",
        name: "tests",
        message: "Enter tests information."
    }, 
    {
        type: "input",
        name: "credits",
        message: "Would you like to give any credit(s) to other individuals?"
    }, 
    {
        type: "input",
        name: "author",
        message: "Name(s) of the author(s) of this project."
    }, 
    {
        type: "input",
        name: "questions",
        message: "Do you have any questions"
    }, 
    {
        type: "input",
        name: "username",
        message: "What is your github username?"
    }, 
    {
        type: "input",
        name: "email",
        message: "What is the email you would like to use?"
    }
];




// let licenseBadge = "";


// function licenseType(data) {
//   if (data.license == "MIT"){
//     licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)";
// } if (data.license == "Apache") {
//     licenseBadge = "[![License: Apache v2](https://img.shields.io/badge/License-Apache%202.0-red.svg)](https://opensource.org/licenses/Apache-2.0)";
// } if (data.license == "GNU") {
//     licenseBadge = "[![License: GNU v2](https://img.shields.io/badge/License-GNU%20v2-blue.svg)](https://opensource.org/licenses/GPL-2.0)";
// } if (data.license == "BSD") {
//     licenseBadge = "[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-yellow.svg)](https://opensource.org/licenses/BSD-3-Clause)";
// } else return;
// return licenseBadge;
// }

// TODO: Create a function to write README file
function writeInFile(fileName, data) {
    fs.writeFile(fileName + '.md', data, function (error) {
        if (error) {
            console.log(error)
        }
    })
};

// TODO: Create a function to initialize app
async function init() {
    const info = await inquirer.prompt(questions);
    writeInFile("README", generateMarkdown(info));
}

// Function call to initialize app
init();

