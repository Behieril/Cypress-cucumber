import {Given,When,Then,} from "@badeball/cypress-cucumber-preprocessor";
import {CarrersContent} from "../../pages/CarrersPage.js"

const carrers = new CarrersContent()

Given("User go to the careers page", () =>{
    cy.visit("https://telnyx.com/company/careers")
})
When("User scroll into comentary section and click on it", () => {
    carrers.CookiesSkip()
    carrers.Scroll()
    carrers.ClickOnNext()
    carrers.ClickOnPrevious()
    carrers.ClickOn1slide()
    carrers.ClickOn2slide()
    carrers.ClickOn3slide()

})
Then("Arrows must be visible and clicable", () =>{
    cy.get("button[aria-label='Slide 3']").should('be.visible')
    cy.get("button[aria-label='Slide 2']").should('be.visible')
    cy.get("button[aria-label='Slide 2']").should('be.visible')
    cy.get("button[aria-label='Next Item']").should('be.visible')
    cy.get("button[aria-label='Previous Item']").should('be.visible')
})