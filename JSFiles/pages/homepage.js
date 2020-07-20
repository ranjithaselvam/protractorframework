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
//import { expect } from "chai";
const chai = require("chai");
chai.use(require('chai-smoothie'));
const expect = chai.expect;
var helper = new commonUtility_1.ElementHelper();
var dashboardloc = new propertyfilereader_1.PropertiesFileReader(filepath_1.FilePath.dashboard);
class HomePage {
    toCheckUserLandOnDashboard(value) {
        return __awaiter(this, void 0, void 0, function* () {
            var actualUrl = yield helper.getPageCurrentUrl().then(function (actualUrl) {
                console.log("Actual URL :" + actualUrl);
                expect(actualUrl).to.be.contains(value);
            });
        });
    }
    toCheckIconAvailable() {
        return __awaiter(this, void 0, void 0, function* () {
            // element(by.css('h1')).isPresent
            // expect(by.css('h1')).to.eventually.be.present()
            // expect(element.all(by.css('.items)).isPresent()).toBe(true);
            helper.elementAvailable(dashboardloc.propertiesFileData("loc.icon.refresh"))
                .then(function (icon) {
                if (icon == true) {
                    console.log("Refresh icon is available at dashboard page");
                }
                else {
                    console.log("refresh icon is not available");
                }
            });
        });
    }
    // async toCheckLogo() {
    //  var logo=  await helper.elementIsDisplay(dashboardloc.propertiesFileData("loc.logo.homepage")).then(function(logo)
    //  {
    //      if(logo==true)
    //      {
    //          console.log("logo is displaying")
    //      }
    //      else{
    //          console.log("logo is not displaying" )
    //      }
    //  });
    // }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlcy9ob21lcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSwyREFBd0Q7QUFDeEQsc0VBQXFFO0FBQ3JFLGtEQUErQztBQUMvQyxnQ0FBZ0M7QUFDaEMsNkJBQThCO0FBQzlCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7QUFDbkMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUUzQixJQUFJLE1BQU0sR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztBQUNqQyxJQUFJLFlBQVksR0FBRyxJQUFJLHlDQUFvQixDQUFDLG1CQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7QUFHaEUsTUFBYSxRQUFRO0lBRVgsMEJBQTBCLENBQUMsS0FBYTs7WUFFMUMsSUFBSSxTQUFTLEdBQUUsTUFBTSxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxTQUFTO2dCQUVuRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUMsQ0FBQTtnQkFDdkMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1FBSVAsQ0FBQztLQUFBO0lBRUssb0JBQW9COztZQUN2QixrQ0FBa0M7WUFDbkMsa0RBQWtEO1lBQ2xELCtEQUErRDtZQUNoRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLENBQUM7aUJBQzFFLElBQUksQ0FBQyxVQUFTLElBQUk7Z0JBRWQsSUFBRyxJQUFJLElBQUUsSUFBSSxFQUNiO29CQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkNBQTZDLENBQUMsQ0FBQTtpQkFDN0Q7cUJBQ0c7b0JBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFBO2lCQUMvQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBSU4sQ0FBQztLQUFBO0lBRUQsd0JBQXdCO0lBQ3hCLHNIQUFzSDtJQUN0SCxLQUFLO0lBQ0wsc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCw2Q0FBNkM7SUFDN0MsU0FBUztJQUNULGFBQWE7SUFDYixrREFBa0Q7SUFDbEQsU0FBUztJQUNULE9BQU87SUFFUCxJQUFJO0lBRUUsdUJBQXVCOztZQUV6QixJQUFJLGFBQWEsR0FBRSxNQUFNLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7WUFDaEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBQyxhQUFhLENBQUMsQ0FBQztRQUNuRCxDQUFDO0tBQUE7SUFFSyxrQkFBa0I7O1lBRW5CLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUM5RSxDQUFDO0tBQUE7SUFFSyxVQUFVOztZQUViLDBFQUEwRTtZQUMxRSxNQUFNLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbkYsQ0FBQztLQUFBO0NBR0o7QUFsRUQsNEJBa0VDIn0=