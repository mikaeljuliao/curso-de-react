<!--

Aula 23 - Projeto Final: Componente Filtro (Slider)
Nesta aula iremos fazer o funcionamento do botão de filtro.

Passo 1 - Estrutura inicial do botão de filtro
Inicialmente o botão de filtro se encontra assim:

<div className='col-sm-1'>
  Aqui filtro
</div>

Agora, dentro dessa div, vamos adicionar um button.
Nesse botão iremos atribuir propriedades do Bootstrap que permitem abrir um modal:
. data-bs-toggle='modal'
. data-bs-target='#filterModal'

Exemplo:

<div className='col-sm-1'>
  <button data-bs-toggle='modal' data-bs-target='#filterModal'>
    Filtros
  </button>
</div>



Passo 2 - Ícone no botão de filtro:
Também usamos um ícone para o filtro, utilizando a tag <i>.

Exemplo:

<button 
  className='btn btn-filtro d-flex float-end' 
  data-bs-toggle='modal' 
  data-bs-target='#filterModal'
>
  <i className='mdi mdi-filter-variant'></i>
  Filtro
</button>

Esse ícone pegamos do Material Design Icons, como explicado anteriormente.



Passo 3 - Criando o componente ModalFilter:
Para o modal do filtro aparecer, criamos um componente chamado ModalFilter.jsx que conterá o modal do Bootstrap.
Quando o botão for clicado, ele exibirá esse componente.

O modal foi copiado da documentação oficial do Bootstrap (seção Modal).
Exemplo da base:

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


Nosso componente ModalFilter.jsx ficou assim:

import React from 'react'

export default function ModalFilter() {
  return (
    <div className="modal fade" id="filterModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            ...
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  )
}


📌 Detalhe importante:
Na div principal, usamos o ID filterModal:
<div className="modal fade" id="filterModal">

Esse mesmo nome é o que foi passado no data-bs-target do botão.
Por isso, ao clicar no botão, o Bootstrap consegue abrir automaticamente o modal correspondente, pois ele associa o data-bs-target ao id do modal.



Passo 4 - Importando o modal no App.jsx:
Para o modal funcionar, precisamos importá-lo no componente principal (App.jsx).
Dessa forma:

// importar modal de filtro
import ModalFilter from './components/ModalFilter';

function App() {
  return (
    <div>
      <Navbar />
      <Categorias />
      <ModalFilter />
    </div>
  )
}


Pronto ✅
Agora, com o componente modal já importado, ele aparece normalmente ao clicar no botão de filtro.

📌 Isso funciona porque o Bootstrap trabalha com data attributes (ex: data-bs-toggle, data-bs-target), que são ligados ao id do modal.
Quando clicamos no botão, o Bootstrap identifica o data-bs-target="#filterModal" e procura no DOM por um modal com esse id.
Assim, mesmo sem código adicional em React, o Bootstrap abre e fecha o modal automaticamente.



Passo 5 - Adicionando conteúdo ao modal:
Agora só falta dar conteúdo ao modal.

Dentro desse conteúdo, teremos uma parte que precisa de um componente separado chamado PriceSlider.jsx.


Criando o PriceSlider (slider de preços):
O PriceSlider é basicamente a barra que movimentamos para filtrar os valores de preço.
Criamos esse componente separado porque:
. Mantém o projeto mais organizado.
. Dá maior controle de manipulação (categoria, preço mínimo, preço máximo).
. Pode ser reutilizado em outros projetos.
. É um dos filtros mais comuns em sistemas de e-commerce.

(“price” significa preço em inglês, e “slider” é algo que desliza).



Estrutura do PriceSlider:
O PriceSlider é composto por 4 elementos principais:
1. Slider → A barra cinza clara (fundo da faixa).
2. Progress → A barra mais escura que acompanha os movimentos.
3. Range Min → Input que controla o valor mínimo.
4. Range Max → Input que controla o valor máximo.

Com CSS, juntamos esses elementos para parecer um único componente.
E com useState, controlamos os valores e movimentação.



Passo 1 - Criando a parte estética:
Primeiro, importamos o CSS do slider no componente:

import './css/priceSlider.css'


E criamos a estrutura inicial:

import React from 'react'
import './css/priceSlider.css'

export default function PriceSlider() {
  return (
    <div>
      <div className='slider'></div>
    </div>
  )
}

CSS inicial:
.slider {
  display: flex;
  position: relative;
  height: 5px;
  background: #ddd;
  border-radius: 5px;
}


