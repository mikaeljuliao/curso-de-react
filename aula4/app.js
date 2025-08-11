function relogio() {
    const elemento = (
      <div>
        <h1>Olá Mundo!</h1>
        <h2>Agora é {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(elemento, document.getElementById('root'));
  }
  
  setInterval(relogio, 1000);