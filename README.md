# Sistema Web com Node.js, Express e Handlebars

Este é um projeto desenvolvido durante as aulas de Laboratório de Desenvolvimento Multiplataforma. O objetivo do projeto é criar um sistema web utilizando Node.js, Express e Handlebars, com funcionalidades básicas de cadastro e listagem de informações.

## Características do Projeto

- Rota "/" direciona para a view de cadastro, contendo os campos:
  - Nome
  - Endereço
  - Bairro
  - CEP
  - Cidade
  - Estado
  - Observações

- Rota "/listar" direciona para a view listar, apresentando as informações em uma tabela com os seguintes campos:
  - Nome
  - Endereço
  - Bairro
  - CEP
  - Cidade
  - Estado

- A tabela na view listar é preenchida com algumas linhas de forma estática.

- No final de cada registro da tabela na view listar, há botões para atualizar e excluir, embora essas funcionalidades não tenham sido implementadas neste momento.

- O sistema web é responsivo e utiliza os conceitos de Bootstrap para garantir uma experiência consistente em diferentes dispositivos e tamanhos de tela.

## Pré-requisitos

- Node.js instalado
- npm (gerenciador de pacotes do Node.js)

## Como Executar o Projeto

1. Clone este repositório:

   ```bash
   git clone https://github.com/amorim66/sistema_web_atividade.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd sistema_web_atividade
   ```

3. Instale as dependências do projeto:

   ```bash
   npm install
   ```

4. Execute o servidor:

   ```bash
   node app.js
   ```

5. Abra o navegador e acesse [http://localhost:3000/](http://localhost:3000/) para acessar a página de cadastro ou [http://localhost:3000/listar](http://localhost:3000/listar) para acessar a página de listagem.

## Contribuindo

Contribuições são bem-vindas! Para sugestões, melhorias ou correções, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.
