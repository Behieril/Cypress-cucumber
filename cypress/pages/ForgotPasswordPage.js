export class ForgotPassword{
    EmailInput(){
        cy.get('.ui-reactv2-input').type(Math.random().toString(36).substring(2, 35)+"@gmail.com")
    }
    ResetButtonClick(){
        cy.get('.Button__StyledDefaultButton-bvSDhd').click()
    }
}