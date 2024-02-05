/// <reference types="cypress" />
describe('SCN01 EDIT ACCOUNT INFORMATION', () => {
    beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
    })
    it('TC01_Edit Email corect (positive case)', () => {
      cy.get('#email').clear().type('dopildopa@gmail.com')
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').clear().type('@Aroma321')
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
      cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
      cy.get('#change-email').click()
      cy.get('#email').clear().type('dopildopa@gmail.com')
      cy.get('#current-password').clear().type('@Aroma321')
      cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
      cy.get('.message-success').should('be.visible')
    })
      it('TC02_Edit Email incorect password (Negative case)', () => {
      cy.get('#email').clear().type('dopildopa@gmail.com')
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').clear().type('@Aroma321')
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
      cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
      cy.get('#change-email').click()
      cy.get('#email').clear().type('dopildopa@gmail.com')
      cy.get('#current-password').clear().type('@Aroma123')
      cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
      cy.get('.message-error').should('be.visible')
    })

      it('TC03_Edit Password Account Information (Positive case)', () => {
      cy.get('#email').clear().type('dopildopa@gmail.com')
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').clear().type('@Aroma321')
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
      cy.get('.change-password').click()
      cy.get('#current-password').type('@Aroma321')
      cy.get('#password').type('@Aroma123')
      cy.get('#password-confirmation').type('@Aroma123')
      cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
      cy.get('.message-success').should('be.visible')
     })
     })
     describe('SCN02 EDIT ADDRESS BOOK', () => {
      beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
      })
      it('TC01_Edit Address (positive case)', () => {
        cy.get('#email').clear().type('dopildopa@gmail.com')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').clear().type('@Aroma123')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
        cy.get('.box-billing-address > .box-actions > .action > span').click()
        cy.get('#telephone').clear().type('987654321')
        cy.get('#street_1').clear().type('Jl.Karya utama')
        cy.get('#street_2').clear().type('No.101')
        cy.get('#street_3').clear().type('Srengseng')
        cy.get('#city').clear().type('HAHAHAH')
        cy.get('#zip').clear().type('12312')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.get('.message-success').should('be.visible')
      })
      it('TC02_Edit Address (Negative case)', () => {
        cy.get('#email').type('dopildopa@gmail.com')
        cy.get('#pass').type('@Aroma123')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
        cy.get('.box-billing-address > .box-actions > .action > span').click()
        cy.get('#telephone').clear().type('987654321')
        cy.get('#street_1').clear()
        cy.get('#street_2').clear()
        cy.get('#street_3').clear()
        cy.get('#city').clear().type('HAHAHAH')
        cy.get('#zip').clear()
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.get('#street_1-error').should('be.visible')
        cy.get('#zip-error').should('be.visible')
      })
      })