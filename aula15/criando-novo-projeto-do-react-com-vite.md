<!--
Aula 15 – Criando Novo Projeto React com Vite

Até agora no curso, trabalhamos com o React via CDN, ou seja, carregávamos 
o React através de links diretos em nossos arquivos HTML.
Isso serviu para simplificar e focarmos apenas na lógica do React: entender 
componentes funcionais e de classe, estados, propriedades, eventos e formulários.

Mas, no dia a dia de um desenvolvedor, não utilizamos CDN para projetos reais.

O que é CDN?
CDN significa Content Delivery Network (Rede de Entrega de Conteúdo).

. É basicamente um servidor que hospeda arquivos prontos 
(como o React, Bootstrap, jQuery, etc).
. Ao usar um link CDN, seu navegador baixa esses arquivos já prontos e os executa.

Exemplo de uso de React via CDN:

<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

Problemas de usar CDN no React:
. Falta de performance em projetos grandes.
. Difícil de controlar versões (precisamos ficar caçando links de cada versão).
. Não é prático para projetos reais, apenas para testes ou estudos rápidos.

Entrando no Mundo Real: Usando Vite ⚡

Agora vamos trabalhar da maneira correta: criando projetos com Vite, que é 
uma ferramenta moderna de build e bundling para o React.

Por que usar Vite?
. É rápido e otimizado para desenvolvimento.
. Facilita a organização do projeto (pastas, arquivos, dependências).
. Possui suporte a JSX, CSS Modules, TypeScript e muito mais.
. Evita os problemas que tínhamos com CDN.


👉 A partir desta aula, começaremos a criar nossos projetos de React da 
forma profissional, como realmente é feito no mercado.

👉 As aulas anteriores serviram como base para aprender os conceitos 
fundamentais do React. Agora, vamos construir projetos completos, com 
ferramentas modernas, boas práticas e maior produtividade.

📌 Na próxima etapa, vamos aprender:
. Como instalar o Vite.
. Como criar nosso primeiro projeto React com Vite.
. Como rodar a aplicação no navegador.
. Estrutura inicial do projeto criado.




Pré-Requisitos para Criar Projetos React com Vite:
Antes de instalar e criar nosso projeto React usando o Vite, precisamos garantir 
alguns pré-requisitos no computador.

1. Verificar instalação do Node.js
O Node.js é essencial porque ele permite rodar JavaScript fora do navegador. 
Além disso, várias ferramentas do ecossistema React dependem dele.

. Abra o Prompt de Comando (cmd) no Windows.
. Digite o comando:

node -v

. Esse comando retorna a versão instalada do Node.
⚠️ Se aparecer que o comando não foi reconhecido, significa que o 
Node não está instalado.

2. Verificar instalação do NPM
O NPM (Node Package Manager) é o gerenciador de pacotes do Node. Com 
ele instalamos bibliotecas e ferramentas de forma simples pela linha de comando.

. Ainda no cmd, digite:
npm -v

. Esse comando retorna a versão instalada do NPM.

🔹 Observação: o NPM já vem junto com o Node.
🔹 Caso você não tenha o Node ou o NPM instalados, acesse o site oficial:
👉 https://nodejs.org/pt

E baixe a versão LTS (Long Term Support), que é a mais estável.

3. Métodos para criar projetos React
Existem dois métodos principais para criar um projeto React:

Método tradicional (Create React App):

. Comando:

| npx create-react-app my-app |
(onde my-app é o nome do projeto)

Esse método ainda é usado em muitas empresas, mas hoje em dia é 
considerado menos eficiente.
Ele usa ferramentas como Webpack, Babel e ESLint — ótimas em 2014, 
mas que já não são as mais modernas em termos de performance.


Método moderno (Vite):
O Vite é uma ferramenta mais rápida e otimizada para criar e rodar projetos React.

Comando recomendado:
| npm create vite@latest |

Esse comando inicia a criação de um novo projeto.
Você pode também especificar direto o nome e o template:

| npm create vite@latest nome-do-projeto --template react |


4. Criando um projeto React com Vite:

Passo a passo:
1. Criar uma pasta para os projetos:
Exemplo:
cd C:\react

