describe('My 6 Test Suite', function () {

    it('My 6Test case', function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // mouse over / hover
        // mouse hove events are not supported in cypress. Alternatively use jquery or force click.
        // invoke() is jquery function 
        // show method in jquery - will show all the elements
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', 'top')

        // force a click regardless of its actionable state
        cy.contains('Top').click({ force: true })
        cy.url().should('include', 'top')
    })
})