Cypress.Commands.add('fillMandatoryFieldAndSubmit', ()=>{
    cy.get('#firstName').type('Cleison')
    cy.get('#lastName').type('Paganotto')
    cy.get('#email').type('cleisonpaganotto@teste.com')
    cy.get('#open-text-area').type('Validando retorno de sucesso ao adicionar um novo item!')
    cy.contains('button', 'Enviar').click()
})

Cypress.Commands.add('AccessURL',()=>{
    cy.visit('./src/index.html');
})