function App(props) {

  const usuarios = [
    { id: 1, nome: "Dimitri", idade: 30 },
    { id: 2, nome: "Bruno", idade: 20 },
    { id: 3, nome: "Maria", idade: 99 },
    { id: 4, nome: "Rafael", idade: 19 },
  ];

  return (
    <ul><Item lista={usuarios} /></ul>
  )
}

function Item(props) {

  const usuarios = props.lista;

  return (
    usuarios.map(
      (usuario) =>
        <li key={usuario.id.toString()}>
          Nome: {usuario.nome} <br />
          Idade: {usuario.idade}<br /><br />
        </li>
    )
  )

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);