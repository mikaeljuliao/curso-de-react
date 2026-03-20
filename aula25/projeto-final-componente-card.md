<!--

Aula 25 — Projeto Final: Componente Card
Visão geral (seu texto original)

nessa aula iremos trabaslhar na area principal da nossa aplicação que é a parte dos cards,
os cards terão uma opçaõ de swaiper com as imagens, e os dados, imegns, titulos e etc sendo puxado pelo uma Api
Exterma que nos mesmo criamos, iremos ver como fazer requsição para que possamos puxar os dados de uma api e eles retornarem
as informações certinhas dos cards, iremos fazer a responsividade dos cards, fazendo com que se
adaptite a diferentes tipos de telas, e iremos trabalhar na questão dos filtros
que ao mexer no filtro atualize os cards e faça a questão da filtragem.

1) Mão na massa — criar Card.jsx (seu texto original)

(crie um mini titulo):
então vamos colocar a mão na maça, a primeira coisa que vamos fazer e criar nosso componente Card,jsx
e esse card vai ser onde vamos ter cada um dos cards
e importamos ele no nosso App.jsx e retornamos ele no noso componente.
exemplo:

//Importar Components
import Card from './components/Card';
function App() { 

  return (
    <div>
      <Card />
    </div>
  )
}


e tamebm criamos um arquivo css para ele e o importamos:
no seu componente.
exemplo:

import React from 'react'
import ';/css/Card.css'
export default function Card() {
  return (
    <div>Card</div>
  )
}

Observação / Exemplo corrigido

Mantive o seu exemplo acima tal qual; atenção: no import ';/css/Card.css' há um typo (';/). O correto costuma ser:

import React from 'react'
import './css/Card.css'

export default function Card() {
  return <div>Card</div>
}


(use esse corrigido no seu projeto para não ter erro de import).

2) Importando dados do backend (seu texto original)

(crie titulo)
para importamos os dados dos objetos dos cards do beckend,
iremos puxar esses dados localmente do nosso arquivo beckend,
importamos dessa forma:

import { acomodacoes } from '../../backend/dados'


nossas abrimos a sintaxe jsx e pegamos o objeto acomodações
e voltamos algunas pastar pra ir no caminho dos dados.
aqui pegamos so o acomodações mas poderiamos pegar o categorias e etc.

Observação prática

Garanta que o caminho relativo ../../backend/dados esteja correto a partir do arquivo Card.jsx.

dados deve exportar acomodacoes com export const acomodacoes = [...] ou export { acomodacoes }.

3) Renderizando os cards com .map() (seu texto original + exemplo)

(crie titulo)
<div className='col-xxl2'>
nos fazemos com que as colunas seja redenrizada de acrodo com a quantidade de acomodações no nosso array de acomodações
e para cada um dos objetos ele vai montar uma coluna, e pra isso faremos uso do map,
então fazemos assim, abrimos o jsx e pegamos o acomodacoes.map(()).
exemplo de como foi feito:

import { acomodacoes } from '../../backend/dados'
export default function Card() {
  return (
    <div className='container-fluid'>
      <div className='container-airbnb row'>
        acomodacoes.map((acomodacao, index) => (
          <div key={acomodacao.id} className='col-xxl2'>
            <img src={acomodacao.imagens[0]} className='img-fluid' />
            <p>
              <span>{acomodacao.cidade}, {acomodacao.pais}</span>
              <span className='mdi mdi-star'>{acomodacao.nota}</span>
            </p>
            <p>50 KM de distância</p>
            <p>10 de jan - 28 fev</p>
            <p>{acomodacao.preco.toLocaleString='pt-br'} noite</p>
          </div>
        ))
      </div>
    </div>
  )
}

Observações e correções essenciais (mantendo sua lógica e conteúdo)

Preservei seu bloco acima tal qual — mas atenção: há problemas de sintaxe no exemplo original. Abaixo está a versão corrigida (use no projeto):

import React from 'react';
import { acomodacoes } from '../../backend/dados';
import './css/Card.css';

