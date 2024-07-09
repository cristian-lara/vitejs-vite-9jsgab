import { useState } from 'react';
import viteLogo from '/vite.svg';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const [nombre, setNombre] = useState('Cristian');

  const [resultado, setResultado] = useState('');

  const enviarBackend = () => {
    try {
      eval(nombre);
      setResultado(nombre);
    } catch (e) {
      setResultado(nombre);

      console.log('error', e);
    }
    console.log('enviando data al backend', nombre);
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Diners_Club_Logo3.svg/799px-Diners_Club_Logo3.svg.png"
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <h1>Nombre: {resultado}</h1>
      <div dangerouslySetInnerHTML={{ __html: resultado }} />
      <label htmlFor="search">Nombre</label>
      <input
        value={nombre}
        id="search"
        type="text"
        onChange={(e) => setNombre(e.target.value)}
      />
      <button onClick={() => enviarBackend(nombre)}>enviar nombre</button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
