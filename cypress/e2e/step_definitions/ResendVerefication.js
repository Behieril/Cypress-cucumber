import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
import {VerificationPage} from "../../pages/Verification.js"

const verificationpage = new VerificationPage()

Given("User should be on verification page", () =>{
    cy.visit("https://portal.telnyx.com/#/login/resend-email")
})
When("User input their email", () =>{
    verificationpage.InputField()
    verificationpage.Sentmailbtn()
})
Then("User must see notification", () =>{
    cy.get('div.Message__MessageContent-gQIxgg.hGlGBT').should('be.visible')
})