export default function CardList() {
  return (
    <div className='container-fluid'>
      <div className='container-airbnb row'>
        {acomodacoes.map((acomodacao) => (
          <div key={acomodacao.id} className='col-xxl-2'>
            <img
              src={acomodacao.imagens[0]}
              className='img-fluid'
              alt={acomodacao.titulo || `${acomodacao.cidade}, ${acomodacao.pais}`}
              loading="lazy"
            />
            <p>
              <span>{acomodacao.cidade}, {acomodacao.pais}</span>
              <span className='mdi mdi-star'> {acomodacao.nota}</span>
            </p>
            <p className='text-muted my-0'>50 KM de distância</p>
            <p className='text-muted'>{/* datas geradas aleatoriamente */}10 de jan - 28 fev</p>
            <p>{acomodacao.preco.toLocaleString('pt-BR')} noite</p>
          </div>
        ))}
      </div>
    </div>
  );
}


Nota importante: toLocaleString='pt-br' na sua versão é incorreto (isso é uma atribuição). O jeito certo (mantendo sua intenção de formatar para Brasil) é toLocaleString('pt-BR') ou com formato monetário:

acomodacao.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

4) Por que usamos map() e a key (explicação detalhada, mantendo sua intenção)

acomodacoes.map(...) percorre o array e cria JSX pra cada item.

Colocamos key={acomodacao.id} para que o React gerencie atualizações e performance corretamente.

src={acomodacao.imagens[0]} pega a primeira imagem do array (vamos trocar por Swiper mais tarde para várias imagens).

Criamos spans para cidade/país e para o ícone de estrela com a nota.

Distância e datas aqui são simuladas (aleatórias) para focar no React.

Formatação do preço: usar toLocaleString('pt-BR') (ou com style: 'currency').

5) CSS inline no React (seu texto original)

(crie um titulo)
quando passamos css diretamente no codigo, nos chamaso a tag style e o css dentro do react funciona como um objeto,
então a primeira chaves que vem style={} e do jsx e dentro do jsx eu preciso abrir mais uma chaves pra passar os obejtos css que no caso são as propriedades,
e no reat não passamos traco como em max-widht no css normal, no react usamos cameoucase, então a inicial da proxima palavra e maisucula.
por exemplo:

<span style={{border:'1px solid red', display:'block', maxWidth:'160px'}} className='fw-bold text-truncate'>
  {acomodacao.cidade}, {acomodacao.pais}
</span>

Explicação sintética

style={{ ... }} => primeiro {} é para JS no JSX, segundo {} é o objeto CSS.

nomes em camelCase: maxWidth, backgroundColor, etc.

preferível usar classes (.css) para estilos grandes; inline serve para ajustes rápidos.

6) Gerando números aleatórios (distância / datas) — sua função original

(crie um titulo)
criando a função de gerar numeros aleatorios para as kilometragem.
exemplo feito:

function getRandonInt(min,max){
    min = Math.ceil(min);
    //ceil retornar o menor numero pra baixo
    max = Math.floor(max)
    // o floor torna o numer inteiro pra cima
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Observação / correção mínima (preservando sua explicação)

Mantive sua função, mas nome sugerido: getRandomInt (ortografia).

Comentários: Math.ceil() arredonda para cima; Math.floor() arredonda para baixo.

Explicação sua foi preservada; abaixo versão limpa:

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


Exemplo prático (seu pedido para terminar o exemplo):
Se você chamar getRandomInt(10, 600), os possíveis retornos são inteiros entre 10 e 600, inclusive — por exemplo 10, 11, 250, 599, 600.

7) Chamando a função nos cards (seu texto original)

(crie um mini titulo)
e agora vamos chamar essa função na nossa liloemetragem e vamos colocar os seus valores:
exemplo de como foi feito:

<p className='text-muted my-0'>{getRandonInt(10,800)}KM de distância</p>


colocamos o valor 10 e 800, entao dessa forma ira gerar numeros randomicos aleatorios
de 10 a 800, ficando nos itens 60km, 30km,12-km por exemplo.

8) Usando a função para datas (seu texto original)

(crie um titulo)
usaremos essa função para data tambem, mas iremos simular os numeros do mes, colocando de 1 a 31
exemplo de como foi feito:

<p className='text-muted'>{getRandonInt(1,31)} de jan - {getRandonInt(1,28)} de fev</p>

Conclusão / Próximos passos (mantendo sua intenção)

Trocar img simples por Swiper (cada card com carrossel de imagens).

Implementar fetch para consumir a API real no lugar do arquivo backend/dados. (usar useEffect + fetch ou axios e popular useState).

Melhorar responsividade usando classes do Bootstrap tipo className="col-xxl-2 col-lg-3 col-md-4 col-sm-6".

Formatar preços com toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) se quiser o R$. 

-->