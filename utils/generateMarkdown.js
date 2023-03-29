// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }

  const licenseBadge = {
    'Apache License 2.0': `https://img.shields.io/badge/License-Apache_2.0-blue.svg`,
    'GNU General Public License v3.0': `https://img.shields.io/badge/License-GPLv3-blue.svg`,
    'MIT License': `https://img.shields.io/badge/License-MIT-yellow.svg`,
    'BSD 2-Clause License': `https://img.shields.io/badge/License-BSD_2--Clause-orange.svg`,
    'BSD 3-Clause License': `https://img.shields.io/badge/License-BSD_3--Clause-blue.svg`,
    'Boost Software License 1.0': `https://img.shields.io/badge/License-Boost_1.0-lightblue.svg`,
    'Creative Commons Zero v1.0 Universal': `https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg`,
    'Eclipse Public License 2.0': `https://img.shields.io/badge/License-Eclipse%20Public%20License%202.0-blue.svg`,
    'GNU Affero General Public License v3.0': `https://img.shields.io/badge/License-AGPL_v3-blue.svg`,
    'GNU General Public License v2.0': `https://img.shields.io/badge/License-GPL_v2-blue.svg`,
    'GNU Lesser General Public License v2.1': `https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg`,
    'Mozilla Public License 2.0': `https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg`,
    'The Unlicense': `https://img.shields.io/badge/license-Unlicense-blue.svg`
  };

  return licenseBadge[license];
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }

  const licenseLink = {
    'Apache License 2.0': `https://opensource.org/licenses/Apache-2.0`,
    'GNU General Public License v3.0': `https://www.gnu.org/licenses/gpl-3.0`,
    'MIT License': `https://opensource.org/licenses/MIT`,
    'BSD 2-Clause License': `https://opensource.org/licenses/BSD-2-Clause`,
    'BSD 3-Clause License': `https://opensource.org/licenses/BSD-3-Clause`,
    'Boost Software License 1.0': `https://www.boost.org/LICENSE_1_0.txt`,
    'Creative Commons Zero v1.0 Universal': `http://creativecommons.org/publicdomain/zero/1.0/`,
    'Eclipse Public License 2.0': `https://www.eclipse.org/legal/epl-2.0/`,
    'GNU Affero General Public License v3.0': `https://www.gnu.org/licenses/agpl-3.0`,
    'GNU General Public License v2.0': `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`,
    'GNU Lesser General Public License v2.1': `https://www.gnu.org/licenses/lgpl-2.1.html`,
    'Mozilla Public License 2.0': `https://opensource.org/licenses/MPL-2.0`,
    'The Unlicense': `http://unlicense.org/`
  };

  return licenseLink[license];
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }

  return `This application is covered under ${license}.`;
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `[![License](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})
  
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  If you have additional questions, feel free to reach me through github or email.

  Github: https://github.com/${data.github}
  
  Email: ${data.email}
`;
}

module.exports = generateMarkdown