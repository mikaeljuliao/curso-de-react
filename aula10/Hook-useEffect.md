<!--
Aula 10 – Effect Hook (useEffect)
O que é o Effect Hook?

O useEffect é chamado de:
. Hook de Efeito
. Efeito colateral
👉 Ele permite executar efeitos colaterais em componentes funcionais.

Mas o que é um efeito colateral no React?
Um efeito colateral acontece quando o React atualiza o DOM e, após essa 
renderização, queremos executar algum código adicional.

. Esse comportamento funciona quase como um callback ou um retorno que 
acontece depois de cada renderização.
. Ele roda sempre após a renderização do componente — nunca antes.


 
📌 Lembrete importante:
O useEffect só roda depois da renderização.
Ou seja, primeiro o React desenha o componente na tela, e depois 
o efeito colateral é executado.

Exemplo básico
React.useEffect(() => {
  console.log('ativou efeito colateral');
});


Neste exemplo:
. Sempre que o componente renderizar (seja pela primeira vez ou após 
qualquer atualização), a mensagem será exibida no console.


Tipos de uso do useEffect:
O useEffect pode ser usado de 3 formas principais:

1. Sem dependências – executa em toda renderização
React.useEffect(() => {
  console.log('ativou efeito colateral');
});

. Esse formato executa o efeito sempre que o componente renderizar.
. Ou seja, ele será chamado:
   . Na primeira montagem.
   . E em todas as atualizações posteriores.



2. Com dependências específicas – executa somente quando o estado muda:
const [count, setCount] = React.useState(0);

React.useEffect(() => {
  console.log('ativou efeito colateral');
}, [count]);


Aqui temos uma diferença importante:
. O segundo parâmetro do useEffect é um array de dependências → , [count].
. Isso significa que o efeito só vai rodar quando o estado count mudar.


📌 Explicando:
. O [] é uma lista de dependências que o React observa.
. Sempre que um valor dentro dessa lista mudar, o efeito é reexecutado.
. No caso acima, apenas quando count for alterado.

👉 Podemos usar outros estados ou variáveis dentro desse array:

React.useEffect(() => {
  console.log('algum valor mudou');
}, [count, outroEstado, algumaPropriedade]);

3. Com array vazio – executa apenas uma vez (na montagem):
React.useEffect(() => {
  console.log('executou apenas uma vez');
}, []);

. O array de dependências está vazio.
. Isso significa que o efeito vai rodar somente uma vez, logo após 
a montagem inicial do componente.
. Nas próximas renderizações, ele não será executado novamente.

📌 Esse padrão é muito usado para:

. Fazer chamadas de API externas.
. Buscar dados iniciais.
. Configurar algum evento apenas na primeira vez.



Resumo geral do useEffect:

1.useEffect(() => {...})
Executa em toda renderização.
2. useEffect(() => {...}, [estado])
Executa somente quando o estado dentro do array mudar.
3. useEffect(() => {...}, [])
Executa apenas uma vez (na montagem inicial). 

-->