import { by, element } from "protractor";
import { ElementHelper } from "../helper/commonUtility";
import { PropertiesFileReader } from "../utility/propertyfilereader";
import { FilePath } from "../utility/filepath";
//import { expect } from "chai";
import chai = require('chai');
chai.use(require('chai-smoothie'));
const expect = chai.expect;

var helper = new ElementHelper();
var dashboardloc = new PropertiesFileReader(FilePath.dashboard);


export class HomePage {

    async toCheckUserLandOnDashboard(value: string) {
        
        var actualUrl =await helper.getPageCurrentUrl().then(function(actualUrl)
        {
            console.log("Actual URL :" + actualUrl)
            expect(actualUrl).to.be.contains(value);
        });
       
        

    }

    async toCheckIconAvailable() {
       // element(by.css('h1')).isPresent
      // expect(by.css('h1')).to.eventually.be.present()
      // expect(element.all(by.css('.items)).isPresent()).toBe(true);
     helper.elementAvailable(dashboardloc.propertiesFileData("loc.icon.refresh"))
      .then(function(icon)
       {
           if(icon==true)
           {
               console.log("Refresh icon is available at dashboard page")
           }
           else{
               console.log("refresh icon is not available")
           }
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

    async listOfAvailableProjects()
    {
        var listOfProject= helper.getElementText(dashboardloc.propertiesFileData("loc.txt.listOfItem"));
        console.log("list of project :"+listOfProject);
    }

    async clickOnProjectLink()
    {
         helper.clickElemet(dashboardloc.propertiesFileData("loc.tab.dashboard"));
    }

    async filterpass()
    {
       // helper.allElement(dashboardloc.propertiesFileData('')).first().click();
       helper.selectDropdownbyNum(dashboardloc.propertiesFileData('loc.filter.pass'),1)
    }


}