describe('can find all elements on website', ()=> {
    beforeEach(() => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space')
    })
    
    it('can find all buttons in header', ()=> {
        cy.get('.header_logo')

        cy.findByRole('link', {name: /Home/i})
        cy.findByRole('button', {name: /About/i})
           .should('be.visible')

        cy.findByRole('button', {name: /Contacts/i})
          .should('be.visible')

        cy.findByRole('button', {name: /Guest log in/i})
          .should('be.visible')

        cy.findByRole('button', {name: /Sign In/i})
          .should('be.visible')

    })

    it('can find elements in body', ()=> {
        cy.findByRole('button', {name: /Sign up/})
          .should('contain', 'Sign up')
    })

    it('can find a social network links in footer', ()=> {
      // Social networks links
      cy.get('a.socials_link[href="https://www.facebook.com/Hillel.IT.School"]').should('be.visible')
      cy.get('a.socials_link[href="https://t.me/ithillel_kyiv"]').should('be.visible')
      cy.get('a.socials_link[href="https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"]').should('be.visible')
      cy.get('a.socials_link[href="https://www.instagram.com/hillel_itschool/"]').should('be.visible')
      cy.get('a.socials_link[href="https://www.linkedin.com/school/ithillel/"]').should('be.visible')

      // Other contacts
      cy.get('a.contacts_link.display-4[href="https://ithillel.ua"]').should('be.visible')
      cy.get('a.contacts_link.h4[href="mailto:developer@ithillel.ua"]').should('be.visible')
    })
})