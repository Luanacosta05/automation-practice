import './commands'
import '@percy/cypress';
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

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