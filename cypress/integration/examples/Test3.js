describe('My Third Test Suite', function () {

    it('My ThirdTest case', function () {


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // 1. Checkbox
        // check the checkbox
        // and is used for adding another should for assertion
        // check is used for checkboxes, click for clicking an element
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')

        // uncheck the checkbox
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        // check multiple checkboxes
        cy.get('input[type="checkbox"]').check(['option1', 'option2', 'option3'])

        // 2.Dropdown
        // Static dropdown
        cy.get('select').select('option2').should('have.value', 'option2')

        // Dynamic dropdown
        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu-item div').each(($e1, index, $list) => {

            if ($e1.text() === "India") {
                $e1.click()
            }
        })

        // assert for Dynamic dropdown
        cy.get('#autocomplete').should('have.value', 'India')

        // 3. Visibilty of elements
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#hide-textbox').click()

        // radio buttons
        cy.get('[value="radio2"]').check().should('be.checked')
    })
})