export default class Header {
    static clickSignInLink(){

        cy.get('.navbar-nav > [data-test=sign-in]').click()

    }

    static clickSignoutLink(){
        cy.get('[data-test=sign-out]').click()
    }

    static getHomeLink(){
        return cy.get('[data-test=home]')
    }

    static clickAddressLink(){
        cy.get('[data-test=addresses]').click()
        //cy.get('[href=/addresses]').click()
    }

    static getAddressLink(){
        return cy.get('[data-test=addresses]')
        //return cy.get('[href=/addresses]')
    }

    static getCurrentUser(){
        return cy.get('[data-test=current-user]')
    }
}

