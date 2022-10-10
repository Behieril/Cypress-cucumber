import {Given,When,Then,} from "@badeball/cypress-cucumber-preprocessor";
import {ForgotPassword} from "../../pages/ForgotPasswordPage.js"

const forgotpassword = new ForgotPassword()

Given("A web browser is at the forgot password page", () => {
    cy.visit("https://portal.telnyx.com/#/login/password-reset");
  });
When("A user enters the email {string} and clicks on the resrt password button", () => {
    forgotpassword.EmailInput()
    forgotpassword.ResetButtonClick()
  });
Then("The message 'We have accepted your password reset request. If you have a Telnyx account and are unable to reset your password successfully, please contact support for assistance.' should be visible", () => {
    cy.get('.Message__MessageContent-gQIxgg').should('be.visible')
  });

