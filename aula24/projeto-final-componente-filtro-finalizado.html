<!-- #region 

Aula 24 — Projeto Final: Componente Filtro (Finalizado):

Situação inicial / problema a resolver:

Apesar do nosso filtro (price slider) já funcionar, havia bugs: o valor mínimo podia 
ultrapassar o máximo e vice-versa. Isso não pode acontecer — precisamos validar as 
funções changeRangeMin e changeRangeMax para impedir que os ranges “cruzem”.


Validação para impedir cruzamento (min > max ou max < min):
adicionei uma checagem nas funções de evento para evitar ultrapassar o outro limite.

Exemplo changeRangeMin (com validação):

function changeRangeMin(e) {
  if ((parseInt(e.target.value) - max) >= -props.step) {
    // console.log('Limite mínimo alcançado!');
  } else {
    setMin(parseInt(e.target.value));
    if (min == props.min) {
      setLeft("0%");
    } else {
      var totalBarra = props.max - props.min;
      var qtsSteps = min - props.min;
      setLeft(((qtsSteps * 100) / totalBarra) + "%");
    }
  }
}

O que essa validação faz (em palavras):
. parseInt(e.target.value) pega o número digitado/arrastado.
. Subtraímos max e comparamos se o resultado é >= -props.step.
  . Se for verdade, significa que o novo valor mínimo está muito próximo do max (ou iria ultrapassá-lo), 
então não deixamos atualizar — evitamos o cruzamento.
  . Senão (else) executamos o fluxo normal: atualizamos min e recalculamos a posição da barra (left).

Exemplo changeRangeMax (com validação):

function changeRangeMax(e) {
  if ((parseInt(e.target.value) - min) <= props.step) {
    // console.log('Limite Máximo Alcançado!');
  } else {
    setMax(parseInt(e.target.value));
    if (max == props.max) {
      setRight("0%");
    } else {
      var totalBarra = props.max - props.min;
      var qtsSteps = props.max - max;
      setRight(((qtsSteps * 100) / totalBarra) + "%");
    }
  }
}


O que isso faz:
. Se parseInt(e.target.value) - min for <= props.step, significa que o max está 
muito próximo do min (ou iria passar por baixo dele). Aí bloqueamos a atualização.
. Senão, atualizamos max e recalculamos right para mover a barra de progresso.

Resultado: agora as barrinhas não cruzam e o slider respeita a distância mínima props.step entre min e max.



Passo 4 (digitação nos inputs): atualizar barra ao digitar e aceitar só números:
Queremos que:
. Se o usuário digitar um valor no input, o slider acompanhe.
. Só aceitar números (não letras).
. Os campos não fiquem vazios ou zero; validar e corrigir quando necessário.


Eventos nos inputs:

adicionei os eventos onBlur e onKeyPress:

<input
  id="inputMin"
  onBlur={validacao}
  onKeyPress={(e) => { (e.key == "Enter" ? validacao(e) : soNumero(e)) }}
  type="text"
  class="form-control"
  placeholder="Min"
/>

<input
  id="inputMax"
  onBlur={validacao}
  onKeyPress={(e) => { (e.key == "Enter" ? validacao(e) : soNumero(e)) }}
  type="text"
  class="form-control"
  placeholder="Max"
/>


Explicação do que ocorre:
. onBlur={validacao} → quando o campo perde o foco, chamamos a função 
validacao para verificar e ajustar o valor.
. onKeyPress={(e) => { (e.key == "Enter" ? validacao(e) : soNumero(e)) }} 
→ se o usuário apertar Enter, executamos validacao(e) (submete/valida imediatamente). 
Caso contrário, chamamos soNumero(e) para garantir que só números sejam digitados 
(bloqueamos teclas não numéricas enquanto o usuário digita).



Função validacao(e) — explicação passo a passo (detalhada):

