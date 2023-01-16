/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe('Frame Test', function () 
{

    it('Frame Example', function () {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    // Iframe handle with Cypress
    cy.frameLoaded('#courses-iframe')

    cy.iframe().find("a[href*='mentorship']").eq(0).click()

    cy.iframe().find("h1[class*='pricing-title']").should('have.length', 0)
    
})
})

