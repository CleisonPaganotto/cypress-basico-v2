# Estudos sobre testes automatizados com Cypress

- Estudos sobre automação de testes com Cypress

## Pré-requisitos para rodar os testes

- [git]: Estou usando a versão `2.25.1`
- [Node.js]: Estou usando a versão `v20.11.0`
- [npm]: Estou usando a versão `10.2.4`
- [Cypress] Estou usando a versão `9.5.1`

## Instação

- Rode o comando `npm install` após efetuar o donwload do projeto, desta forma ira instalar as dependencias presentes do `package.json`

## Execução dos scripts de teste

- Os testes podem ser executados tanto em uma viewport mobile quanto desktop. É possivel rodar os testes tanto em modo iterativo quando em modo headless

### Desktop

- Execute o seguinte comando no terminal `npm cy:open`, para rodar o script em modo iterativo e com viewport desktop

- Execute o seguinte comando no terminal `npm test` para rodar o script em modo headless e viewport desktop

### Mobile

- Execute o seguinte comando no terminal `npm run cy:open:mobile`, para rodar o script em modo iterativo e com viewport mobile

- Execute o seguinte comando no terminal `npm run test:mobile` para rodar o script em modo headless e viewport mobile




