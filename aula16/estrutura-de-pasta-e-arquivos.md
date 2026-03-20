<!--
Aula 16 – Estrutura do Projeto Criado com Vite:

Quando criamos um novo projeto com o Vite, ele já traz uma estrutura inicial 
pronta, com algumas pastas e arquivos importantes.
Vamos analisar essa estrutura para entender o papel de cada parte.

📂 Pastas e Arquivos Principais:
1. node_modules:

Essa é a pasta que contém todas as dependências do Node necessárias para rodar nosso projeto.
Tudo que instalamos com npm install vai parar aqui.
⚠️ Importante: nunca precisamos mexer manualmente nessa pasta.

2. public:

Aqui ficam arquivos estáticos que podem ser servidos diretamente no navegador, como imagens e ícones.
Por padrão, o Vite coloca a logo dele aqui.
Na prática, muitas vezes essa pasta quase não é usada, já que trabalhamos mais dentro de src.

3. index.html:

Esse é o arquivo inicial do projeto, ou seja, nossa página principal.
Todo projeto React (e qualquer projeto web) precisa ter um HTML de entrada.

Dentro dele, temos duas partes importantes:
1. A div raiz:
<div id="root"></div>

Essa é a div onde o React vai "injetar" toda a aplicação. É o ponto de entrada do nosso app.


2. O script principal:
<script type="module" src="/src/main.jsx"></script>

. O type="module" indica que estamos usando o jeito moderno do JavaScript, com import/export nativos.
. O src="/src/main.jsx" mostra que o arquivo principal que inicia a aplicação está em src/main.jsx.


4. Pasta src:

Aqui é onde fica todo o código-fonte do projeto.
É a pasta que vamos trabalhar de verdade no dia a dia.

Dentro dela temos:
🔹 main.jsx

Esse é o arquivo principal da aplicação, que faz a renderização do projeto.

Importações importantes que aparecem aqui:

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

. Essas importações vêm do node_modules.
. O react e o react-dom antes eram usados via CDN; agora são trazidos por aqui.
. createRoot é quem faz o React renderizar os componentes dentro da div#root.


Depois, temos:
import App from './App.jsx'
import './index.css'

. App → é o componente principal da aplicação (o conteúdo que será mostrado).
. index.css → são os estilos globais da aplicação.


Renderização dentro do main.jsx:

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

Explicando:

document.getElementById('root') → pega a div raiz do index.html.

createRoot(...).render() → pede para o React renderizar algo dentro dessa div.

<StrictMode> → envolve o App para ajudar no debug (mostra avisos de más práticas, 
componentes obsoletos, etc).

<App /> → é o conteúdo da aplicação.



🔹 App.jsx:

Esse arquivo representa o componente principal.
Tudo que criarmos (outros componentes, páginas, formulários, etc.) normalmente será importado aqui.

Importações padrão do arquivo:

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

. useState → hook do React para trabalhar com estado (já vimos isso antes).
. reactLogo e viteLogo → apenas imagens de exemplo.
. App.css → estilos específicos do App.

Depois, temos o componente funcional:

function App() {
  // estados, lógica e retorno do conteúdo
  return (
    <div>
      {/* Conteúdo JSX */}
    </div>
  )
}
export default App

. Ele usa JSX (JavaScript + XML) → que nos permite escrever HTML dentro do JavaScript.
. No final, exportamos com export default App, para que o main.jsx consiga importar e usar.



🔹 Pasta assets:

Aqui ficam arquivos estáticos que usamos dentro do código, como imagens.
No projeto inicial, só tem a logo do React, então não é tão importante agora.


📌 Observação importante sobre JSX:
Quando criamos arquivos de componentes, usamos a extensão .jsx.
Isso porque JSX é o que permite mesclar HTML dentro do JavaScript.
Sem isso, o React não conseguiria interpretar a sintaxe que já estamos acostumados a usar.



⚡ Diferença da Renderização Antiga:
Antes, quando usávamos React via CDN, era assim:
ReactDOM.render(<App />, document.getElementById('root'))

Agora, com o React mais moderno, usamos:
createRoot(document.getElementById('root')).render(<App />)

Isso traz melhorias de performance e compatibilidade com as versões mais novas.


🔎 O papel do StrictMode:

O trecho:

<StrictMode>
  <App />
</StrictMode>


serve como uma ferramenta de debug.
Ele ajuda a encontrar problemas potenciais no código, como:

. Funções ou APIs obsoletas.
. Más práticas de código.
. Problemas de renderização.

Ou seja, tudo que colocamos dentro do <StrictMode> será monitorado, 
    e caso tenha algo errado, veremos avisos no console ou na tela.

👉 Resumindo:
O Vite nos entrega um projeto inicial já bem estruturado, com pastas 
organizadas e arquivos preparados.
O mais importante é entender como o index.html, main.jsx e App.jsx 
trabalham juntos para colocar nossa aplicação React no ar.


-->