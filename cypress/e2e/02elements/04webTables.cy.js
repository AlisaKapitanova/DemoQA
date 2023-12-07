import ElementsWebTablesPage from "../../pageObjects/ElementsWebTablesPage";

const webTablesPage = new ElementsWebTablesPage();

describe.skip("Elements  > Web Tables", () => {

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
});