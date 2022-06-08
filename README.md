# Automation Practice Tests

This project tests the website http://automationpractice.com using [Cypress.io](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)

It showcases the use of:

- The Cypress GUI tool
- The Cypress command line tool
- Docker to self contain the application and require no pre-requisites

## Installation

- Clone the project 

### Local Installation

- Run `$ cd automation-practice && npm install` to install cypress in the project folder

### Docker Installation

P.S: if you use windows, make sure you have installed Make. Using chocolatey: choco install make

- Run `$ make docker-build` in the project
- View the `Makefile` for available docker commands

## Running tests in Docker via Make

- `$ make docker-build` - Build the image
- `$ make docker-test` - Run the testss

For more, see the Makefile

## Running tests locally via Make

- `make test`

## Direct from the command line

- `$ npm run cy:open` - Run test via GUI
- `$ npm run cy:test`  - Run tests via command line
- `$ npm run cy:record` - Run the test with Cypress' Dashboard
- `$ -s '<pathToFile>'` - Path for the spec files you wish to run
- `$ -s 'cypress/integration/formContat.spec.js'` - Example

### GUI - Any changes made to test files are automatically picked up by the GUI and executed, post file save

- `make test-gui` Opens the GUI with the development configuration selection

### Reporting

- Videos of each run are stored in `/cypress/videos`
- Screenshots of failing tests are stored in `/cypress/screenshots`
- One report is generated per spec file
