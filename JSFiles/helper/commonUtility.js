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
exports.ElementHelper = void 0;
const protractor_1 = require("protractor");
class ElementHelper {
    //Element Loctors
    locatortype(locator) {
        var elementObj;
        var arrayLocator = locator.split(":", 2);
        switch (arrayLocator[0]) {
            // Find by xpath
            case "Id":
                elementObj = protractor_1.element(protractor_1.by.id(arrayLocator[1]));
                break;
            case "Css":
                elementObj = protractor_1.element(protractor_1.by.css(arrayLocator[1]));
                break;
            case "Name":
                elementObj = protractor_1.element(protractor_1.by.name(arrayLocator[1]));
                break;
            case "PARTIALLINK":
                elementObj = protractor_1.element(protractor_1.by.partialLinkText(arrayLocator[1]));
                break;
            case "LINK":
                elementObj = protractor_1.element(protractor_1.by.linkText(arrayLocator[1]));
                break;
            case "TAGNAME":
                elementObj = protractor_1.element(protractor_1.by.tagName(arrayLocator[1]));
                break;
            case "Model":
                elementObj = protractor_1.element(protractor_1.by.model(arrayLocator[1]));
                break;
            case "BIND":
                elementObj = protractor_1.element(protractor_1.by.exactBinding(arrayLocator[1]));
                break;
            case "ButtonText":
                elementObj = protractor_1.element(protractor_1.by.buttonText(arrayLocator[1]));
                break;
            case "Repeater":
                elementObj = protractor_1.element(protractor_1.by.repeater(arrayLocator[1]));
                break;
            case "Option":
                elementObj = protractor_1.element(protractor_1.by.options(arrayLocator[1]));
                break;
            default:
                elementObj = protractor_1.element(protractor_1.by.xpath(arrayLocator[1]));
        }
        return elementObj;
    }
    //Selecting all element
    allElement(locator) {
        var elementObj;
        var arrayLocator = locator.split(":", 2);
        switch (arrayLocator[0]) {
            // Find by xpath
            case "Id":
                elementObj = protractor_1.element.all(protractor_1.by.id(arrayLocator[1]));
                break;
            case "Css":
                elementObj = protractor_1.element.all(protractor_1.by.css(arrayLocator[1]));
                break;
            case "Name":
                elementObj = protractor_1.element.all(protractor_1.by.name(arrayLocator[1]));
                break;
            case "PARTIALLINK":
                elementObj = protractor_1.element.all(protractor_1.by.partialLinkText(arrayLocator[1]));
                break;
            case "LINK":
                elementObj = protractor_1.element.all(protractor_1.by.linkText(arrayLocator[1]));
                break;
            case "TAGNAME":
                elementObj = protractor_1.element.all(protractor_1.by.tagName(arrayLocator[1]));
                break;
            case "Model":
                elementObj = protractor_1.element.all(protractor_1.by.model(arrayLocator[1]));
                break;
            case "BIND":
                elementObj = protractor_1.element.all(protractor_1.by.exactBinding(arrayLocator[1]));
                break;
            case "ButtonText":
                elementObj = protractor_1.element.all(protractor_1.by.buttonText(arrayLocator[1]));
                break;
            case "Repeater":
                elementObj = protractor_1.element.all(protractor_1.by.repeater(arrayLocator[1]));
                break;
            case "Option":
                elementObj = protractor_1.element.all(protractor_1.by.options(arrayLocator[1]));
                break;
            default:
                elementObj = protractor_1.element.all(protractor_1.by.xpath(arrayLocator[1]));
        }
        return elementObj;
    }
    // click on the element
    clickOnElement(locator) {
        var elementObj;
        elementObj = this.locatortype(locator);
        elementObj.isDisplayed().then(function () {
            elementObj.isEnabled().then(function () {
                elementObj.click();
            });
        });
    }
    // scrow down
    scrollToDown(dowPosition) {
        protractor_1.browser.executeScript(`window.scrollTo(0,${dowPosition})`);
    }
    //scroll into expected element
    scrollIntoView(locator) {
        var scroll = this.locatortype(locator);
        protractor_1.browser.controlFlow().execute(function () {
            protractor_1.browser.executeScript('arguments[0].scrollIntoView(true)', scroll.getWebElement());
        });
    }
    //to click particular element
    clickElemet(locator) {
        this.locatortype(locator).click();
    }
    //to get site title
    getPageTitle() {
        protractor_1.browser.getTitle().then(function (value) {
            console.log(value);
            return value;
        });
    }
    //To get element text
    getElementText(locator) {
        this.locatortype(locator).getText().then(function (value) {
            console.log(value);
            return value;
        });
    }
    //To get current page url
    getPageCurrentUrl() {
        var value = protractor_1.browser.getCurrentUrl();
        return value;
    }
    //To check element availability
    elementAvailable(locator) {
        var value = this.locatortype(locator).isPresent();
        return value;
    }
    //To ckeck element displying
    elementIsDisplay(locator) {
        var value = this.locatortype(locator).isDisplayed();
        return value;
    }
    //Filter the element
    selectDropdownbyNum(locator, optionNum) {
        return __awaiter(this, void 0, void 0, function* () {
            if (optionNum) {
                var options = yield this.allElement(locator)
                    .then(function (options) {
                    options[optionNum].click();
                });
            }
        });
    }
    ;
}
exports.ElementHelper = ElementHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uVXRpbGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2hlbHBlci9jb21tb25VdGlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFpSTtBQUNqSSxNQUFhLGFBQWE7SUFJdEIsaUJBQWlCO0lBQ2pCLFdBQVcsQ0FBQyxPQUFlO1FBQ3ZCLElBQUksVUFBeUIsQ0FBQztRQUM5QixJQUFJLFlBQVksR0FBYSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuRCxRQUFRLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNyQixnQkFBZ0I7WUFDaEIsS0FBSyxJQUFJO2dCQUNMLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0MsTUFBTTtZQUNWLEtBQUssS0FBSztnQkFDTixVQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLE1BQU07WUFDVixLQUFLLE1BQU07Z0JBQ1AsVUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvQyxNQUFNO1lBQ1YsS0FBSyxhQUFhO2dCQUNkLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUQsTUFBTTtZQUNWLEtBQUssTUFBTTtnQkFDUCxVQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25ELE1BQU07WUFDVixLQUFLLFNBQVM7Z0JBQ1Ys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