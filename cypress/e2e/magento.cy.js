describe('Assignment', () => {


  it('Navigate website', () => {
    cy.visit(' https://magento.softwaretestingboard.com/')

    cy.contains("Sign In").click()

    cy.get("#email").type("demoabc@gmail.com")
    cy.get('input[name="login[password]"]').type("Abc1234@")
    cy.get('.action.login.primary').click()

    cy.scrollTo(0, 1800)

    cy.contains("Breathe-Easy Tank").click()
    cy.get("#option-label-size-143-item-170").click();
    cy.get("#option-label-color-93-item-59").click()
    cy.get("#product-addtocart-button").click()

    cy.get(".action.showcart").click();

    cy.get('#ui-id-1').should('contain', 'Breathe-Easy Tank');
  })

})