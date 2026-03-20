<!--
Aula 22 - Projeto Final: Componente Categoria

Nesta aula, iremos criar o próximo componente: o componente de categorias e também o filtro.

O que vamos implementar:

As categorias serão mostradas de forma dinâmica, com base em dados simulados.

Cada item da categoria será gerado automaticamente.

Vamos aplicar efeitos visuais: quando um item for selecionado, ele ficará um pouco mais escuro.

Implementaremos um sistema de swipe (carrossel). Por exemplo: se tivermos 14 itens por página, ao ultrapassar esse número, o usuário poderá “passar” para os próximos 14 itens (como se fosse folheando páginas de categorias).

O botão Filtro abrirá um modal de filtragem.

Criando o componente Categoria

Dentro da pasta components, iremos criar o componente Categoria.jsx.

Também criaremos um arquivo de estilo: categorias.css.

Importando o CSS no componente

No componente Categoria, faremos a importação assim:

import './css/categorias.css'


E depois iremos importar o componente Categoria dentro do App.jsx:

// importar componente
import Categoria from './components/Categoria'

function App() {
  return (
    <div>
      <Categoria />
    </div>
  )
}

Estrutura do container

O container terá 12 colunas:
. 11 colunas para os itens de categoria.
. 1 coluna para o botão de filtro.
. Serão divs diferentes e, juntando as duas, formarão duas colunas
Exemplo em JSX:

<div className='container-airbnb border border-info row'>
  <div className='col-sm-11'>
    aqui categoria
  </div>
  <div className='col-sm-1'>
    aqui o filtro
  </div>
</div>

Usando o Swiper

Dentro do componente de categoria, usaremos o Swiper.

O que é o Swiper?

O Swiper é uma biblioteca que cria sistemas de slide/swipe (carrossel).
O legal é que, além de funcionar com HTML e CSS puro, ele também possui uma versão específica para React, o que facilita bastante.

Instalando o Swiper

Para usar, precisamos instalar via npm.

Acesse o site oficial: https://swiperjs.com/

Vá em Docs > swiper react.

Copie o comando de instalação:

npm i swiper


Rode o comando no terminal ou no cmd.

Na mesma documentação, encontramos também os imports e um código de exemplo.

Exemplo do Swiper (React)
<Swiper
  spaceBetween={50}
  slidesPerView={3}
  onSlideChange={() => console.log('slide change')}
  onSwiper={(swiper) => console.log(swiper)}
>
  <SwiperSlide>Slide 1</SwiperSlide>
  <SwiperSlide>Slide 2</SwiperSlide>
  <SwiperSlide>Slide 3</SwiperSlide>
  <SwiperSlide>Slide 4</SwiperSlide>
  ...
</Swiper>

Importações necessárias
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


Essas importações devem ser feitas no componente que vai usar o Swiper.

Criando os dados de categorias (simulando API)

Criamos um arquivo chamado dados.js dentro da pasta backend.

Esse arquivo contém um array de objetos, simulando dados vindos de um banco ou API.

Exemplo do arquivo:

export const categorias = [
  {
    id: 1,
    imagem: 'https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg',
    titulo: 'Em frente à praia'
  },
  {
    id: 2,
    imagem: 'https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg',
    titulo: 'Chalés'
  }
]

Importando os dados no componente Categoria
Para usar os dados de categorias no nosso componente, 
precisamos importar o array de objeto chamado categorias de onde ele foi criado.

O processo é o seguinte:
1. Usamos a palavra-chave import.
2. Dentro de chaves {}, passamos o nome do array que queremos importar (no caso, categorias).
3. Depois usamos a palavra from seguida do caminho do arquivo onde esse array está salvo.
.Como o arquivo está dentro da pasta backend/dados, precisamos voltar uma pasta 
com ../ e depois indicar o caminho correto.

📌 Exemplo de importação:
import { categorias } from '../backend/dados'



Como puxar os dados do nosso array (simulando uma API):
Agora que já importamos as categorias, precisamos exibir esses dados no nosso componente. 
Para isso, vamos fazer um mapeamento usando o método .map().

Passo a passo:
1. Abrimos o JSX com {}.
2. Dentro dessas chaves, chamamos o array de categorias que importamos.
3. Usamos categorias.map() para percorrer cada item do array.
4. Dentro do .map(), criamos uma arrow function que recebe dados 
(cada item do array) e index (a posição do item no array).

⚠️ O professor explicou que, nesse caso, não estamos criando uma arrow function tradicional, 
e sim atribuindo diretamente um retorno para os dados. Ou seja, o retorno já está sendo passado 
sem precisar do return explícito, porque usamos a sintaxe () => (...).

5. Dentro da arrow function, retornamos um <SwiperSlide>.
6. Dentro de <SwiperSlide>, exibimos os dados:
   . Primeiro, colocamos a tag <img />, e no atributo src usamos a sintaxe JSX para pegar a imagem: {dados.imagem}.
   . Logo abaixo, criamos um <span> exibindo o título: {dados.titulo}.

📌 Exemplo de código:

{
  categorias.map((dados, index) => (
    <SwiperSlide key={index}>
      <img src={dados.imagem} />
      <span>{dados.titulo}</span>
    </SwiperSlide>
  ))
}


👉 Pronto! Agora temos um componente de categorias que:
. Exibe os dados dinamicamente.
. Usa o Swiper para permitir navegação entre os itens.
. Já está preparado para o botão Filtro.      
-->