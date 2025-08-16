

// componente funcional
 function Destaque(props){
    return(
      <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold">Custom jumbotron</h1>
          <p class="col-md-8 fs-4">{props.texto}</p>
          <button class="btn btn-primary btn-lg" type="button">Example button</button>
        </div>
      </div>
    )
  }
  

//componente de classe:

class Destaques extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
     return(
      <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold">Custom jumbotron</h1>
          <p class="col-md-8 fs-4">{this.props.texto}</p>
          <button class="btn btn-primary btn-lg" type="button">Example button</button>
        </div>
      </div>
    )
  }
}


function App(){
  return(
    <main>
      <div class="container py-4">
     
        <Destaque texto ="oi, isso é um texto"/>
        <Destaques texto ="oi, isso é o segundo texto"/>
        
      </div>
    </main>
  )
}

ReactDOM.render(
  <App/>, 
  document.getElementById('root')
);