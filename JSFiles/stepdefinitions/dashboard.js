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
var homePage = new homepage_1.HomePage();
cucumber_1.Then(/^Verify the user landed on to the dashboard "([^"]*)"$/, { timeout: 50000 }, (expectedUrl) => __awaiter(void 0, void 0, void 0, function* () {
    yield homePage.toCheckUserLandOnDashboard(expectedUrl);
}));
cucumber_1.Then(/^Verify the refersh icon is available on the tab dashboard page$/, { timeout: 50000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield homePage.toCheckIconAvailable();
}));
cucumber_1.Then(/^Verify atmecs logo on the dashboard page$/, { timeout: 70000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield homePage.toCheckLogo();
}));
cucumber_1.Then(/^Verify whether all the project available on the dashboard page$/, { timeout: 50000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield homePage.listOfAvailableProjects();
}));
cucumber_1.Then(/^Click REST API TEST RESULT Link in dashboard$/, { timeout: 50000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    homePage.clickOnProjectLink();
}));
cucumber_1.Then(/^Select status as pass$/, { timeout: 50000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    homePage.filterpass();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcGRlZmluaXRpb25zL2Rhc2hib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUF1RDtBQUN2RCxnREFBNkM7QUFHN0MsSUFBSSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7QUFJOUIsZUFBSSxDQUFDLHdEQUF3RCxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQU8sV0FBVyxFQUFFLEVBQUU7SUFDdEcsTUFBTSxRQUFRLENBQUMsMEJBQTBCLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDMUQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxrRUFBa0UsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFTLEVBQUU7SUFDdkcsTUFBTSxRQUFRLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztBQUN2QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDRDQUE0QyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQVMsRUFBRTtJQUNsRixNQUFNLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUM3QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLGtFQUFrRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQVMsRUFBRTtJQUN4RyxNQUFNLFFBQVEsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0FBQ3pDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsZ0RBQWdELEVBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsR0FBUyxFQUFFO0lBQ3BGLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0FBQy9CLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMseUJBQXlCLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsR0FBUyxFQUFFO0lBQzlELFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUN2QixDQUFDLENBQUEsQ0FBQyxDQUFDIn0=