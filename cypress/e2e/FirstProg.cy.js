describe('Open Browser Test', () => {
    it('should open the browser and visit a webpage', () => {
      // Visit a webpage
      cy.visit('https://google.com')
      cy.get('#APjFqb').type("Sydney Australia")
      cy.wait(2000)
      cy.screenshot('fullpage-screenshot', { capture: 'fullPage' })
      cy.get('.FPdoLc > center > .gNO89b').click({force: true} )
      cy.get(':nth-child(1) > .MjjYud > .g > .srKDX > .jGGQ5e > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb').click()
      
    });
  });