function validacao(e) {
    // CAMPO INPUT MIN
    let inputMin = document.getElementById('inputMin');
    // CAMPO INPUT MAX
    let inputMax = document.getElementById('inputMax');
    // PEGAR O VALOR DO CAMPO INPUT (convertido para inteiro)
    let valor = parseInt(e.target.value);

    // SE O CAMPO INPUT FOR INPUT MIN
    if (e.target.id == "inputMin") {
        // VERIFICAR SE CAMPO É VAZIO OU NULL
        if (e.target.value == "" || e.target.value == null) {
            // SETAR PARA O MÍNIMO PERMITIDO
            setMin(props.min);
            setLeft("0%");
            // MUDAR O VALOR DO CAMPO INPUT MIN PARA VALOR MÍNIMO
            inputMin.value = props.min;
        } else {
            // VERIFICAR SE VALOR É MENOR QUE MÍNIMO
            if (valor < props.min) {
                // SETAR PARA O MÍNIMO PERMITIDO
                setMin(props.min);
                setLeft("0%");
                // MUDAR O VALOR DO CAMPO INPUT MIN PARA VALOR MÍNIMO
                inputMin.value = props.min;
            } else {
                // VALOR É MAIOR QUE MINIMO PERMITIDO - OK
                // VERIFICAR SE MIN É MAIOR OU IGUAL AO MAX
                if (valor >= max) {
                    let corrige = max - props.step;
                    setMin(corrige);

                    var totalBarra = props.max - props.min;
                    var qtsSteps = valor - props.min;

                    setLeft(((qtsSteps * 100) / totalBarra) + "%");
                    inputMin.value = corrige;
                } else {
                    // TUDO CERTO
                    setMin(valor);
                    // MOVIMENTAR A BARRA
                    var totalBarra = props.max - props.min;
                    var qtsSteps = valor - props.min;
                    setLeft(((qtsSteps * 100) / totalBarra) + "%");
                }
            }
        }
    }

    // SE O CAMPO FOR INPUT MAX
    if (e.target.id == "inputMax") {
        // VERIFICAR SE VALOR DIGITADO É VAZIO OU NULL
        if (e.target.value == "" || e.target.value == null) {
            // SETAR PARA MAXIMO PERMITIDO
            setMax(props.max);
            setRight("0%");
            inputMax.value = props.max + "+";
        } else {
            // SE O VALOR DIGITADO FOR MAIOR QUE MÁXIMO PERMITIDO
            if (valor > props.max) {
                // SETAR PARA MAXIMO PERMITIDO
                setMax(props.max);
                setRight("0%");
                // MUDAR O CAMPO PARA MÁXIMO +
                inputMax.value = props.max + "+";
            } else {
                // VALOR DIGITADO É MENOR QUE MÁXIMO PERMITIDO
                // VERIFICAR SE MAX É MENOR OU IGUAL AO MIN
                if (valor <= min) {
                    let corrige = min + props.step;
                    setMax(corrige);

                    var totalBarra = props.max - props.min;
                    var qtsSteps = props.max - valor;

                    setRight(((qtsSteps * 100) / totalBarra) + "%");
                    inputMax.value = corrige;

                } else {
                    // TUDO CERTO
                    // SE VALOR DIGITADO É MAIOR QUE MIN
                    setMax(valor);
                    var totalBarra = props.max - props.min;
                    var qtsSteps = props.max - valor;

                    setRight(((qtsSteps * 100) / totalBarra) + "%");
                }
            }
        }
    }
}


Explicação didática (como professor — passo a passo):

1. Obtém referências dos inputs:
  . inputMin e inputMax são pegados via document.getElementById para podermos 
alterar visualmente o valor do campo (por exemplo inputMin.value = ...), 
já que estamos controlando o estado com React.

2. Converte o valor digitado em número
. let valor = parseInt(e.target.value); — usamos parseInt para garantir que trabalhamos com números.

3. Ramo inputMin (o usuário mexeu no campo mínimo):
   . Primeiro caso: campo vazio ("" ou null):
       . -> Ajustamos para o props.min (valor mínimo permitido), setamos min para props.min e 
     movemos a barra (setLeft("0%")). Também atualizamos o campo visualmente inputMin.value = props.min.

   . Senão (campo não vazio): verificamos se valor < props.min:
       . -> Se for menor que o mínimo permitido, forçamos para o mínimo (mesmo comportamento do caso vazio).
   . Caso contrário (valor >= props.min e não vazio):
       -> Verificamos se o valor digitado é maior ou igual ao max atual (ou seja, 
       tentou colocar o mínimo acima do máximo).
           . => Se valor >= max: calculamos uma correção (corrige = max - props.step), 
           setamos min = corrige, movemos a barra e atualizamos o campo com esse corrige.
           . => Else: valor ok → setamos min = valor e movemos a barra proporcionalmente.


