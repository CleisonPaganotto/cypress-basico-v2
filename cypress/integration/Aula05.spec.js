/// <reference types="cypress" />

describe('Acessando a pagina de Central de Atendimento', ()=> {

    beforeEach(function (){
        cy.AccessURL()
    })

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

    it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
        cy.fixture("example.json").as('arquivoExemplo')
        cy.get('input[type="file"]#file-upload')
          .selectFile('@arquivoExemplo',{action:'drag-drop'})
          .should(($input)=>{
            expect($input[0].files[0].name).to.equal('example.json')            
          })
    });

})