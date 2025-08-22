
function Explodiu(props) {
  return (
    <h1 className="text-danger">EXPLODIU!</h1>
  )
}

//COMPONENTE FUNCIONAL
function Contador(props) {

  let tema = props.tema;
  let btnNome = props.btnNome;

  //CRIAR UM STATE
  const [count, setCount] = React.useState(0);
  const [nome, setNome] = React.useState(btnNome);

  //EFEITO COLATERAL SOMENTE UMA VEZ
  React.useEffect(() => {
    console.log('ATIVOU EFEITO COLATERAL APENAS NA MONTAGEM');
  }, [])

  //EFEITO COLATERAL SOMENTE QUANDO COUNT MUDAR
  React.useEffect(() => {
    document.title = 'Contador: ' + count;
    console.log('ATIVOU EFEITO COLATERAL DO COUNT');
    if (count >= 5) {
      setNome('Dimitri');
    }
  }, [count])

  //EFEITO COLATERAL SOMENTE QUANDO COUNT MUDAR
  React.useEffect(() => {
    console.log('ATIVOU EFEITO COLATERAL DO NOME');
  }, [nome])



  function add() {
    setCount(count + 1);
  }

  function sub() {
    setCount(count - 1);
  }

  function trocaNome() {
    setNome('Dimitri');
  }


  console.log('RENDERIZADO COMPONENTE!');

  // if (count > 10) {
  //   return (
  //     <div className="p-5 mb-4 bg-light rounded-3">
  //       <div className="container-fluid py-5">
  //         <Explodiu />
  //       </div>
  //     </div>
  //   )
  // }
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        {
          nome && <h1 className="display-5 fw-bold">Nome: {nome}</h1>
        }

        {
          count > 10 ? <Explodiu /> : <h1 className="display-5 fw-bold">Contador: {count}</h1>
        }
        <p className="col-md-8 fs-4">Aprendendo State (Estado)</p>
        <div className="row gap-2">
          <button onClick={sub} className="col btn btn-danger btn-lg" type="button">Sub -</button>
          <button onClick={add} className="col btn btn-success btn-lg" type="button">add +</button>
        </div>
        <button onClick={trocaNome} className="col btn btn-primary btn-lg" type="button">Trocar Nome</button>
      </div>
    </div>
  )
}

function App() {
  return (
    <main>
      <div className="container py-4">
        <Contador btnNome={false} />

      </div>
    </main>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);