4. Ramo inputMax (o usuário mexeu no campo máximo):
. Caso vazio → setamos para o props.max, setRight("0%") e mostramos inputMax.value = props.max + "+".
. Senão, se valor > props.max → cortamos para props.max (e atualizamos com +).
. Senão, se valor <= min (valor do max menor ou igual ao min) → corrigimos: 
corrige = min + props.step (garantimos distância mínima) e atualizamos right, inputMax.
. Else: valor ok → setamos max = valor e atualizamos right.



Resumo: a função percorre os caminhos possíveis (campo vazio, menor que mínimo, maior que máximo, 
cruzamento min/max) e corrige para os valores permitidos ou atualiza o estado e a barra quando está 
tudo certo. Assim, o usuário pode digitar valores mas nunca quebrará a lógica do slider.




Função soNumero(e) — explicar regex e lógica:

Função:

function soNumero(e) {
    if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
    }
}


O que faz e como funciona:
1. e.key → é a tecla que o usuário acabou de pressionar (um caractere).
2. /[0-9]/ → é uma expressão regular (regex) que representa “qualquer dígito de 0 a 9”.
3. .test(e.key) → testa se e.key bate com a regex (retorna true se for um número, false caso contrário).
4. No if usamos ! (negação): if (!/[0-9]/.test(e.key)) → se não é um dígito:
  . Chamamos e.preventDefault() → isso impede que o navegador coloque esse caractere no campo. 
  Ou seja, letras e símbolos são bloqueados.

5. Efeito prático: enquanto o usuário digita, somente números são permitidos (backspace, setas 
e teclas especiais geralmente não acionam .test(e.key) da mesma forma — pode precisar tratar 
teclas especiais dependendo do browser, mas para controles básicos isso funciona bem).



Observação didática:
. onKeyPress dispara antes do caractere ser inserido; então bloquear via preventDefault() 
impede que o caractere chegue ao campo.
. Essa técnica é simples e eficaz para inputs numéricos em HTML puro. Em React você também 
pode usar o evento onKeyDown ou onKeyUp com verificações mais completas, ou usar 
inputmode="numeric"/pattern para ajudar em mobile.



A ligação do onKeyPress com a lógica ternária:

Você usou:

onKeyPress={(e) => { (e.key == "Enter" ? validacao(e) : soNumero(e)) }}


Explicação:
. Isso é uma arrow function (função anônima) que verifica e.key.
. Se o usuário apertou Enter → chama validacao(e) para validar/confirmar o valor 
(como se tivesse saído do campo).
. Caso contrário → chama soNumero(e) para permitir apenas números.
. Em resumo: Enter = validação imediata; qualquer outra tecla = checar se é número e bloquear se não for.




HTML/React: label e htmlFor (pequena observação):
Quando ligamos label ao input no React, não usamos for (atributo reservado em JS).
Usamos htmlFor. Ex.:

<input class="fs-4 form-check-input" type="checkbox" value="" id="quartoCompartilhado" />
<label class="ps-2 form-check-label" htmlFor="quartoCompartilhado">Quarto compartilhado</label>



ButtonGroup com props (explicação detalhada da sua parte):
Você mostrou algo assim:

<section className='px-2 mb-4 border-bottom'>
  <span className='fs-4 fw-bold'>Quartos e Camas</span>
  <p className='mt-3 px-1'>Quartos</p>
  <ButtonGroup buttons={["Qualquer um", "1", "2", "3", "4", "5", "6", "7", "8+"]} />
  <p className='mt-3 px-1'>Camas</p>
  <ButtonGroup buttons={["Qualquer um", "1", "2", "3", "4", "5", "6", "7", "8+"]} />
  <p className='mt-3 px-1'>Banheiros</p>
  <ButtonGroup buttons={["Qualquer um", "1", "2", "3", "4", "5", "6", "7", "8+"]} />
</section>

Explicando com calma (sintaxe e conceito):
. ButtonGroup é um componente React que você criou (ou vai criar).
. buttons={["Qualquer um", "1", "2", ...]} → aqui buttons é o nome da prop que o ButtonGroup recebe.
   . Props (propriedades) são como parâmetros que você passa para componentes React.
. O que colocamos dentro de {...} em JSX é JavaScript.
   . Então buttons={["Qualquer um", "1", ...]} passa um array (lista) para o componente.
. Dentro do ButtonGroup (no arquivo do componente) você vai receber props (ou usar destructuring):

