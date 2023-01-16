/// <reference types="Cypress" />
// imported Home Page class
import HomePage from "../../pageObjects/HomePage"
import ProductPage from "../../pageObjects/ProductPage"

describe('Page Object Suite', function () {
    before(function () {
        // we are using fixture in order to use the data from example.json
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    it('My Test case', function () {
        // if you want to add the cypress.config.js only for this class and overwrite if you want
        // Cypress.config('defaultCommandTimeout', 8000)
        // created object for this class
        const homePage = new HomePage()
        const productPage = new ProductPage()

        // environment variables
        // using cypress.env.js you are using from cypress.config.js
        // and the parameter is url, which is put on cypres.env.js -> env
        cy.visit(Cypress.env('url')+'/angularpractice/')

        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        // have.attr when you want to verify to resolve promise and verify for example the minlength of a attribute
        homePage.getEditBox().should('have.attr', 'minlength', 2)
        // be disabled method
        homePage.getEnterpreneaur().should('be.disabled')
        homePage.getShopTab().click()

        // created on fixtures - examples.json an array in order to select all the elements added in the array
        this.data.productName.forEach(function (element) {
            cy.selectProduct(element)
        })


        productPage.checkoutButton().click()
        // sum example for 2 numbers. 2 prices - we trim them in order to know the sum.
        // Javascript is working assyncroinous. we need to to resolve the promise and use the "then"
        // to wait to run the const/var/res and sum before cy.log(sum)
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
        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({ force: true })
        cy.get('input[type="submit"]').click()
        // cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('.alert').then(function (element) {
            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true
        })
    })

})