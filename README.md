<h1>API Free Dict</h1>

<h2> Objetivo:</h2>

<p>O projeto tem como objetivo principal possibilitar que o usuário consiga acessar um acervo de palavras em inglês e para cada palavra disponível verificar seu tipo, pronuncia, aplicação e etc</p>

<a href="https://free-dict.herokuapp.com/" title="deploy">Deploy da aplicação</a></br>

<h4> Clone do repositório </h4>

- `https://github.com/zecart22/backendfreedict`

<h4> Instalando dependencias</h4>

- `yarn install`

<h4> Rodando projeto</h4>

-`crie um banco de dados no postgres e guarde o user, a senha e o nome do banco de dados`

- `configure no seu arquivo .env as variáveis de ambiente conforme no .env.example`
- `dê o comando yarn dev para rodar o servidor`
- `no insominia, postman ou qualquer outro semelhante rode a rota /words/generate isso alimentará seu banco de dados com todas as palavras para aplicação funcionar`

<h3> Rotas da API</h3>

<h4> USER</h4>

<h5> Cadastrando User</h5>

`Metodo: Post`
`baseURL/users `

- Corpo da Requisição(req.body):

      {
      "name" : "New User",
      "email" : "newuser@email.com",
      "password" : "123123"
      }

- Retorno:

  {
  "id": "8792f508-7062-4772-abf2-862d9a9b57f1",
  "name": "New User",
  "email": "newuser@email.com"
  }

<h5> Logando User</h5>

`Metodo: Post`
`baseURL/login`

- Corpo da Requisição(req.body):

      {
      "email" : "newuser@email.com",
      "password" : "123123"
      }

- Retorno:
  {
  "id": "8792f508-7062-4772-abf2-862d9a9b57f1",
  "name": "Gil Gomes",
  "email": "gilgomes@gil.com",
  "token": "token"
  }

<h5> Logando User</h5>

`Metodo: Post`
`baseURL/login`

- Corpo da Requisição(req.body):

      {
      "email" : "newuser@email.com",
      "password" : "123123"
      }

- Retorno:
  {
  "id": "8792f508-7062-4772-abf2-862d9a9b57f1",
  "name": "Gil Gomes",
  "email": "gilgomes@gil.com",
  "token": "token"
  }

<h5> Detalhes do User</h5>

`Metodo: Get`
`baseURL/user/details`

Athentication:

Token: Token
Prefix: Bearer

Retorno:

    {
     "name": "Gil Gomes",
     "email": "gilgomes@gil.com"
    }

<h4> Tecnologias utilizadas</h4>

- `ReactJS`
- `Typescript`
- `HTML5`
- `CSS`
- `Chakra UI`
- `Context API`
- `React Router Dom`
- `AXIOS`
- `Yup`

<h4> Por que da Stack ?</h4>

<a href="https://ibb.co/fxCMjy4"><img src="https://i.ibb.co/fxCMjy4/image6.png" alt="image6" border="0"></a>

<ul>
  <li> React foi utilizado por minha familiaridade com a ferramenta</li>
  <li>Typescript para tipagem que facilita o gerenciamento do projeto aumentando minha performace como desenvolvedor</li>
  <li>Chakra UI é uma poderosa Lib que utilizo muito para estilização das minhas aplicações, ela me ajuda a ganhar tempo e qualidade no trabalho em relação ao Syled Components ou CSS puro</li>
  <li>Context API para centralizar e gerenciar todas informações que eu preciso</li>
  <li>Axios para requisições</li>
  <p>Yup para montagem do schema e controle dos forms e envio do "data" em conformidade com o que se pede na documentação da API </p>

</ul>

<h4> Estrutura dos diretórios</h4>

-     src
      +---------assests
                +-------images : nesse diretório estão todas as imagens uitlizadas na aplicação.

      +----------components : nesse diretório estão todos componentes utilizados na aplicação.

      +----------contexts: nesse diretório estão centralizadas todas as variáveis da aplicação.

      +----------pages: nesse diretório estão todas as páginas da aplicação.

      +----------routes: nesse direitório estão todas as rotas das páginas da aplicação.

      +----------services: nesse diretório está localizada o link da API.

      +----------style: nesse diretório está localizado o Theme que trás todo padrão de estilização da aplicação.
