import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor"
import {SupportCenter} from "../../pages/SupportCentrePage.js"

const supportcenter = new SupportCenter()

Given("User should be on main page", () =>{
    cy.visit("https://support.telnyx.com/en/")
})
When("User clicks on Support Center link on main page", ()=>{
    supportcenter.GettingStarted()
})
When("User type in search field 'Type' and click on first result", ()=>{
    supportcenter.SearchField("Type{enter}")
    supportcenter.FirstSearchResult()
})
Then("User should be in 'Getting Started' page", () =>{
    cy.intercept("https://support.telnyx.com/en/collections/133094-getting-started")
})
Then("User must be in first result page", () =>{
    cy.intercept("https://support.telnyx.com/en/articles/3199007-guide-to-using-our-traffic-type-feature")
})