(No seu caso, você comentou que acessa algo como: 
cd "C:\Users\nathanael\Desktop\curso-de-react". Isso também funciona.
esse foi o caminho do arquivo que usei nessa aula.)

⚠️ Observação: se a pasta não estiver no Disco C, pode ser que o 
acesso dê mais trabalho. É por isso que geralmente usamos C:\.


2. Rodar o comando de criação:

npm create vite@latest


1. Nome do projeto:
Ele vai perguntar qual será o nome da pasta/projeto.
→ Exemplo: digite projeto1.
Isso vai criar uma pasta chamada projeto1 com a estrutura inicial.

2. Framework:
Em seguida, ele perguntará qual framework você quer usar.
→ Escolha React.

3. Variação do framework:
Depois, vai pedir a variação.
→ Você pode escolher JavaScript (mais simples para começar) 
ou TypeScript (se quiser trabalhar com tipagem mais avançada).
. JavaScript = código mais direto.
. TypeScript = código com tipagem, ajuda a evitar erros, mas pode parecer mais "chato" no começo.

Após isso, o Vite vai gerar todos os arquivos e pastas do projeto automaticamente.


Entrar na pasta do projeto:
| cd projeto1 | 
obs:projeto1 e o nome do meu projeto, coloco o nome do projeto criado

👉 Esse comando entra dentro da pasta criada.

Abrir no VS Code:
| code . |

👉 Abre o projeto diretamente no Visual Studio Code.


Instalar dependências:
| npm install |

👉 Isso baixa e instala todas as bibliotecas necessárias que o 
Vite configurou para o seu projeto.


Rodar o servidor de desenvolvimento:
| npm run dev |

. Esse comando inicia um servidor local.
. O terminal vai mostrar um link, geralmente http://localhost:5173/.
. Segure Ctrl e clique no link para abrir o projeto no navegador. 🚀




Passo a passo simulando do zero:

1. Ligando o PC e abrindo tudo do zero
Imagine que você acabou de ligar o notebook, está na área de trabalho 
limpinha, sem nada aberto ainda.

2. Abrindo o terminal (CMD)
Você aperta Win + R, digita cmd e abre o Prompt de Comando.

3. Entrando na pasta onde ficará seu projeto
No CMD você digita:

| cd C:\react |

(se a pasta não existir, você cria ela antes com mkdir 
react e depois entra).


4. Criando um novo projeto com Vite:
Agora você manda o comando:
| npm create vite@latest |

Ele vai perguntar o nome do projeto → você digita o nome 
que quiser, por exemplo:

nome-do-projeto


5. Escolhendo framework e linguagem:

. Framework → você escolhe React
. Linguagem → você escolhe JavaScript


6. Entrando na pasta do projeto:
Depois disso, você acessa a pasta recém-criada:

cd nome-do-projeto


7. Abrindo o projeto no VS Code:
Para abrir no editor:
| code . |

(ou code nome-do-projeto se você ainda não estiver 
dentro da pasta).


8: Instalando as dependências:
No terminal do projeto (ou ainda no CMD dentro da pasta 
do projeto), você roda:
| npm install |



9: Rodando o servidor local:
Depois que as dependências terminarem de instalar, 
você liga o servidor:
| npm run dev |

Pronto 🚀 Agora o navegador vai te dar um link 
(geralmente http://localhost:5173/) e você já consegue ver seu projeto 
React funcionando. 




tra forma mais rápida de criar o projeto:
Se você não quiser passar pelo processo de ficar escolhendo framework e template 
na hora de criar o projeto, pode abrir o CMD (ou terminal) e rodar o comando:

npm create vite@latest nome-do-projeto -- --template react

👉 O que esse comando faz?
. Ele já cria o projeto configurado com React automaticamente, sem perguntar nada.
. É como se fosse um atalho (shorthand), que pula aquelas opções de escolha 
(framework, variante etc.).


Depois que o projeto for criado, você precisa rodar os três comandos básicos:

1. Entrar na pasta do projeto
| cd nome-do-projeto |


2. Abrir o projeto no VS Code:
| code . |


3. Instalar as dependências:
| npm install |


4. Rodar o servidor de desenvolvimento:
| npm run dev |

Ou seja, em poucos comandos você já está com o React rodando pelo Vite. 🚀
-->