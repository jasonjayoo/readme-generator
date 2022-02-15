// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {}


let licenseBadge = "";


function licenseType(data) {
  if (data.license == "MIT"){
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
} if (data.license == "Apache") {
    licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
} if (data.license == "GPL") {
    licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)";
} if (data.license == "BSD") {
    licenseBadge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
} else return;
return licenseBadge;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of contents
  * [Installation] (#installation)
  * [Usage] (#usage)
  * [License] (#license)
  * [Contributing] (#contributing)
  * [Tests] (#tests)
  * [Questions] (#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests 
  ${data.tests}
  
  ## Questions
  If you have any questions about this repository, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.username}](https://github.com/${data.username}).

`;
}

module.exports = generateMarkdown;
