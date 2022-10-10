export class RegistrationPage{

    CookiesSkip(){
        
        cy.get('.sc-df34c536-0 > :nth-child(1) > .sc-5d3a275a-1').click()
    }
    EnterEmail(){
        cy.get('#email').type(Math.random().toString(36).substring(2,7)+'@gmail.com')
    }
    SignUp(){
        cy.get('.sc-14c941d7-5.sc-14c941d7-6 > .sc-5d3a275a-0 > .sc-5d3a275a-1').click()
    }

    EnterFullName(){
        cy.get('#full_name').type("Olegu Resyl")
    }
    EnterPassword(){
        cy.get('#password').type("kpcxzioioS233_P2PI2")
    }
    CreateAccountButtonClick(){
        cy.get('.sc-26f7330-6 > .sc-5d3a275a-0 > .sc-5d3a275a-1').click()
    }
    AgreeCheckClick(){
        cy.get('.sc-26f7330-5 > .sc-e117dd75-0 > svg > rect').click()
    }
    EmailField(){
        cy.get('.sc-876fcb71-2').type(Math.random().toString(36).substring(2,7)+'@gmail.com')
    }
    TryForFreeButtonClick(){
        cy.contains('Try for free').click()
    }
}



