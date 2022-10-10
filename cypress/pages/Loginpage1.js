export class LogIn{

    elements = {
        emailInput: () => cy.get('.eSxLXo > .InlineForm__Container-sc-1r23z15-0 > .TextField__Container-sc-r5o2cn-0 > .TextField__InputWrapper-sc-r5o2cn-4 > .ui-reactv2-input'),
        passwordInput: () => cy.get('.flxMbT > .InlineForm__Container-sc-1r23z15-0 > .TextField__Container-sc-r5o2cn-0 > .TextField__InputWrapper-sc-r5o2cn-4 > .ui-reactv2-input'),
        submitBtn: () => cy.get('.Button__StyledDefaultButton-sc-44gl5i-0'),
        errorMessage: () => cy.get('div.Message__MessageContent-sc-1lbs5ge-1.ijTSPa'),
        forgotpasswordbtn: () => cy.get('.flxMbT > .Text__makeText-sc-1l8eqw9-0 > a')
      };

    EmailField(email){
        this.elements.emailInput.type(email)
    }
    PasswordField(password){
        this.elements.passwordInput.type(password)
    }
    SubmitButtonClick(){
        this.elements.submitBtn.click()
    }
    ForgotPasswordClick(){
        this.elements.forgotpasswordbtn.click()
    }
    submitLogin(email,password){
        this.elements.emailInput().type(email);
        this.elements.passwordInput().type(password);
        this.elements.submitBtn().click();
      }
}