👉 Esse CSS cria uma barra cinza fina que servirá como trilho para o slider.
. display: flex → Permite posicionar elementos dentro dela.
. position: relative → Necessário para que os elementos internos (progress e inputs) usem absolute em relação a ela.
. height: 5px → Define a espessura da barra.
. background: #ddd → Dá a cor cinza clara.
. border-radius: 5px → Deixa as pontas levemente arredondadas.



Passo 2 - Criando a barra de progresso:
Dentro da div slider, criamos outra div chamada progress:

export default function PriceSlider() {
  return (
    <div>
      <div className='slider'>
        <div className='progress'></div>
      </div>
    </div>
  )
}

CSS da progress:
.slider .progress {
  height: 100%;
  position: absolute;
  /* left: 5%;
  right: 30%; */
  background: #464646;
}


👉 Explicação:
. position: absolute → Faz a barra se posicionar por cima do slider.
. Se definirmos left: 5% e right: 30%, a progress fica apenas entre esses dois pontos, simulando o intervalo selecionado.
. background: #464646 → Torna a barra mais escura.
. Assim, conforme alteramos os valores mínimo e máximo, a barra de progresso vai se ajustando dinamicamente.



Passo 3 - Criando os inputs range (bolinhas):
Agora precisamos das bolinhas que o usuário move para alterar o preço.

Para isso, usamos inputs do tipo range (aquele mesmo usado para volume de áudio).

Dentro da div slider, criamos outra div chamada range-input que conterá dois inputs:

export default function PriceSlider() {
  return (
    <div>
      <div className='slider'>
        <div className='progress'></div>
        <div className='range-input'>
          <input id='rangeMin' type='range' />  
          <input id='rangeMax' type='range' />  
        </div>
      </div>
    </div>
  )
}




Passo 4 - Estilizando os inputs (truque das bolinhas)
A ideia é esconder a barra original do input e deixar só as bolinhas visíveis.

CSS
.range-input {
  position: relative;
}

.range-input input {
  width: 100%;
  position: absolute;
  height: 5px;
  top: -5px;
  background: none;
  pointer-events: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}


👉 Explicação:
Os campos do tipo input (do tipo range) terão uma position: absolute, o que faz com que os dois inputs fiquem um em cima do outro, no mesmo lugar.
Assim, conseguimos ter apenas duas bolinhas de movimentação, mas escondendo a barra padrão dos inputs.

Retirando o estilo padrão dos inputs:
. Usamos background: none; para remover o fundo.
. Aplicamos o -webkit-appearance: none;. Esse atributo força o navegador (no caso do Chrome, Safari e derivados) a remover o estilo padrão do campo range.
. Também aplicamos o -moz-appearance: none; que faz a mesma coisa, mas no Firefox.

Com isso, a barra padrão do input desaparece, ficando apenas as bolinhas de movimentação.

]
Ajustando o tamanho e alinhamento:
. Definimos width: 100% para que os inputs cubram todo o espaço disponível.
. Usamos height: 5px, mesma altura do nosso slider, para alinhar corretamente os elementos.
. Com top: -5px, ajustamos a posição absoluta para que as bolinhas fiquem exatamente sobre a barra do slider.


Controlando o comportamento dos inputs:
. Aplicamos pointer-events: none;.
Isso significa que o usuário não pode interagir diretamente com os inputs.
Na prática, quem controla o movimento das bolinhas é a nossa barra de progresso (.progress).
Assim, quando a barra de progresso desliza, as bolinhas deslizam junto de forma sincronizada.9











🎨 Estilizando as bolinhas do slider
Agora iremos modificar a aparência das bolinhas dos inputs range.

No CSS, trabalhamos diretamente com o seletor do tipo range, mas para alterar somente as bolinhas, usamos os seletores especiais:
. ::-webkit-slider-thumb → funciona para navegadores baseados no Webkit (Chrome, Safari, Edge).
. ::-moz-range-thumb → funciona para o Firefox.

Exemplo no Chrome (Webkit):

input[type="range"]::-webkit-slider-thumb {
    width: 30px;
    height: 30px;
    background: white;
    border: 1px solid #ccc;
    border-radius: 50%;
    box-shadow: 0 0 6px rgba(0,0,0,0.05);
    pointer-events: auto;
    -webkit-appearance: none;
}


👉 Explicando cada linha:
. width: 30px; height: 30px; → define o tamanho da bolinha.
. background: white; → deixa a bolinha branca.
. -webkit-appearance: none; → remove o estilo padrão do navegador, garantindo que o fundo branco apareça corretamente.
. border: 1px solid #ccc; → adiciona uma borda cinza clara para dar contraste.
. border-radius: 50%; → deixa a bolinha totalmente redonda.
. box-shadow: 0 0 6px rgba(0,0,0,0.05); → adiciona uma leve sombra.
. pointer-events: auto; → reativa os eventos de clique/movimento (lembre que tínhamos desativado no input).

