describe('login page', () => {
  it('check to see if page laods', () => {
    cy.visit('http://localhost:3000/')
  })
  it('input check', () => {
    cy.get('[id^=name]').type('Eminem')
    cy.get('[id^=myInput]').type('Password')
  })

  it('click on a button', () => {
    cy.get('button').click()
  })
})