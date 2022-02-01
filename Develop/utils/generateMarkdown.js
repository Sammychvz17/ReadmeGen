const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js'); 

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.Title}
  
  ##Table of Contents
  ### * [Installation](#installation)
  ### * [Usage](#usage)
  ### * [Contributors](#contributors)
  ### * [Test](#tests)
  ### * [Question](#questions)

  ## Installation: 
  ### You must install the following for this app to function: 
  ### ${data.Installation}

  ##Usage: 
  ### ${data.Usage}

  ## Contribution:
  ### ${data.Contribution}
  
  ## Test: 
  ### Run the commands below in your terminal to test this app to function: 
  ### ${data.Test}

  ## Questions: 
  ### For any questions or concerns contact me at 
  ### Github Username: ${data.Username} 
  ### or 
  ### Email: ${data.Email}
`;
}

module.exports = generateMarkdown;
