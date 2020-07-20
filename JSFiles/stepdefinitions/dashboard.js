"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const homepage_1 = require("../pages/homepage");
const protractor_1 = require("protractor");
var homePage = new homepage_1.HomePage();
cucumber_1.Then(/^Verify the user landed on to the dashboard "([^"]*)"$/, { timeout: 50000 }, (expectedUrl) => __awaiter(void 0, void 0, void 0, function* () {
    yield homePage.toCheckUserLandOnDashboard(expectedUrl);
}));
cucumber_1.Then(/^Verify the refersh icon is available on the tab dashboard page$/, { timeout: 50000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield homePage.toCheckIconAvailable();
}));
// Then(/^Verify atmecs logo on the dashboard page$/, { timeout: 70000 }, async () => {
// await	homePage.toCheckLogo();
// });
cucumber_1.Then(/^Verify whether all the project available on the dashboard page$/, { timeout: 50000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield homePage.listOfAvailableProjects();
}));
cucumber_1.Then(/^Click REST API TEST RESULT Link in dashboard$/, { timeout: 50000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    homePage.clickOnProjectLink();
}));
cucumber_1.Then(/^Select status as pass$/, { timeout: 50000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    homePage.filterpass();
}));
cucumber_1.Then(/^Able to get pass test cases$/, { timeout: 50000 }, (table) => __awaiter(void 0, void 0, void 0, function* () {
    var detail = table.raw();
    var status = yield protractor_1.element(protractor_1.by.css("#view-report-filter > div.slimScrollDiv > scrollable > table")).getText();
    console.log(status);
    detail.forEach(function (value) {
        console.log("expec :" + value);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcGRlZmluaXRpb25zL2Rhc2hib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUF1RDtBQUN2RCxnREFBNkM7QUFFN0MsMkNBQWtEO0FBQ2xELElBQUksUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO0FBSTlCLGVBQUksQ0FBQyx3REFBd0QsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFPLFdBQVcsRUFBRSxFQUFFO0lBQ3RHLE1BQU0sUUFBUSxDQUFDLDBCQUEwQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzFELENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsa0VBQWtFLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsR0FBUyxFQUFFO0lBQ3ZHLE1BQU0sUUFBUSxDQUFDLG9CQUFvQixFQUFFLENBQUM7QUFDdkMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILHVGQUF1RjtBQUN2RixnQ0FBZ0M7QUFDaEMsTUFBTTtBQUVOLGVBQUksQ0FBQyxrRUFBa0UsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFTLEVBQUU7SUFDeEcsTUFBTSxRQUFRLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztBQUN6QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLGdEQUFnRCxFQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQVMsRUFBRTtJQUNwRixRQUFRLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztBQUMvQixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHlCQUF5QixFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQVMsRUFBRTtJQUM5RCxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDdkIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQywrQkFBK0IsRUFBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFPLEtBQXFCLEVBQUUsRUFBRTtJQUN4RixJQUFJLE1BQU0sR0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdkIsSUFBSSxNQUFNLEdBQUUsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsOERBQThELENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBRXhHLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFHaEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFTLEtBQUs7UUFHekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUMsS0FBSyxDQUFDLENBQUM7SUFFakMsQ0FBQyxDQUFDLENBQUM7QUFFWixDQUFDLENBQUEsQ0FBQyxDQUFDIn0=