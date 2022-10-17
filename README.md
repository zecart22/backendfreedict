<h1>API Free Dict</h1>

<h2> Objetivo:</h2>

<p>O projeto tem como objetivo principal possibilitar que o usuário consiga acessar um acervo de palavras em inglês e para cada palavra disponível verificar seu tipo, pronuncia, aplicação e etc</p>

<a href="https://free-dict.herokuapp.com/" title="deploy">Deploy da aplicação</a></br>

<h4> Clone do repositório </h4>

- `https://github.com/zecart22/backendfreedict`

<h4> Instalando dependencias</h4>

- `yarn install`

<h4> Front End da Aplicação <h4>

- `https://github.com/zecart22/frontendfreedict/tree/main/frontendfreedict`

<h4> Rodando projeto</h4>

-`crie um banco de dados no postgres e guarde o user, a senha e o nome do banco de dados`

- `configure no seu arquivo .env as variáveis de ambiente conforme no .env.example`
- `dê o comando yarn dev para rodar o servidor`
- `no insominia, postman ou qualquer outro semelhante rode a rota /words/generate isso alimentará seu banco de dados com todas as palavras para aplicação funcionar`

<h4> Veja as rotas e detalhes da aplicação no link abaixo</h4>
<a href="https://distinct-domain-f13.notion.site/Free-Dict-API-a2f2c842b8f848d3b1975fa93e209e1f" title="deploy">DOCUMENTAÇÃO FREEDICT API</a></br>

<h4> Tecnologias utilizadas</h4>

- `NodeJS`
- `Typescript`
- `Express`
- `Prisma ORM`
- `PostgresQl`
- `WordList API`
- `Bycrypt`
- `Cors`
- `Dotenv`

<h4> Por que da Stack ?</h4>

<a href="https://ibb.co/fxCMjy4"><img src="https://i.ibb.co/fxCMjy4/image6.png" alt="image6" border="0"></a>

<ul>
  <li> NodeJS foi utilizado por minha familiaridade com a ferramenta</li>
  <li>Typescript para tipagem que facilita o gerenciamento do projeto aumentando minha performace como desenvolvedor</li>
  <li>Postgres por ser banco de dados relacional robusto e simples de ultilizar</li>

</ul>

<h4> Estrutura dos diretórios arquitetura MSC</h4>

      +prisma
       +---------migrations
       +schema.prisma

-     src
      +---------Controllers
                +-------USER
                +-------WORD

      +----------middlewares

      +----------prisma

      +----------service
                +-------USER
                +-------WORD
      +routes
      +server

      +.env