export default function ButtonGroup(props) {
  const arr = props.buttons; // array que veio da prop
  return (
    <div>
      {arr.map((item, idx) => (
        <button key={idx} className="btn btn-outline-secondary">{item}</button>
      ))}
    </div>
  );
}

. props.buttons é o array recebido.
. map percorre o array e cria um botão para cada item.
. key={idx} dá uma chave única (idealmente usar um id estável) — importante para evitar avisos do React.



Por que passar um array como prop é útil?
. Permite reutilizar o mesmo componente ButtonGroup para várias listas sem duplicar código.
. Facilita manutenção: só muda o array que você passa.
. É a forma padrão de tornar componentes parametrizáveis — o componente fica genérico.




























Resgatando props no ButtonGroup:
pra eu resgatar esses props no nosso componente buttonGroup, nós poderíamos passar no parâmetro 
da função do componente props.buttons e pegar os valores (dar um exemplo) ou podemos já 
pegar direto os valores usando a sintaxe JSX {} e passar direto o props.

Maneira 1 — receber props e acessar props.buttons (exemplo pedido)
import React from 'react';

export default function ButtonGroup(props) {
  const lista = props.buttons; // aqui estão os valores
  return (
    <div>
      {lista.map((btn, i) => (
        <button key={i}>{btn}</button>
      ))}
    </div>
  );
}

. Aqui o componente recebe um objeto props.
. A prop buttons é um array (por exemplo ["Qualquer um", "1", "2", ...]).
. Renderizamos cada item com map.


Maneira 2 — destructuring: pegar o array diretamente:
Você mostrou este esqueleto:

import React from 'react'

export default function ButtonGroup(buttons) {
  return (
    <div>ButtonGroup</div>
  )
}

Organizando a ideia: quando você escreve function ButtonGroup(buttons), esse parâmetro 
é o objeto props inteiro, não o array. Para receber direto o array, use destructuring:

export default function ButtonGroup({ buttons }) {
  return (
    <div>
      {buttons.map((btn, i) => (
        <button key={i}>{btn}</button>
      ))}
    </div>
  );
}


Resumo do ponto:
. function ButtonGroup(props) ➜ usa props.buttons.
. function ButtonGroup({ buttons }) ➜ já recebe o array buttons pronto.
. Se usar function ButtonGroup(buttons), então para acessar a lista teria que ser 
buttons.buttons (porque o primeiro buttons é na verdade props). 
O mais limpo é uma das duas formas acima.




Foi dessa forma que os botões foram resgatados — explicando seu CardGroup:


export default function CardGroup({ options }) {
    const [clickedId, setClickedId] = useState(-1);

    const handleClick = (e, i) => {
        setClickedId(i);
        console.log('O indice clicado foi: ' + i);
    }
    return (
        <div className='row mt-4'>
            {
                options.map((item, i) => (
                    <div key={i} className='col'>
                        <div
                            onClick={(e) => handleClick(e, i)}
                            className={i === clickedId ? "w-100 cardGroup active" : "w-100 cardGroup"}>
                            <i className={item.icon}></i>
                            <p className='text-truncate'>{item.text}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
O que está acontecendo (linha por linha):
1. function CardGroup({ options })
 . Com destructuring, você recebe direto a prop options.
 . options é um array de objetos, ex.: { icon: "mdi ...", text: "Casa" }.

2. Estado clickedId:
const [clickedId, setClickedId] = useState(-1);

. Guarda o índice do card selecionado.
. Começa em -1 (ninguém selecionado).



3. Handler de clique:

const handleClick = (e, i) => {
  setClickedId(i);
  console.log('O indice clicado foi: ' + i);
}

. Recebe o evento e e o índice i.
. Atualiza o estado com i. Isso força um re-render e permite trocar a classe CSS do card clicado.

O console.log é só para depuração.


4. Renderização da grade:
options.map((item, i) => ( ... ))

. Mapeia cada objeto { icon, text }.
. key={i}: chave única por item. (Dica: se no futuro tiver id, prefira key={item.id}.)



5. Classe condicional para ativo:

className={i === clickedId ? "w-100 cardGroup active" : "w-100 cardGroup"}

. Se o índice atual (i) é o selecionado (clickedId), adiciona active.
. O CSS .cardGroup.active troca o visual (fundo escuro e texto claro), como você definiu.


6. Conteúdo do card:
<i className={item.icon}></i>
<p className='text-truncate'>{item.text}</p>

. O ícone usa a classe passada em item.icon (Material Design Icons).
. O texto usa text-truncate (Bootstrap) para cortar com reticências se for grande.



Chamando o componente com props (como você fez no Modal):
<CardGroup
  options={[
    { icon: "mdi mdi-home-outline", text: "Casa" },
    { icon: "mdi mdi-city-variant-outline", text: "Apartamento" },
    { icon: "mdi mdi-home-import-outline", text: "Casa de hóspedes" },
    { icon: "mdi mdi-office-building-outline", text: "Hotel" },
  ]}
/>

. Aqui options é um array de objetos (diferente daquele caso de ButtonGroup que 
podia ser só array de strings).
. Objetos são úteis quando cada item tem várias propriedades 
(ícone, texto, id, valor etc.).


Explicando (didático) o “filtro dos itens” com CardGroup:
Você pediu para eu explicar com clareza a lógica, sintaxe, parâmetros, props, eventos, 
propriedades — mantendo seu código. Vamos lá:


Componente (seu) — mantido:
import React from 'react';
import { useState } from 'react';
//Importar CSS do CardGroup
import './css/CardGroup.css';

export default function CardGroup({ options }) {
    const [clickedId, setClickedId] = useState(-1);

    const handleClick = (e, i) => {
        setClickedId(i);
        console.log('O indice clicado foi: ' + i);
    }
    return (
        <div className='row mt-4'>
            {
                options.map((item, i) => (
                    <div key={i} className='col'>
                        <div
                            onClick={(e) => handleClick(e, i)}
                            className={i === clickedId ? "w-100 cardGroup active" : "w-100 cardGroup"}>
                            <i className={item.icon}></i>
                            <p className='text-truncate'>{item.text}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}



Parâmetros e props:
. O componente recebe uma prop chamada options.
. Pela assinatura { options }, você já extrai essa prop do objeto props.
. options é array de objetos — cada objeto representa um card clicável 
(com as props mínimas icon e text).


Eventos:
. onClick={(e) => handleClick(e, i)}: para cada card, associamos um handler de clique.
. Quando clica, chamamos handleClick passando:
  . e: o evento (caso precise no futuro),
  . i: o índice do card.


Estado e condições:
. clickedId guarda “quem está selecionado” (o índice).
. className={i === clickedId ? "... active" : "..."} altera a classe com base nessa condição booleana.
. Isso liga a UI (classe CSS) ao estado React — a base do React é esse ciclo estado → render.


CSS (pontos principais):
. cardGroup define o estilo padrão (layout, borda, etc.).
. .cardGroup.active define o estilo do selecionado (fundo escuro, texto claro).
. :hover é só o efeito visual de passar o mouse.


Vantagem de “array de objetos”:
. Diferente de passar só strings (ex.: ["1", "2", "3"]), o objeto permite 
mais propriedades por item.
. Amanhã você pode adicionar id, value, disabled, tooltip, etc., sem mudar a estrutura do componente.


Observação minha (mantida e respondida):
“eu resolvi registrar essas props também porque diferente da outra que foi feito com arrays, 
essa foi feita com objetos, então quero ter ciência que também pode ser feita com objetos…”

Sim! Funciona super bem com objetos (como você fez). É até o formato mais flexível para componentes 
de filtro, porque cada opção raramente é só um texto; geralmente tem um valor usado na lógica do filtro 
e um rótulo para exibir na tela — exatamente como no seu CardGroup.



Extras úteis:

Acessibilidade (opcional, mas recomendado):

<div
  role="button"
  tabIndex={0}
  onKeyDown={(ev) => (ev.key === 'Enter' || ev.key === ' ') && handleClick(ev, i)}
  onClick={(e) => handleClick(e, i)}
  className={i === clickedId ? "w-100 cardGroup active" : "w-100 cardGroup"}
>
  ...
</div>

. Isso permite selecionar via teclado (Enter/Espaço).
. Chave estável: se tiver um id em cada option, prefira key={item.id} em vez de key={i}.
. Comunicar seleção ao pai: se o componente pai (por ex., o ModalFilter) precisa saber qual 
opção foi clicada, passe uma prop onChange:

export default function CardGroup({ options, onChange }) {
  const [clickedId, setClickedId] = useState(-1);
  const handleClick = (e, i) => {
    setClickedId(i);
    onChange?.(options[i], i); // notifica o pai
  };
  ...
}






 







-->