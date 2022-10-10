export class VerificationPage{
    InputField(){
        cy.get("input[name='email']").type(Math.random().toString(36).substring(2, 35)+"@gmail.com")
    }
    Sentmailbtn(){
        cy.get("button[type='submit']").click()
    }
}