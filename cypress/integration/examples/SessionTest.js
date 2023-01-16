/// <reference types="Cypress" />
require('neat-csv')

// How to save the Login tokens in browser Local storage using Cypress
describe('Session Test', function () {
    it('Session Test', function () {
        cy.LoginAPI().then(function()
        {
            cy.visit("https://rahulshettyacademy.com/client",
            {
                onBeforeLoad: function(window)
                {
                    window.localStorage.setItem('token', Cypress.env('token'))
                }
            })
        })
    })
})