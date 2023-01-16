/// <reference types="Cypress" />

describe('My 6 Test Suite', function () {
    before(function () {
        // we are using fixture in order to use the data from example.json
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    it('My Test case', function () {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('select').select(this.data.gender)
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)
        // have.attr when you want to verify to resolve promise and verify for example the minlength of a attribute
        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', 2)
        // be disabled method
        cy.get('#inlineRadio3').should('be.disabled')
        cy.get(':nth-child(2) > .nav-link').click()

        // created on fixtures - examples.json an array in order to select all the elements added in the array
        this.data.productName.forEach(function (element) {
            cy.selectProduct(element)
        })

        // use created method (custom command) from support - commands to not hardcode the function and use it whatever you want with different data
        cy.selectProduct('Blackberry')
        cy.selectProduct('Nokia Edge')
    })
})