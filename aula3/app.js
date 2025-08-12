const elemento = <h1 classNAME="titulo">ola mundo</h1>


ReactDOM.render(elemento,
document.getElementById("root"));

const nome = 'mikael'
const usuario = {
    nome: 'mikael',
    sobrenome: 'rocha'
}
const h1 = document.creaateElement('h1')
h1.textContent = "ola {usuario.nome}";
h1.classNAME = 'titulo'
document.getElementById("root").append(h1);
console.log(h1)