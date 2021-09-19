
export default class SignInPage{

    static getEmailTextField(){

        return cy.get('[class=sign-in] [data-test=email]')

    }

    static getPasswordTextField(){

        return cy.get('[class=sign-in] [data-test=password]')

    }

    static getSubmitBtn(){

        return cy.get('[class=sign-in] [data-test=submit]')

    }

    static getSignUpLink(){
        return cy.get('[data-test=sign-up]')
    }

    static login(username,password){
       
        cy.get('[class=sign-in] [data-test=email]').type(username)
        cy.get('[class=sign-in] [data-test=password]').type(password)
        cy.get('[class=sign-in] [data-test=submit]').click()
    }

    static clickSignUpLink(){
        cy.get('[data-test=sign-up]').click()
    }

}
