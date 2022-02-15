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
    }, {
        type: "input",
        name: "description",
        message: "What is the description of your project?"
    }, {
        type: "input",
        name: "installation",
        message: "What are the instructions for installation?"
    }, {
        type: "input",
        name: "usage",
        message: "What are the instructions for usage for your project?"
    }, {
        type: "checkbox",
        name: "license",
        message: "Select A License.",
        choices: ["MIT", "Apache", "GNU", "BSD"]
    }, {
        type: "input",
        name: "contributions",
        message: "Enter instructions on how to contribute to your project."
    }, {
        type: "input",
        name: "tests",
        message: "Enter tests information."
    }, {
        type: "input",
        name: "questions",
        message: "Do you have any questions"
    }, {
        type: "input",
        name: "username",
        message: "What is your github username?"
    }, {
        type: "input",
        name: "email",
        message: "What is the email you would like to use?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName + '.md', data, function (err) {
        if (err) {
            console.log(err)
        }
    })
};

// TODO: Create a function to initialize app
async function init() {
    const response = await inquirer.prompt(questions);
    writeToFile("README", generateMarkdown(response));
}

// Function call to initialize app
init();
