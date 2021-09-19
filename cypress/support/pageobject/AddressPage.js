export default class AddressPage{

    static getAddressTable(){
        return cy.get('table[class=table] tbody')
    }

    static getDeleteAddressLink(){
        // return cy.get('table[class=table] [data-method=delete]')
        return cy.get('table[class=table] tbody tr td:nth-child(7) a')
    }

    static clickNewAddressLink(){
        cy.get('[data-test=create]').click()
    }

}

