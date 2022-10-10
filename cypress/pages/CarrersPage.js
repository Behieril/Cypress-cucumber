export class CarrersContent{
    Scroll(){
        cy.get("div[data-testid='wrapper']").scrollIntoView()
    }
    ClickOnNext(){
        cy.get("button[aria-label='Next Item']").click()
    }
    ClickOnPrevious(){
        cy.get("button[aria-label='Previous Item']").click()
    }
    ClickOn1slide(){
        cy.get("button[aria-label='Slide 1']")
    }
    ClickOn2slide(){
        cy.get("button[aria-label='Slide 2']")
    }
    ClickOn3slide(){
        cy.get("button[aria-label='Slide 3']")
    }
    CookiesSkip(){
        cy.get('.sc-df34c536-0 > :nth-child(1) > .sc-5d3a275a-1').click()
    }
}