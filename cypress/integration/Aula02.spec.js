/// <reference types="cypress" />

describe('Acessando a pagina de Central de Atendimento', ()=> {

    beforeEach(function (){
        cy.AccessURL()
    })

    //Aula 02 - Exercicio 01
    it('seleciona um produto (YouTube) por seu texto', () => {
        cy.get('select')
          .select('youtube')
          .should('have.value', 'youtube')
    });

    //Aula 02 - Extra 01
    it('seleciona um produto (Mentoria) por seu value', () => {
        cy.get('select')
          .select('mentoria')
          .should('have.value', 'mentoria')
    });

    //Aula 02 - Extra 02
    it('seleciona um produto (Blog) por seu indice', () => {
        cy.get('select')
          .select(1)
          .should('have.value', 'blog')
    });

})