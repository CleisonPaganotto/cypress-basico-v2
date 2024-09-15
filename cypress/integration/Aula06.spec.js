/// <reference types="cypress" />

describe('Acessando a pagina de Central de Atendimento', ()=> {

    beforeEach(function (){
        cy.AccessURL()
    })

    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
        cy.get('#privacy a').should('have.attr', 'target', '_blank')
    });

    it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
        cy.get('#privacy a').invoke('removeAttr', 'target').click()
    });

    it('testa a página da política de privacidade de forma independente', () => {
        cy.get('#privacy a').invoke('removeAttr', 'target').click()
        cy.get('#title').should('have.text', 'CAC TAT - Política de privacidade')
        cy.contains('Talking About Testing').should('be.visible')
    });




})