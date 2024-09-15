/// <reference types="cypress" />

describe('Acessando a pagina de Central de Atendimento', ()=> {

    beforeEach(function (){
        cy.AccessURL()
    })

    //Aula 03 - Exercicio 01
    it('marca o tipo de atendimento "Feedback"', () => {
        cy.get('input[type="radio"][value="feedback"]')
          .check()
          .should('be.checked')
    });

    //Aula 03 - Extra 01
    it('marca cada tipo de atendimento', () => {
        cy.get('input[type="radio"]')
          .should('have.length', 3)
          .each(($radio)=>{
            cy.wrap($radio).check()
            cy.wrap($radio).should('be.checked')
          })
        
    });
})