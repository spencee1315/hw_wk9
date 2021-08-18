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
function generateMarkdown(data, githubInfo) {
  return `
  # **${data.title}**

  ${data.badge}

  ## Description

  ${data.description}

  ## Table of contents

  - [Description](#Description)
  - [Story](#Story)
  - [Tools](#Tools)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Code Snippet](#CodeSnippet)
  - [Preview](#Preview)
  - [License](#License)
  - [Test](#Test)
  - [Contributors](#Contributors)
  - [Repository Link](#Repository)
  - [GitHub Info](#GitHub)

  ## Story

  ${data.story}

  ## Tools

  ${data.tools}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Code Snippet

  ${data.codeSnippet}

  ## Preview

  ${data.preview}

  ## License

  ${data.license}

  ## Test

  ${data.test}

  ## Contributors

  ${data.contributors}

  ## Repository

  -[Project Repositor](${data.repo})

  ## GitHub

  ![My Photo](${githubInfo.githubImage})
  - ${githubInfo.name}
  -[My GitHub Profile](${githubInfo.profile})
  - <${githubInfo.email}>

`;
}

module.exports = generateMarkdown;
