// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {}


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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of contents:

  * [Description] (#description)
  * [Installation] (#installation)
  * [Usage] (#usage)
  * [License] (#license)
  * [Contributions] (#contributions)
  * [Tests] (#tests)
  * [Questions] (#questions)

  ## License:
  ${data.licenseType}

  ## Description:
  ${data.description}
  
  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## How to Contribute:
  ${data.contributions}

  ## Tests: 
  ${data.tests}
  
  ## Questions:
  If you have any questions about this repository, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.username}](https://github.com/${data.username}).

`;
}

module.exports = generateMarkdown;
