describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update the display when arithmetical operators are clicked', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('.display').should('contain','4')
  })

  it('should chain multiple operations together', () => {
    cy.get('#number3').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2')
  })

  it('should show positive numbers correctly', () => {
  cy.get('#number3').click();
  cy.get('#operator_add').click();
  cy.get('#number4').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '7');
  })

  it('should show negative numbers correctly', () => {
  cy.get('#number3').click();
  cy.get('#operator-subtract').click();
  cy.get('#number4').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '-1');
  })

  it('should show decimal numbers correctly', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2.5');
  })

  it('should display very large numbers correctly', () => {
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#number5').click();
    cy.get('#number6').click();
    cy.get('#number7').click();
    cy.get('#number8').click();
    cy.get('#number9').click();
    cy.get('#number0').click();
    cy.get('.display').should('contain', '1234567890');
  })

  it('should display ERROR when you divide by 0', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'ERROR');
  }
  )
})