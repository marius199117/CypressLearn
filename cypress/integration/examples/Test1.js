describe('My First Test Suite', function () {

    it('My FirstTest case', function () {


        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //selenium get hit url in browser, cypress get acts like findElement of selenium
        cy.get('.product').should('have.length', 5)
        cy.get('.product:visible').should('have.length', 4)
        //Parent child chaining
        //Alias to reuse locator
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length', 4)
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()

        // select a particular element find after searching a filter
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {

                cy.wrap($el).find('button').click()

            }
        })

        // assert if logo text is correclty displayed
        cy.get('.brand').should('have.text', 'GREENKART')

        // this is to print in logs
        // Non cypress commands cannot resolve primise themselves. We need to manually resolve it.
        cy.get('.brand').then(function (logoElement) {
            cy.log(logoElement.text())
        })

    })


})