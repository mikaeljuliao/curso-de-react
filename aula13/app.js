const arr = [1,2,3,4,5];

const itemLista = ArrayBuffer.map((numero) => 
 <li key={numero.toString}>{numero}</li>
  
);

ReactDOM.render(
    <ul>{itemLista}</ul>,
    document.getElementById('root')
)