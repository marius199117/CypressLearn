describe('My Forth Test Suite', function () {

    it('My ForthTest case', function () {


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // cypress auto accepts alerts and popups
        // cypress have capability of browser events
        // window:alert is the event which get fired on alert open
        // So you are firing the event through cypress to get access to that alert
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        // window:alert
        // FOR ALERT
        cy.on('window:alert', (str) => {
            // Mocha - compare 2 strings
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        // FOR CONFIRM
        cy.on('window:confirm', (str) => {
            // Mocha - compare 2 strings
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        // invoke - remove Attr (remvoe atribute)
        // open a page which opens in another page in the same page
        // invoke() is jquery function
        cy.get('#opentab').invoke('removeAttr', 'target').click()

        // grab the url and assert
        // include - verify the second arrgument as a string
        cy.url().should('include', 'rahulshettyacademy')

        // navigate back
        cy.go('back')
    })
})