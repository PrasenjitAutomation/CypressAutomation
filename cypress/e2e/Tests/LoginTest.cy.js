import { Login } from "../../pages/Login"
const loginObj = new Login()
import Logindata from '../../fixtures/Logindata.json'

describe(' test automation', () => {



    it('Login flow', () => {
        loginObj.openURL()
        loginObj.enterUserName(Logindata.UserName)
        loginObj.enterPassword(Logindata.Password)
        loginObj.clickOnLoginBtn()
        cy.screenshot('fullpage-screenshot', { capture: 'fullPage' })

    })
})