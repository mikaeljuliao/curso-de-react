import { useState } from "react";

// Componente separado que será exibido quando o contador passar de 10
function Explodiu() {
  return <h1>💥 Explodiu!</h1>;
}

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>

      {/* Renderização condicional com componente separado */}
      {count > 10 && <Explodiu />}
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);