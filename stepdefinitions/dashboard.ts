import { Then, When, TableDefinition } from "cucumber";
import { HomePage } from "../pages/homepage";
import { expect } from "chai";
import { browser, element, by } from "protractor";
var homePage = new HomePage();



Then(/^Verify the user landed on to the dashboard "([^"]*)"$/, { timeout: 50000 }, async (expectedUrl) => {
   await homePage.toCheckUserLandOnDashboard(expectedUrl);
});

Then(/^Verify the refersh icon is available on the tab dashboard page$/, { timeout: 50000 }, async () => {
	await homePage.toCheckIconAvailable();
});

Then(/^Verify atmecs logo on the dashboard page$/, { timeout: 70000 }, async () => {
await	homePage.toCheckLogo();
});

Then(/^Verify whether all the project available on the dashboard page$/, { timeout: 50000 }, async () => {
await	homePage.listOfAvailableProjects();
});

Then(/^Click REST API TEST RESULT Link in dashboard$/,{ timeout: 50000 }, async () => {
	homePage.clickOnProjectLink();
});

Then(/^Select status as pass$/, { timeout: 50000 }, async () => {
	homePage.filterpass();
});
