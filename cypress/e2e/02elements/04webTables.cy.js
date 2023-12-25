import ElementsWebTablesPage from "../../pageObjects/ElementsWebTablesPage";
import HomePage from "../../pageObjects/HomePage.js";
import elementsWebTablesData from "../../fixtures/elementsWebTables.json"

const webTablesPage = new ElementsWebTablesPage();
const homepage = new HomePage();

describe("Elements  > Web Tables", () => {

    it("TC_02.04.01 | Elements  >  Web Tables >  Verify the possibility of adding a new employee to the table using the Registration Form", () => {
       homepage
            .chooseElementsCard()
            .chooseWebTablesElement()
            .clickAddButton()
            .addNewEmployee()
            .clickSubmitButton()
            .checkEmployeeDataInTable();
    });

    it("TC_02.04.02 | Elements > Web Tables > Verify the 'Delete' button has a tooltip 'Delete'", () => {
      homepage
        .chooseElementsCard()
        .chooseWebTablesElement()
        .getArrayOfDeleteRowButton()
        .each(($els) => {
          cy.wrap($els)
            .should("have.attr", "data-toggle", "tooltip")
            .and("have.attr", "title", elementsWebTablesData.tooltipDeleteButton);
        });
    });
});