No Firefox, copiamos o mesmo código, apenas trocando por ::-moz-range-thumb e -moz-appearance: none;:
CSS:
input[type="range"]::-moz-range-thumb {
    width: 30px;
    height: 30px;
    background: white;
    border: 1px solid #ccc;
    border-radius: 50%;
    box-shadow: 0 0 6px rgba(0,0,0,0.05);
    pointer-events: auto;
    -moz-appearance: none;
}

✅ Pronto! Agora temos bolinhas personalizadas e funcionando em qualquer navegador.



💰 Criando os campos de preço mínimo e máximo:
Ainda no nosso componente PriceSlider, logo abaixo dos ranges, vamos criar os campos para exibir e editar o preço mínimo e máximo.

Fizemos isso com Bootstrap Input Groups (pegos direto na documentação oficial).

📌 Exemplo do preço mínimo:

<div className='row mt-4'>
  <div className='col'>
    <label className='text-muted'>Preço mínimo</label>
    <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">R$</span>
      <input id="inputMin" type="text" className="form-control" placeholder="Min" />
    </div>
  </div>
</div>


📌 Exemplo do preço máximo:

<div className='col'>
  <label className='text-muted'>Preço máximo</label>
  <div className="input-group mb-3">
    <span className="input-group-text" id="basic-addon1">R$</span>
    <input id="inputMax" type="text" className="form-control" placeholder="Max" />
  </div>
</div>


➡️ A diferença está apenas no id (inputMax), no texto do label (“Preço máximo”) e no placeholder (“Max”).


🎨 Finalizando a parte estética:
Até aqui, terminamos toda a estilização do nosso filtro:
. Barra cinza (slider).
. Barra de progresso escura.
. Bolinhas estilizadas.
. Campos para preço mínimo e máximo.

Agora vamos para a parte mais importante: a lógica, para que tudo realmente funcione.



⚙️ Controlando os valores com useState e props:
Para controlar os valores do mínimo, máximo e a posição da barra de progresso, usamos o estado do React (useState).

Além disso, também precisamos de alguns atributos do campo range:
. min → valor mínimo que o slider pode assumir.
. max → valor máximo.
. value → valor atual do slider.
. step → define os passos do movimento (exemplo: 1 movimenta de 1 em 1).

📌 Exemplo do nosso input configurado:

<input 
  id='rangeMin' 
  type="range" 
  min='50' 
  max='2000' 
  step='1' 
/>

Passando valores dinâmicos via props:

Até aqui, definimos valores fixos para os atributos min, max e step dos nossos inputs do tipo range.
Agora vamos deixar isso dinâmico com o uso dos props, assim o PriceSlider pode ser reutilizado em qualquer 
lugar do sistema recebendo os valores que quisermos.

No componente pai (ModalFilter por exemplo), passamos os valores dos props:
detalhe: o nome dos props poderia ser qualquer coisa, não necessaariamente
o nome das propriedades input

<PriceSlider min={50} max={2000} step={1} />


E no componente PriceSlider, recebemos esses props:

export default function PriceSlider(props) {
    return (
        <div className='range-input'>
            <input id='rangeMin' type="range" min={props.min} max={props.max} step={props.step} />
            <input id='rangeMax' type="range" min={props.min} max={props.max} step={props.step} />
        </div>
    )
}


✅ Dessa forma, os valores não ficam mais “engessados” e podemos alterar a faixa de preço 
apenas mudando os props do componente, delm de reaproveitar o componente em qualquer outro projeto 
mudando apenas os props.









Passando valores dinâmicos via props:

Até aqui, definimos valores fixos para os atributos min, max e step dos nossos inputs do tipo range.
Agora vamos deixar isso dinâmico com o uso dos props, assim o PriceSlider pode ser reutilizado em qualquer lugar do sistema recebendo os valores que quisermos.

No componente pai (ModalFilter por exemplo), passamos os valores:

<PriceSlider min={50} max={2000} step={1} />


E no componente PriceSlider, recebemos esses props:

export default function PriceSlider(props) {
    return (
        <div className='range-input'>
            <input id='rangeMin' type="range" min={props.min} max={props.max} step={props.step} />
            <input id='rangeMax' type="range" min={props.min} max={props.max} step={props.step} />
        </div>
    )
}


✅ Dessa forma, os valores não ficam mais “engessados” e podemos alterar a faixa de preço apenas mudando os props do componente.



