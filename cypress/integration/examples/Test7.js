describe('My 6 Test Suite', function () {

    it('My 6Test case', function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // jquery function .prop() help get the property value
        // if we work with cypress and non-cypress command it will not handle the cypress promise (we need to solve the promise with then)

        cy.get('#opentab').then(function (el) {
            const url = el.prop('href')
            cy.visit(url)
        })
    })
})