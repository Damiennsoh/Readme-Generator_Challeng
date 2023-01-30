//function to generate markdown for README
function generateMarkdown(response) {
  return `

# ${response.title}

## Description
🔍 ${response.description}

# Table of Content
-[description](#description)
-[installation](#installation)
-[usage](#usage)
-[licenses](#licenses)
-[contribution](#contribution)
-[test](#test)
-[username](#username)
-[profile](#profile)

## username:
${response.username}

    ${response.description}
## description:

    ${response.installation}
## installation:

    ${response.usage}
##usage:

    ${response.licenses}
## licenses:

    ${response.contribution}
## contribution:

    ${response.test}
##test:

    ${response.email}
## email:

    ${response.profile}
## profile:
`;
}

module.exports = generateMarkdown;