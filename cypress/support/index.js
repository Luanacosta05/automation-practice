import './commands'
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
import '@percy/cypress';


addMatchImageSnapshotCommand();

Cypress.Screenshot.defaults({
    screenshotOnRunFailure: true
});

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
});

Cypress.on("fail", (error, runnable) => {
    debugger;
    throw error;
});