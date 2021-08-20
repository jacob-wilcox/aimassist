describe('get in login page', () => {
  it('check to see if page laods', () => {
    cy.visit('http://localhost:3000/profile')
  })
  it('input check', () => {
    cy.get('[id^=first_name]').clear().type('Eminem')
    cy.get('[id^=last_name]').clear().type('Slim Shady')
    cy.get('[id^=email]').clear().type('Eminem')
    cy.get('[id^=password]').clear().type('Password')
  })

  it('click on a button', () => {
    cy.get('button').click()
  })
})