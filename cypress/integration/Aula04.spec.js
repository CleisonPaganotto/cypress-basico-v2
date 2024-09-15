/// <reference types="cypress" />

describe('Acessando a pagina de Central de Atendimento', ()=> {

    beforeEach(function (){
        cy.AccessURL()
    })

    it('marca ambos checkboxes, depois desmarca o último', () => {
        cy.get('input[type="checkbox"]')
          .check()
          .last()
          .uncheck()
          .should('not.be.checked')
    });

    it('Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
        cy.get('#firstName').type('Cleison')
        cy.get('#lastName').type('Paganotto')
        cy.get('#email').type('cleisonpaganotto@teste.com')
        cy.get('#open-text-area').type('Validando retorno de sucesso so adicionar um novo item!')
        cy.get('#phone-checkbox').check()
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
    });
})