import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
import {Network} from "../../pages/NetworkPage"

const network = new Network;

Given("User is located in Network page", () => {
    cy.visit("https://telnyx.com/solutions/global-ip-network")
    network.CookiesSkip()
})

When("User is located in Network page and check content", () => {
    network.ScrollToTab()
    cy.get('#content-5qKqtUbJNN3vVehx6JvATL > .sc-5c7b8005-4 > .sc-5c7b8005-5 > .sc-b5e72f6c-0 > div > img').should('be.visible')
    network.CompetitorNetworks1()
    cy.get('#content-2IXQpgM9HStNH0WnUUiWCw > .sc-5c7b8005-4 > .sc-5c7b8005-5 > .sc-b5e72f6c-0 > div > img').should('be.visible')
    network.ScrollToTab1()
    cy.get('#content-Sq8ENgsX3FFJrQ1xYXJAa > .sc-5c7b8005-4 > .sc-5c7b8005-5 > .sc-b5e72f6c-0 > div > picture > img').should('be.visible')
    network.CompetitorNetworks2()
    cy.get('#content-4azmFSNfuMMzXK062TEcHx > .sc-5c7b8005-4 > .sc-5c7b8005-5 > .sc-b5e72f6c-0 > div > picture > img').should('be.visible')
    network.PricingLinkButton()
    })
Then("All content must be visible and user must go to Pricing page", () => {
    cy.intercept('https://telnyx.com/pricing')
})