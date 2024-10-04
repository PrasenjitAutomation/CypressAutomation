export class Login {


    weblocators = {

        username: '#user-name',
        password: '#password',
        loginBtn: '#login-button'

    }

    openURL() {

        cy.visit(Cypress.env('URL'))
    }
    enterUserName(UName) {

        cy.get(this.weblocators.username)
        .should('be.visible')
        .type(UName)
    }
    enterPassword(Pward) {

        cy.get(this.weblocators.password)
        .should('be.visible')
        .type(Pward)
    }
    clickOnLoginBtn() {

        cy.get(this.weblocators.loginBtn)
        .should('be.visible')
        .click();
    }
}