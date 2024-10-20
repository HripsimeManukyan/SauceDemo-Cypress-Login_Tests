
describe('Test Login Functionality', function () {
    beforeEach(function () {
        // Visit the site before each test
        cy.visit('https://www.saucedemo.com/');
    });

    it('Test login functionality with valid credentials', function () {
        cy.url().should('include', 'saucedemo');

        cy.get('.login_logo').should('be.visible');
        


        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');


        cy.get('#login-button').should('not.be.disabled');


        cy.get('#login-button').click();


        cy.url().should('include', '/inventory.html');
    });

    it('Test login functionality with invalid credentials', function () {

        cy.url().should('include', 'saucedemo');


        cy.get('.login_logo').should('be.visible');


        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce2');


        cy.get('#login-button').should('not.be.disabled');


        cy.get('#login-button').click();


        cy.get('h3[data-test="error"]')
            .should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    });
});

