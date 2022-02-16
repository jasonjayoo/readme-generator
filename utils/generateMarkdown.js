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
// licenseType()

function licenseType(data) {
for (let i = 0; i < data.license.length; i++) {
  const badgeType = data.license[i];
  if (badgeType == "MIT"){
    licenseBadge += "[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)";
} if (badgeType == "Apache") {
    licenseBadge += "[![License: Apache v2](https://img.shields.io/badge/License-Apache%202.0-red.svg)](https://opensource.org/licenses/Apache-2.0)";
} if (badgeType == "GNU") {
    licenseBadge += "[![License: GNU v2](https://img.shields.io/badge/License-GNU%20v2-green.svg)](https://opensource.org/licenses/GPL-2.0)";
} if (badgeType == "BSD") {
    licenseBadge += "[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-yellow.svg)](https://opensource.org/licenses/BSD-3-Clause)";
}
}
return licenseBadge;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${licenseType(data)}
  
  ## Description:
  ${data.description}

  ## Table of contents:

  * [License](#license)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Credits](#credits)
  * [Author](#author)
  * [Questions](#questions)

  <a name="license"></a>
  ## License:
  ${data.license}

  <a name="installation"></a>
  ## Installation:
  ${data.installation}

  <a name="usage"></a>
  ## Usage:
  ${data.usage}

  <a name="contributions"></a>
  ## How to Contribute:
  ${data.contributions}

  
  ## Tests: 
  ${data.tests}
  <a name="tests"></a>

  <a name="credits"></a>
  ## Credits:
  ${data.credits}

  <a name="author"></a>
  ## Author(s):
  ${data.author}
  
  <a name="questions"></a>
  ## Questions:
  For any questions regarding this application, you may reach me directly at ${data.email}. To view my other applications, please check out my github page [${data.username}](https://github.com/${data.username}).
`;
}

module.exports = generateMarkdown;
