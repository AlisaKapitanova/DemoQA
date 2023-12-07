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

    firstName;
    lastName;
    email;
    age;
    salary;
    department;
    employeеData = [];

    clickAddButton() {
        this.getAddButton().click();
        return this;
    };

    clickSubmitButton() {
        this.getSubmitButton().click();
        return this;
    };

    addNewEmployee() {
        this.firstName = faker.person.firstName();
        this.lastName = faker.person.lastName();
        this.email = faker.internet.email();
        this.age = faker.datatype.number({ min: 18, max: 99 });
        this.salary = faker.finance.amount({ min: 1000, max: 20000, dec: 0 });
        this.department = faker.commerce.department()

        this.employeeData = [(this.getInputFieldFirstName().type(this.firstName)),
        this.getInputFieldLastName().type(this.lastName),
        this.getInputFieldEmail().type(this.email),
        this.getInputFieldAge().type(this.age),
        this.getInputFieldSalary().type(this.salary),
        this.getInputFieldDepartment().type(this.department)];

        return this;
    };

    checkEmployeeDataInTable(employeeData) {
        cy.contains(employeeData.firstName).should('exist');
        cy.contains(employeeData.lastName).should('exist');
        cy.contains(employeeData.email).should('exist');
        cy.contains(employeeData.age).should('exist');
        cy.contains(employeeData.salary).should('exist');
        cy.contains(employeeData.department).should('exist');
      };
};

export default ElementsWebTablesPage 