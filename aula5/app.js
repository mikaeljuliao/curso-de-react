function BemVindo (props){
 if(props.nome){
    return <h1>Olá {props.nome}!</h1>
 }
 return <h1>Olá estranho!</h1>
}

function App(){
   return(
    <DIV>
    <BemVindo nome="Dimitri"/> 
    <BemVindo/>
    </DIV>
   )
}

ReactDOM.render(
<App/>, 
document.getElementById('root'));
  