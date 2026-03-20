<!--


Aula 21 – Projeto Final: Inicializando e Fazendo a Navbar
Com esse projeto vamos aprender vários conceitos fundamentais do React, como:
. componentes
. estados
. heranças
. props (como passar informações de um componente para outro)
. e tudo que precisamos para montar um projeto real.



Criando o Projeto:
Fizemos todo o passo a passo: instalamos as dependências e o React Router.
Criamos a pasta do projeto dentro da pasta do curso de React, com o nome 
projeto-final, onde ficará nosso projeto.




Como visualizar no celular em tempo real (com Vite):
Uma funcionalidade bem útil do Vite é poder compartilhar a tela do projeto na rede, 
e assim acompanhar a versão mobile direto no celular.

Passo 1 – Rodar o projeto:
Rodamos o comando:
npm run dev


E ele retorna algo como:
 ➜  Local:   http://localhost:5173/
 ➜  Network: use --host to expose
 ➜  press h + enter to show help


Repare que aparece a mensagem use --host to expose.
Isso significa que, se adicionarmos essa opção, o projeto será exposto na rede.



Passo 2 – Editar o package.json:
No package.json, dentro de "scripts", localizamos o objeto "dev".
No valor já existente, adicionamos --host.

Exemplo:
"scripts": {
  "dev": "vite --host",
  "build": "vite build",
  "preview": "vite preview"
}



Passo 3 – Rodar novamente:
Rodando npm run dev de novo, agora o retorno será diferente:

➜  Local:   http://localhost:5173/
➜  Network: http://192.168.1.108:5173/
➜  press h + enter to show help

Note que surgiu a opção Network, com um IP da sua rede + porta.



Passo 4 – Acessar pelo celular:
Basta abrir o navegador do celular e colar o link do Network, por exemplo:

| http://192.168.1.108:5173/ |

Agora conseguimos ver em tempo real no celular o que está acontecendo no projeto.



Instalando o Bootstrap:
Optamos por não usar CDN, e sim instalar via npm.

No site oficial https://getbootstrap.com/
, copiamos o comando:

| npm i bootstrap@5.3.7 |

Rodamos no terminal ou CMD para instalar.



Importando o Bootstrap:
Com o Bootstrap instalado, importamos seus arquivos dentro do projeto:
jsx:
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'



Explicação do caminho:
. Dentro de node_modules, existe uma pasta bootstrap
. Dentro dela, temos dist
. Dentro de dist, temos css → com o arquivo bootstrap.css (que importamos)
. E também temos js → com o arquivo bootstrap.js



Testando o Bootstrap no projeto:
Uma forma de verificar se está funcionando é ir até a seção Docs no site oficial 
do Bootstrap, copiar um componente e colar no código.

Exemplo no App.jsx:
jsx:
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="alert alert-secondary" role="alert">
      A simple secondary alert—check it out!
    </div>
  )
}

export default App


O que está acontecendo aqui?
. Importamos o Bootstrap CSS e JS.
. No return, usamos um alert do Bootstrap (class="alert alert-secondary").
. Se o alerta aparecer na tela com o estilo, significa que o Bootstrap está 
funcionando corretamente.



Planejamento da Estrutura de Componentes:
Antes de sair codando, a primeira coisa é imaginar a separação dos componentes.
Isso pode ser feito olhando:
. um design feito no Figma ou Photoshop
. sites prontos de referência, como Dribbble ou Behance
. templates disponibilizados na internet

A ideia é mentalizar como cada parte da página será um componente.



Componentes que teremos no projeto:
. NavBar → a parte de cima.
. Categorias → área com os botões de categorias.
  . Dentro de categorias teremos o componente Filter → botão para abrir o modal 
de filtragem.
. Cards → cada card exibido na tela.
. Placeholder (Esqueletão) → um componente que exibe um “esqueleto” antes do 
conteúdo real carregar.
  . Esse tipo de recurso é usado por empresas grandes, como o YouTube, para 
melhorar a experiência do usuário.



Organização dos arquivos:
Além da pasta components, criaremos dentro dela uma pasta css para 
organizar os arquivos de estilo.


Exemplo de estrutura:

src/
   components/
      css/
         NavBar.css
      NavBar.jsx

Assim cada componente terá seu próprio arquivo CSS separado.


