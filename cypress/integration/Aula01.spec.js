/// <reference types="cypress" />

describe('Acessando a pagina de Central de Atendimento', ()=> {
    beforeEach(function (){
        cy.AccessURL()
    })

    it('Verifica o titulo da aplicação',()=> {
        cy.title().should('eq','Central de Atendimento ao Cliente TAT')
    })

    it('Preenche os campos obrigatorios e envia o formulario retornando mensagem de sucesso', () => {
        cy.get('#firstName').type('Cleison')
        cy.get('#lastName').type('Paganotto')
        cy.get('#email').type('cleisonpaganotto@templateSettings.com')
        cy.get('#open-text-area').type('Validando retorno de sucesso so adicionar um novo item!')
        cy.contains('button', 'Enviar').click()
        cy.get('.success').should('be.visible')
    });

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

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
        cy.get('#firstName').type('Cleison')
        cy.get('#lastName').type('Paganotto')
        cy.get('#email').type('cleisonpaganotto')
        cy.get('#open-text-area').type('Validando retorno de sucesso so adicionar um novo item!')
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
    });

    it('Valida que o campo numero não aceita string e caso seja informado uma string ele permanece vazio', () => {
        cy.get('#firstName').type('Cleison')
        cy.get('#lastName').type('Paganotto')
        cy.get('#email').type('cleisonpaganotto@teste.com')
        cy.get('#open-text-area').type('Teste!')
        cy.get('#phone').type('teste').should('have.value', '')
    });

    it('Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
        cy.get('#firstName').type('Cleison')
        cy.get('#lastName').type('Paganotto')
        cy.get('#email').type('cleisonpaganotto@teste.com')
        cy.get('#open-text-area').type('Validando retorno de sucesso so adicionar um novo item!')
        cy.get('#phone-checkbox').click()
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
    });

    it('Preenche e limpa os campos nome, sobrenome, email e telefone', () => {
        cy.get('#firstName').type('Cleison').should('have.value', 'Cleison').clear().should('have.value', '')
        cy.get('#lastName').type('Paganotto').should('have.value', 'Paganotto').clear().should('have.value', '')
        cy.get('#email').type('cleisonpaganotto@teste.com').should('have.value', 'cleisonpaganotto@teste.com').clear().should('have.value', '')
        cy.get('#open-text-area').type('Validando retorno de sucesso so adicionar um novo item!').clear().should('have.value', '')
    });

    it('Exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
    });

    //Como extra alterei o comando que faz o visit, antes estava diretamente como cy.visit() dentro do beforeEach agora é um comando costomizavel chamado cy.AccessURL()
    it('Envia o formuário com sucesso usando um comando customizado', () => {
        cy.fillMandatoryFieldAndSubmit()
        cy.get('.success').should('be.visible')
    });

    it('Seleciona um produto (YouTube) por seu texto', () => {
        cy.get('select')
          .select('youtube')
          .should('have.value', 'youtube')
    });

    //Aula 02 - Extra 01
    it('Seleciona um produto (Mentoria) por seu value', () => {
        cy.get('select')
          .select('mentoria')
          .should('have.value', 'mentoria')
    });

    //Aula 02 - Extra 02
    it('Seleciona um produto (Blog) por seu indice', () => {
        cy.get('select')
          .select(1)
          .should('have.value', 'blog')
    });

    //Aula 03 - Exercicio 01
    it('Marca o tipo de atendimento "Feedback"', () => {
        cy.get('input[type="radio"][value="feedback"]')
          .check()
          .should('be.checked')
    });

    //Aula 03 - Extra 01
    it('Marca cada tipo de atendimento', () => {
        cy.get('input[type="radio"]')
          .should('have.length', 3)
          .each(($radio)=>{
            cy.wrap($radio).check()
            cy.wrap($radio).should('be.checked')
          })
        
    });

    it('Marca ambos checkboxes, depois desmarca o último', () => {
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

    it('Seleciona um arquivo da pasta fixtures', () => {
        cy.get('input[type="file"]#file-upload')
          .should('not.have.value')
          .selectFile('./cypress/fixtures/example.json')
          .should(($input)=>{
            expect($input[0].files[0].name).to.equal('example.json')            
          })
    });


    it('Seleciona um arquivo da pasta fixtures simulando um drag and drop', () => {
        cy.get('input[type="file"]#file-upload')
          .should('not.have.value')
          .selectFile('./cypress/fixtures/example.json',{action:'drag-drop'})
          .should(($input)=>{
            expect($input[0].files[0].name).to.equal('example.json')            
          })
    });

    it('Seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
        cy.fixture("example.json").as('arquivoExemplo')
        cy.get('input[type="file"]#file-upload')
          .selectFile('@arquivoExemplo',{action:'drag-drop'})
          .should(($input)=>{
            expect($input[0].files[0].name).to.equal('example.json')            
          })
    });

     it('Verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
        cy.get('#privacy a').should('have.attr', 'target', '_blank')
    });

    it('Acessa a página da política de privacidade removendo o target e então clicando no link', () => {
        cy.get('#privacy a').invoke('removeAttr', 'target').click()
    });

    it('Testa a página da política de privacidade de forma independente', () => {
        cy.get('#privacy a').invoke('removeAttr', 'target').click()
        cy.get('#title').should('have.text', 'CAC TAT - Política de privacidade')
        cy.contains('Talking About Testing').should('be.visible')
    });

    it('Verifica que a mensagem é exibida e desaparece depois de três segundos', () => {
        
    });



})
