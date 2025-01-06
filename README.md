
# Employee Management Database
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
- [Descriptionn](#description)
- [Installation Instructions](#installation-instructions)
- [How to Use the App](#how-to-use-the-app)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instrustions](#test-instructions)
- [Questions](#questions)

## Description
- This project is an employee records management application
- The application allows users to manage departments, roles and employees of the company
- The application currently leverages a command-line interface


## Installation Instructions
- The configuration files (package.json and tsconfig.json) are included in the repository and do not need to be modified
- Install all required packges with the command "npm install"
- The application uses the following third-party packages: cli-table3, inquirer, pg and dotenv
- Please update the values in the .env.example file with your username and password. The database name doesn't have to be changed, since it's defined in the scheema
- The schema and seed files for the database are included in the db folder
- Initialize the database and seed the database within psql by running the command '\i "absolute path to schema" ' and '\i "absolute path to seeds" '
- Build and run the application with the command "npm run start"


## How to Use the App
- The application allows the user to display a table of all employees, roles and departments
- The user can create new departments and roles
- The user can add new employees. If an employee doesn't have a manager, the user can select the option None
- Employee data can be updated - they can be assigned a new role and/or a new manager
- The application can be exited by selecting the option "Quit"


## Contribution Guidelines
- The original author of this application is Jan Krajniak. Please ensure attribution when re-using parts or all of the code


## Test Instructions
- N/A


## Questions
- My GitHub username: jankrajniak
- My email address: jan.krajniak@gmail.com
- Additional instructions on how to contact me:
  - If you wish to contact me, please email me at the above email address


## License
- This project is licensed under the MIT license: [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)