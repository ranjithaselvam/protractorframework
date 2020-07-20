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
exports.HomePage = void 0;
const commonUtility_1 = require("../helper/commonUtility");
const propertyfilereader_1 = require("../utility/propertyfilereader");
const filepath_1 = require("../utility/filepath");
const chai_1 = require("chai");
var helper = new commonUtility_1.ElementHelper();
var dashboardloc = new propertyfilereader_1.PropertiesFileReader(filepath_1.FilePath.dashboard);
class HomePage {
    toCheckUserLandOnDashboard(value) {
        return __awaiter(this, void 0, void 0, function* () {
            var actualUrl = yield helper.getPageCurrentUrl().then(function (actualUrl) {
                console.log("Actual URL :" + actualUrl);
                chai_1.expect(actualUrl).to.be.contains(value);
            });
        });
    }
    toCheckIconAvailable() {
        return __awaiter(this, void 0, void 0, function* () {
            var icon = yield helper.elementAvailable(dashboardloc.propertiesFileData("loc.icon.refresh")).then(function (icon) {
                if (icon == true) {
                    console.log("Refresh icon is available at dashboard page");
                }
                else {
                    console.log("refresh icon is not available");
                }
            });
        });
    }
    toCheckLogo() {
        return __awaiter(this, void 0, void 0, function* () {
            var logo = yield helper.elementIsDisplay(dashboardloc.propertiesFileData("loc.logo.homepage")).then(function (logo) {
                if (logo == true) {
                    console.log("logo is displaying");
                }
                else {
                    console.log("logo is not displaying");
                }
            });
        });
    }
    listOfAvailableProjects() {
        return __awaiter(this, void 0, void 0, function* () {
            var listOfProject = helper.getElementText(dashboardloc.propertiesFileData("loc.txt.listOfItem"));
            console.log("list of project :" + listOfProject);
        });
    }
    clickOnProjectLink() {
        return __awaiter(this, void 0, void 0, function* () {
            helper.clickElemet(dashboardloc.propertiesFileData("loc.tab.dashboard"));
        });
    }
    filterpass() {
        return __awaiter(this, void 0, void 0, function* () {
            // helper.allElement(dashboardloc.propertiesFileData('')).first().click();
            helper.selectDropdownbyNum(dashboardloc.propertiesFileData('loc.filter.pass'), 1);
        });
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlcy9ob21lcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSwyREFBd0Q7QUFDeEQsc0VBQXFFO0FBQ3JFLGtEQUErQztBQUMvQywrQkFBOEI7QUFFOUIsSUFBSSxNQUFNLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7QUFDakMsSUFBSSxZQUFZLEdBQUcsSUFBSSx5Q0FBb0IsQ0FBQyxtQkFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBR2hFLE1BQWEsUUFBUTtJQUVYLDBCQUEwQixDQUFDLEtBQWE7O1lBRTFDLElBQUksU0FBUyxHQUFFLE1BQU0sTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsU0FBUztnQkFFbkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDLENBQUE7Z0JBQ3ZDLGFBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztRQUlQLENBQUM7S0FBQTtJQUVLLG9CQUFvQjs7WUFDdkIsSUFBSSxJQUFJLEdBQUUsTUFBTSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO2dCQUUzRyxJQUFHLElBQUksSUFBRSxJQUFJLEVBQ2I7b0JBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFBO2lCQUM3RDtxQkFDRztvQkFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUE7aUJBQy9DO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFHTixDQUFDO0tBQUE7SUFFSyxXQUFXOztZQUNoQixJQUFJLElBQUksR0FBRyxNQUFNLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7Z0JBRTdHLElBQUcsSUFBSSxJQUFFLElBQUksRUFDYjtvQkFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUE7aUJBQ3BDO3FCQUNHO29CQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUUsQ0FBQTtpQkFDekM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUVKLENBQUM7S0FBQTtJQUVLLHVCQUF1Qjs7WUFFekIsSUFBSSxhQUFhLEdBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1lBQ2hHLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUMsYUFBYSxDQUFDLENBQUM7UUFDbkQsQ0FBQztLQUFBO0lBRUssa0JBQWtCOztZQUVuQixNQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7UUFDOUUsQ0FBQztLQUFBO0lBRUssVUFBVTs7WUFFYiwwRUFBMEU7WUFDMUUsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ25GLENBQUM7S0FBQTtDQUdKO0FBN0RELDRCQTZEQyJ9