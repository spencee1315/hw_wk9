// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// A function to generate markdown for README
function generateMarkdown(data, githubInfo) {
  return `
  # **${data.title}**

  ${data.badge}

  ## Description

  ${data.description}

  ## Table of contents

  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributors](#Contributors)
  - [Test](#Test)
  - [Repository Link](#Repository)
  - [GitHub Info](#GitHub)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Contributors

  ${data.contributors}

  ## Test

  ${data.test}

  ## Repository

  -[Project Repositor](${data.repo})

  ## Contact Information

  ![My Photo](${githubInfo.githubImage})
  - ${githubInfo.name}
  -[My GitHub Profile](${githubInfo.profile})
  - <${githubInfo.email}>

`;
}

module.exports = generateMarkdown;
