describe('dashboard', () => {
    it('check to see if page laods', () => {
      cy.visit('http://localhost:3000/dashboard')
    })
    it('click on a button "ADD BULLET"', () => {
      cy.get('[id^=logo]').click()
      // ^ add id to  logo from bar.jsx
    })
    it('check to see if page laods', () => {
        cy.visit('http://localhost:3000/dashboard')
    })
    it('click on profile', () => {
        cy.get('[id^=profile]').click()
         // ^ add id to links from bar.jsx
      })
      it('click on a tracker', () => {
        cy.get('[id^=tracker]').click()
        // ^ add id to links from bar.jsx
      })

})