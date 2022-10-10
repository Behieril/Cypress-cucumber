import {Given,When,Then,} from "@badeball/cypress-cucumber-preprocessor";
import {LogIn} from "../../pages/Loginpage1";

const login = new LogIn()

Given("A web browser is at the login page", () => {
    cy.visit("https://portal.telnyx.com/?_gl=1*s7bppb*_ga*MzA3NDk2MzcxLjE2NjQ4OTUyOTM.*_ga_ZPM4K1DLND*MTY2NTM1MDUxNC4yLjEuMTY2NTM1MDUzMS4wLjAuMA..");
  });
  
  When("A user enters the email {string}, the password {string}, and clicks on the login button", (username,password) => {
    login.submitLogin(username,password)
  });
  When("A user provides incorrect credentials, and clicks on the login button", (table) => {
    table.hashes().forEach((row) => {
      cy.log(row.username);
      cy.log(row.password);
      login.submitLogin(row.username, row.password)
  
    });
  });
  Then("the URL will be on main page", () => {
    cy.intercept("https://portal.telnyx.com/?_gl=1*1erbdhv*_ga*MzA3NDk2MzcxLjE2NjQ4OTUyOTM.*_ga_ZPM4K1DLND*MTY2NTM1MjY4Ni4zLjEuMTY2NTM1MzM3MC4wLjAuMA..#/app/home")
  });
  Then("The error message 'That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again.' should be visible", () => {
    cy.get('div.Message__MessageContent-sc-1lbs5ge-1.ijTSPa').should('be.visible')
  });
