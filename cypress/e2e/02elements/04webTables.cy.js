import ElementsWebTablesPage from "../../pageObjects/ElementsWebTablesPage";
import HomePage from "../../pageObjects/HomePage.js";
import elementsWebTablesData from "../../fixtures/elementsWebTables.json"

const webTablesPage = new ElementsWebTablesPage();
const homepage = new HomePage();

describe("Elements  > Web Tables", () => {

    it.skip("TC_02.04.01 | Elements  >  Web Tables >  Verify the possibility of adding a new employee to the table using the Registration Form", () => {
        cy.visit('https://demoqa.com/webtables');

        webTablesPage
            .clickAddButton()
            .addNewEmployee()
            .clickSubmitButton()
            // .checkEmployeeDataInTable()
    });

    // it.only("TC_02.04.01 | Elements  >  Web Tables >  Verify the possibility of adding a new employee to the table using the Registration Form", () => {
    //     cy.visit('https://demoqa.com/webtables');

    //     webTablesPage
    //         .clickAddButton()
    //         .addNewEmployee()
    //         .clickSubmitButton()

    //     const employeeData = webTablesPage.employeeData;

    //     webTablesPage
    //         .clickEditButton()
    //         .cleanEmployee()
    //         .addNewEmployee()
    //         .clickSubmitButton()

    // });

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