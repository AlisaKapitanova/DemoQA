import {faker} from "@faker-js/faker"

class ElementsWebTablesPage {
    getAddButton = () => cy.get('#addNewRecordButton');
    getRegistrationForm = () => cy.get('#userForm');
    getSubmitButton = () => cy.get('#submit');
    getInputFieldFirstName = () => cy.get('#firstName');
    getInputFieldLastName = () => cy.get('#lastName'); 
    getInputFieldEmail = () => cy.get('#userEmail'); 
    getInputFieldAge = () => cy.get('#age'); 
    getInputFieldSalary = () => cy.get('#salary'); 
    getInputFieldDepartment = () => cy.get('#department');
    getArrayOfDeleteRowButton = () => cy.get('span[title="Delete"]');

    employeеData;

    clickAddButton() {
        this.getAddButton().click();
        return this;
    };

    clickSubmitButton() {
        this.getSubmitButton().click();
        return this;
    };

    addNewEmployee() {
        this.employeeData = {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            age: faker.datatype.number({ min: 18, max: 99 }),
            salary: faker.finance.amount({ min: 1000, max: 20000, dec: 0 }),
            department: faker.commerce.department(),
        }

        this.getInputFieldFirstName().type(this.employeeData.firstName);
        this.getInputFieldLastName().type(this.employeeData.lastName);
        this.getInputFieldEmail().type(this.employeeData.email);
        this.getInputFieldAge().type(this.employeeData.age);
        this.getInputFieldSalary().type(this.employeeData.salary);
        this.getInputFieldDepartment().type(this.employeeData.department);

        return this;
    };

    checkEmployeeDataInTable() {
        cy.contains(this.employeeData.firstName).should('exist');
        cy.contains(this.employeeData.lastName).should('exist');
        cy.contains(this.employeeData.email).should('exist');
        cy.contains(this.employeeData.age).should('exist');
        cy.contains(this.employeeData.salary).should('exist');
        cy.contains(this.employeeData.department).should('exist');

        return this;
      };
};

export default ElementsWebTablesPage 