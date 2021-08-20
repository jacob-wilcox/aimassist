describe('dashboard', () => {
  it('check to see if page laods', () => {
    cy.visit('http://localhost:3000/dashboard')
  })
  it('click on a button "ADD BULLET"', () => {
    cy.get('[id^=newbullet]').click()
    // ^ add id to bullet button on Dashboard.jsx
  })
  it('add bullet', () => {
    cy.get('[id^=action]').clear().type('My bullet')
    cy.get('[id^=impact]').clear().type(`Im amazing`)
    cy.get('[id^=results]').clear().type('Nothing really')
    // add ids to inputs
  })
    it('click on a button submit button', () => {
      cy.get('[id^=submit]').click()
    })
    it('testing delete function', () => {
      cy.get('[id^=delete]').first().click()
    })
})