describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('.leftColumnArrow').first().click()
    cy.get('.leftColumnNames').should('be.visible')
    cy.get('.leftColumnArrow').first().click()
    cy.get('.leftColumnNames').should('not.exist')
  })
})