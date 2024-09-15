/// <reference types="cypress" />

describe('Acessando a pagina de Central de Atendimento', ()=> {
    beforeEach(function (){
        cy.AccessURL()
    })

    //Exercicio 01
    it('Verifica o titulo da aplicação',()=> {
        cy.title().should('eq','Central de Atendimento ao Cliente TAT')
    })

    //Aula 01 - Exercicio 01
    it('Preenche os campos obrigatorios e envia o formulario retornando mensagem de sucesso', () => {
        cy.get('#firstName').type('Cleison')
        cy.get('#lastName').type('Paganotto')
        cy.get('#email').type('cleisonpaganotto@templateSettings.com')
        cy.get('#open-text-area').type('Validando retorno de sucesso so adicionar um novo item!')
        cy.contains('button', 'Enviar').click()
        cy.get('.success').should('be.visible')
    });

    //Aula 01 - Extra 1
    it('Preenche os campos obrigatorios e aplica delay a escrita do texto na area de texto', () => {
        cy.get('#firstName').type('Cleison')
        cy.get('#lastName').type('Paganotto')
        cy.get('#email').type('cleisonpaganotto@teste.com')
        cy.get('#open-text-area').type(
            'Validando retorno de sucesso so adicionar um novo item!Validando retorno de sucesso so adicionar um novo item!Validando retorno de sucesso so adicionar um novo item!',
            {delay: 0})
        cy.contains('button', 'Enviar').click()
        cy.get('.success').should('be.visible')
    });

    //Aula 01 - Extra 2
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
        cy.get('#firstName').type('Cleison')
        cy.get('#lastName').type('Paganotto')
        cy.get('#email').type('cleisonpaganotto')
        cy.get('#open-text-area').type('Validando retorno de sucesso so adicionar um novo item!')
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
    });

    //Aula 01 - Extra 3
    it('Valida que o campo numero não aceita string e caso seja informado uma string ele permanece vazio', () => {
        cy.get('#firstName').type('Cleison')
        cy.get('#lastName').type('Paganotto')
        cy.get('#email').type('cleisonpaganotto@teste.com')
        cy.get('#open-text-area').type('Teste!')
        cy.get('#phone').type('teste').should('have.value', '')
    });

    //Aula 01 - Extra 4
    it('Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
        cy.get('#firstName').type('Cleison')
        cy.get('#lastName').type('Paganotto')
        cy.get('#email').type('cleisonpaganotto@teste.com')
        cy.get('#open-text-area').type('Validando retorno de sucesso so adicionar um novo item!')
        cy.get('#phone-checkbox').click()
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
    });

    //Aula 01 - Extra 5
    it('Preenche e limpa os campos nome, sobrenome, email e telefone', () => {
        cy.get('#firstName').type('Cleison').should('have.value', 'Cleison').clear().should('have.value', '')
        cy.get('#lastName').type('Paganotto').should('have.value', 'Paganotto').clear().should('have.value', '')
        cy.get('#email').type('cleisonpaganotto@teste.com').should('have.value', 'cleisonpaganotto@teste.com').clear().should('have.value', '')
        cy.get('#open-text-area').type('Validando retorno de sucesso so adicionar um novo item!').clear().should('have.value', '')
    });

    //Aula 01 - Extra 6
    it('Exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
    });

    //Aula 01 - Extra 7
    //Como extra alterei o comando que faz o visit, antes estava diretamente como cy.visit() dentro do beforeEach agora é um comando costomizavel chamado cy.AccessURL()
    it('envia o formuário com sucesso usando um comando customizado', () => {
        cy.fillMandatoryFieldAndSubmit()
        cy.get('.success').should('be.visible')
    });

    /*
    Aula 01 - Extra 8
    No exercico extra 08, alteramos todos os comandos cy.get('button') para cy.contains('button', 'Enviar')
    */

})