Dica de produtividade – Split no VS Code:
. O Split divide a tela em dois, permitindo editar o componente e seu CSS 
lado a lado.
. Para ativar: abra os dois arquivos, clique no ícone no canto superior 
direito (parece um livrinho).
. Atalhos úteis:
  . Ctrl + B → oculta a barra lateral.
  . Ctrl + B novamente → traz de volta.



Importando CSS no componente:
No NavBar.jsx, podemos importar seu CSS assim:

import React from "react";
import './css/NavBar.css'

export default function NavBar() {
    return (
        <div className="vermelho">NavBar</div>
    )
}



CSS geral no App.jsx:
O CSS geral geralmente é para o App.jsx, que normalmente é o componente 
principal de conteúdo.

Exemplo:

// importar css geral
import './App.css'



Importando imagens no projeto:
Para usar imagens (como a logo), salvamos dentro da pasta assets e 
importamos no componente.

Exemplo no NavBar:
// importar imagem
import logo from '../assets/airbnb.svg'

function NavBar() {
  return (
    <div className="col-sm-6">
      <img className="logo" src={logo} alt="logo do site"/>
    </div>
  )
}


Observação importante:
. Diferente de HTML puro, aqui usamos a sintaxe {} no src para passar o 
nome importado (logo).
. Quando fazemos import logo from '../assets/airbnb.svg', a palavra logo 
é apenas um nome de identificação que damos para aquele arquivo importado. 
Depois, podemos usar esse mesmo nome em qualquer lugar do código, sem precisar 
escrever o caminho completo da imagem.
. Esse mesmo método é usado para qualquer imagem ou arquivo estático no React 
(como ícones SVG, PNG, ou até arquivos JSON).



Instalando Material Design Icons:
Não usaremos CDN, vamos instalar pelo npm:
npm install @mdi/font



Importando os ícones:
No App.jsx (importações gerais), adicionamos:

| import '@mdi/font/css/materialdesignicons.css' |


Dentro do node_modules, o caminho é:

@mdi/
   font/
      css/
         materialdesignicons.css


Exemplo de uso no NavBar:
<a href="#" className="icon-nav">
  <i className="mdi mdi-web"></i>
</a>

Para usar um ícone:
. Definimos a classe mdi
. Depois mdi- + o nome do ícone do site (nesse caso: web).




CSS inline no JSX:
Quando usamos CSS inline no JSX, precisamos abrir duas chaves:
. A primeira {} é para o JSX
. A segunda {} é para o objeto CSS

Além disso:
. No React, propriedades CSS não usam hífen (-).
. Usamos camelCase (a segunda palavra começa com maiúscula).


Exemplo:
<ul style={{ borderRadius: '15px' }}>
  <li>Exemplo</li>
</ul>



Dropdown com Bootstrap + detalhe da divisória:
Na aula, criamos um menu dropdown bem estiloso com Bootstrap:

<div className="dropdown ms-2">
  <a className="button-login dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    <i className="fs-5 mdi mdi-menu ps-2 me-1"></i>
    <i className="fs-2 position-relative mdi mdi-account-circle pe-2">
      <span class="position-absolute top-0 start-50 badge border border-light rounded-circle bg-danger p-2">
        <span class="visually-hidden">unread messages</span>
      </span>
    </i>
  </a>

  <ul className="dropdown-menu mt-2 py-3 border-0 shadow">
    <li><a className="dropdown-item p-2 px-3" href="#">Cadastre-se</a></li>
    <li><a className="dropdown-item p-2 px-3" href="#">Entrar</a></li>
    <li><hr className="dropdown-divider"/></li>
    <li><a className="dropdown-item p-2 px-3" href="#">Hospede em sua acomodação</a></li>
    <li><a className="dropdown-item p-2 px-3" href="#">Hospede uma experiência</a></li>
    <li><a className="dropdown-item p-2 px-3" href="#">Ajuda</a></li>
  </ul>
</div>




Detalhe interessante:
O <hr className="dropdown-divider"/> cria uma linha divisória estilizada entre os itens.

Esse recurso pode ser usado em qualquer projeto, mesmo sem Bootstrap.
Exemplo simples em HTML/CSS:

html:
<ul class="menu">
  <li>Item 1</li>
  <li>Item 2</li>
  <hr class="divider">
  <li>Item 3</li>
</ul>

css:
.divider {
  border: none;
  height: 1px;
  background-color: #ccc;
  margin: 8px 0;
}

-->
