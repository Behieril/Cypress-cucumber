import {Given,When,Then,} from "@badeball/cypress-cucumber-preprocessor";
import { Storage } from "../../pages/StoragePage";


const storage = new Storage()

Given("User go to the storage page", () => {
    cy.visit("https://telnyx.com/products/storage");
    storage.CookiesSkip()
  });
  
  When("User scrolls to Frequently Asked Questions about Telnyx Storage", () => {
    storage.Scroll()
    cy.wait(4000)
    storage.Span0Click()
    storage.Span2Click()
    storage.Span3Click()
    storage.Span4Click()
    storage.Span5Click()
    storage.Span6Click()
    storage.Span7Click()
  });
  Then("All span should work properly", () =>{
    cy.get('div.sc-fec4993d-0.iNgSjM').should('be.visible')
  })