Controlando valores com useState e useEffect:
Para sabermos quais são os valores selecionados no mínimo e no máximo, precisamos armazenar esses valores em estados do React.
Assim podemos manipular dinamicamente o comportamento do slider e da barra de progresso.

Primeiro, importamos os hooks:
import { useState, useEffect } from 'react';

Depois, dentro do PriceSlider, criamos os estados:

const [min, setMin] = useState(props.min);
const [max, setMax] = useState(props.max);

. min → valor inicial definido pelo props.min.
. max → valor inicial definido pelo props.max.

Agora criamos estados para controlar a posição da barra de progresso no CSS:
- Criando estado para a barra de progresso:
Também precisamos fazer com que a barra de progresso se movimente conforme 
as categorias são percorridas. Para isso, vamos usar estados no React, que 
vão guardar a posição atual da barra em porcentagem.

Passo a passo:
1. Importamos o useState do React.
2. Criamos um estado que vai começar em 0%, indicando que a barra inicia no ponto zero.
3. Usamos o hook useState, passando o valor inicial como string ('0%').

📌 Exemplo de código:
const [left, setLeft] = useState('0%');

. left → guarda o valor atual da posição da barra.
. setLeft → função que atualiza o valor de left.
. O estado começa como '0%' e depois vamos mudar esse valor conforme a barra se deslocar.


Esses dois valores serão usados para atualizar dinamicamente o style inline da barra de progresso:

Estilo incorporado (inline style) para a barra de progresso:
Agora vamos aplicar um estilo incorporado na 
nossa div que tem a classe progress, para que a barra se movimente de acordo com os valores dos estados.

Como funciona:
. Em React, quando queremos aplicar CSS inline, usamos duas chaves {{}}:
  . A primeira {} abre o espaço do JSX.
  . A segunda {} é o objeto JavaScript onde definimos as propriedades de estilo.
. Nesse objeto, podemos usar valores dinâmicos do React, como os estados que criamos.

Passo a passo:
1. Criamos a div com o className='progress'.
2. No atributo style, passamos um objeto com as propriedades CSS que queremos controlar.
3. Definimos:
  . left → vai receber o valor do estado left.
  . right → vai receber o valor do estado right.

📌 Exemplo de código:
<div className='slider'>
  <div style={{ left: left, right: right }} className='progress'></div>
</div>


➡️ Dessa forma, a barra começa na posição 0 dos dois lados, ou seja, totalmente preenchida, 
e depois vamos alterar esses valores para movimentá-la.



Definindo o valor dos ranges:

Agora, ao invés de apenas usar os props, vamos ligar os inputs ao estado:

<input 
    id='rangeMin' 
    type="range" 
    min={props.min} 
    max={props.max} 
    value={min} 
    step={props.step} 
/>

<input 
    id='rangeMax' 
    type="range" 
    min={props.min} 
    max={props.max} 
    value={max} 
    step={props.step} 
/>


Dessa forma:
. O rangeMin começa do valor definido em props.min.
. O rangeMax começa do valor definido em props.max.


Por que os valores se tornam "somente leitura"?
No React, quando você coloca value={min} em um input, o valor exibido no input passa a ser controlado pelo estado (min).
Ou seja, não é mais o input que controla o valor, e sim o React.

Isso significa que para atualizar o valor exibido precisamos alterar o estado (setMin), caso contrário o input fica “travado”.

Por isso precisamos usar o evento onChange → para atualizar o estado sempre que o usuário mexer na bolinha.



Criando o evento onChange:

Para o slider do mínimo:

<input 
    id='rangeMin' 
    type="range" 
    min={props.min} 
    max={props.max} 
    value={min} 
    step={props.step} 
    onChange={changeRangeMin}
/>


E para o máximo:

<input 
    id='rangeMax' 
    type="range" 
    min={props.min} 
    max={props.max} 
    value={max} 
    step={props.step} 
    onChange={changeRangeMax}
/>


Função changeRangeMin:
Criamos a função changeRangeMin para recuperar o evento do nosso campo input.
. Essa função recebe o e como parâmetro, que representa o evento do input que está sendo modificado.

Como entender o que está acontecendo:
Uma forma interessante de visualizar o funcionamento dessa função é usar um console.log.
. Dentro do log, passamos e.target.value, que mostra o valor atual do input.

📌 Exemplo de código:

function changeRangeMin(e) {
  console.log(e.target.value);
}

