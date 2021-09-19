export default class SignUpPage{

    static getEmailTextField(){

        return cy.get('[class=sign-up] [data-test=email]')
        
    }

    static getPasswordTextField(){

        return cy.get('[class=sign-up] [data-test=password]')

    }

    static getSubmitBtn(){

        return cy.get('[class=sign-up] [data-test=submit]')

    }

}
