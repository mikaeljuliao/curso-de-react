//COMPONENTE FUNCIONAL
// function Destaque(props) {
//   return (
//     <div class="p-5 mb-4 bg-light rounded-3">
//       <div class="container-fluid py-5">
//         <h1 class="display-5 fw-bold">Custom jumbotron</h1>
//         <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
//         <button class="btn btn-primary btn-lg" type="button">Example button</button>
//       </div>
//     </div>
//   )
// }

//COMPONENTE DE CLASSE
// class Contador extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     }
//   }

//   add = () => {
//     this.setState(function (prevState) {
//       return { count: prevState.count + 1 }
//     })
//   }

//   sub = () => {
//     this.setState(function (prevState) {
//       return { count: prevState.count - 1 }
//     })
//   }

//   render() {
//     return (
//       <div class="p-5 mb-4 bg-light rounded-3">
//         <div class="container-fluid py-5">
//           <h1 class="display-5 fw-bold">Contador: {this.state.count}</h1>
//           <p class="col-md-8 fs-4">Aprendendo State (Estado)</p>
//           <div class="row gap-2">
//             <button onClick={this.sub} class="col btn btn-danger btn-lg" type="button">Sub -</button>
//             <button onClick={this.add} class="col btn btn-success btn-lg" type="button">add +</button>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

//COMPONENTE FUNCIONAL
function Contador(props) {

  //CRIAR UM STATE
  const [count, setCount] = React.useState(0);

  function add() {
    setCount(count + 1);
  }

  function sub() {
    setCount(count - 1);
  }

  return (
    <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Contador: {count}</h1>
        <p class="col-md-8 fs-4">Aprendendo State (Estado)</p>
        <div class="row gap-2">
          <button onClick={sub} class="col btn btn-danger btn-lg" type="button">Sub -</button>
          <button onClick={add} class="col btn btn-success btn-lg" type="button">add +</button>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <main>
      <div class="container py-4">
        <Contador />

      </div>
    </main>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);