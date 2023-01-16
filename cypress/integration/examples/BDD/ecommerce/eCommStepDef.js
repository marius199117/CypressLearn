/// <reference types="Cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import HomePage from "../../../../pageObjects/HomePage"
import ProductPage from "../../../../pageObjects/ProductPage"

const homePage = new HomePage()
const productPage = new ProductPage()
let name

Given('I open Ecommerce page', () => {
    cy.visit(Cypress.env('url') + "/angularpractice/")
})

When('I add items to Cart', function () {
    homePage.getShopTab().click()
    this.data.productName.forEach(function (element) {
        cy.selectProduct(element)
    })
    productPage.checkoutButton().click()
})

When('I Validate the total prices', () => {
    var sum = 0
    cy.get('tr td:nth-child(4) strong').each(($e1, index, $list) => {

        const amount = $e1.text()
        var res = amount.split(" ")
        res = res[1].trim()
        sum = Number(sum) + Number(res)
    }).then(function () {
        cy.log(sum)
    })
    // compare the sum from above with the sum displayed in the checkout for the elements
    cy.get('h3 strong').then(function (element) {
        const amount = element.text()
        var res = amount.split(" ")
        var total = res[1].trim()
        // compare 2 values
        expect(Number(total)).to.equal(sum)
    })
})

Then('select the country, submit and verify Thankyou', () => {
    cy.contains('Checkout').click()
    cy.get('#country').type('India')
    cy.get('.suggestions > ul > li > a').click()
    cy.get('#checkbox2').click({ force: true })
    cy.get('input[type="submit"]').click()
    cy.get('.alert').then(function (element) {
        const actualText = element.text()
        expect(actualText.includes("Success")).to.be.true
    })
})

When('I fill the form details', function (dataTable) {
    // [bobz, male ]
    name = dataTable.rawTable[1][0]
    homePage.getEditBox().type(dataTable.rawTable[1][0])
    homePage.getGender().select(dataTable.rawTable[1][1])
})

Then('I validate the forms behaviour', function () {
    homePage.getTwoWayDataBinding().should('have.value', name)
    homePage.getEditBox().should('have.attr', 'minlength', 2)
    homePage.getEnterpreneaur().should('be.disabled')
})

Then('select the Shop Page', () => {
    homePage.getShopTab().click()
})