O que acontece na prática:
. Se formos até o input range do valor mínimo e movimentarmos ele, veremos no console que o valor está mudando.
. Ou seja: mesmo que a “bolinha” visual do range não esteja se movimentando ainda, o valor interno acompanha a mudança.
. Por padrão, ele começa em 50, e conforme puxamos para o lado, no console é mostrado que o valor vai aumentando ou diminuindo de acordo com a interação.

Agora, ao invés de só mostrar no console, vamos atualizar o estado:

function changeRangeMin(e) {
   setMin(parseInt(e.target.value));
}


Isso garante que o min seja atualizado toda vez que arrastarmos.



Uso do useEffect com o estado min:
Quando temos uma alteração em um estado, podemos usar o hook useEffect para definir o que deve acontecer como efeito colateral.

No caso, criamos um useEffect que escuta as mudanças do estado min. Ou seja, sempre que min for alterado, esse efeito será executado.

📌 Exemplo de código:

useEffect(() => {
  if (min == props.min) {
    document.getElementById('inputMin').value = props.min;
  } else {
    document.getElementById('inputMin').value = min;
  }
}, [min]);

O que está acontecendo aqui:
1. Dependência [min]
  . O useEffect só será executado quando o valor de min mudar.
2. Verificação da condição
  . Se o valor de min for igual ao valor inicial recebido pelas props (props.min), então o input recebe o valor padrão (props.min).
  . Caso contrário, o input recebe o valor atualizado do estado min.
3. Manipulação direta do DOM
  . Estamos acessando o elemento do input pelo document.getElementById('inputMin') e atualizando manualmente o valor (.value).
  . Isso garante que o campo input range acompanhe as mudanças feitas no estado.

Resumindo:

Esse useEffect serve para sincronizar o estado min com o valor do input. Assim:
. Quando min mudar, o input de id inputMin é atualizado automaticamente.
. Isso mantém o valor do campo de input sempre alinhado com o estado do componente.



Função changeRangeMin (mínimo):
A função changeRangeMin é responsável por atualizar o estado e o deslocamento da barra de progresso quando movimentamos o slider do valor mínimo.

📌 Exemplo de código:

function changeRangeMin(e) {
  setMin(parseInt(e.target.value));

  if (min == props.min) {
    setLeft("0%");
  } else {
    var totalBarra = props.max - props.min;
    var qtsSteps = min - props.min;

    setLeft(((qtsSteps * 100) / totalBarra) + "%");
  }
}

Explicação passo a passo:
1. Atualização do estado
  . setMin(parseInt(e.target.value)): converte o valor do input para número inteiro e atualiza o estado min.
2. Condição inicial
  . Se min for igual a props.min (valor mínimo inicial definido pelo componente pai), o deslocamento da barra à esquerda (left) é zerado:

setLeft("0%");


3. Cálculo do deslocamento da barra
. Se o valor não for o mínimo, fazemos um cálculo para saber quanto a barra deve se mover em %:
. totalBarra = diferença entre valor máximo e mínimo (props.max - props.min).
. qtsSteps = diferença entre o valor atual (min) e o valor mínimo (props.min).
. Fórmula final:

(qtsSteps * 100) / totalBarra
Isso retorna a porcentagem que a barra deve se deslocar.

➡️ Assim, a barra de progresso acompanha o deslize do slider mínimo de forma proporcional.


Função changeRangeMax (máximo):
Agora copiamos a mesma lógica para o slider do valor máximo. A única diferença é que precisamos inverter a lógica de cálculo dos passos (qtsSteps).

📌 Exemplo de código:

function changeRangeMax(e) {
  setMax(parseInt(e.target.value));

  if (max == props.max) {
    setRight("0%");
  } else {
    var totalBarra = props.max - props.min;
    var qtsSteps = props.max - max;

    setRight(((qtsSteps * 100) / totalBarra) + "%");
  }
}

Explicação:
1. Atualizamos o estado max com o valor vindo do input.
2. Se max for igual ao valor máximo (props.max), zeramos o deslocamento da direita (right).
3. Caso contrário, calculamos o deslocamento usando a lógica invertida, já que agora estamos lidando com o lado direito da barra.


useEffect para o max:
Criamos um useEffect para manter o valor do input máximo sincronizado com o estado max.

📌 Exemplo:

useEffect(() => {
  if (max == props.max) {
    document.getElementById('inputMax').value = props.max + "+";
  } else {
    document.getElementById('inputMax').value = max;
  }
}, [max]);



Ligando a função ao input (máximo):
No input de valor máximo, chamamos a função changeRangeMax no evento onChange:

📌 Exemplo de input:

<input
  id='rangeMax'
  onChange={changeRangeMax}
  type="range"
  min={props.min}
  max={props.max}
  value={max}
  step={props.step}
/>

-->




