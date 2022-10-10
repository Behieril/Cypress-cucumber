import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
import {RegistrationPage} from "../../pages/RegistrationPage.js"

const registrationage = new RegistrationPage()

Given("A web browser is at the main page", () => {
    cy.visit("https://telnyx.com/")

});

When("A user enters the email {string} and clicks on try free button then enter correct credentials", () => {
    registrationage.CookiesSkip()
    registrationage.EmailField()
    registrationage.TryForFreeButtonClick()
    cy.intercept("https://telnyx.com/sign-up")
    registrationage.EnterFullName()
    registrationage.EnterPassword()
    registrationage.AgreeCheckClick()
    registrationage.CreateAccountButtonClick()
    registrationage.CreateAccountButtonClick()
    cy.wait(30000)
});
When("A user click on SignUp and enter correct credentials",()=>{
    registrationage.SignUp()
    cy.intercept("https://telnyx.com/sign-up")
    registrationage.EnterEmail()
    registrationage.EnterFullName()
    registrationage.EnterPassword()
    registrationage.AgreeCheckClick()
    registrationage.CreateAccountButtonClick()
    cy.wait(30000)
}) 
Then("Registration must be finished", () => {
    cy.url().should('include', '/verify-email/f')
})