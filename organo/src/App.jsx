import Banner from './components/Banner';
import Formulario from './components/Formulario';
import { useState } from 'react';


function App() {
  const [colaboradores, setColaboradores] = useState([])
  const aoColaboradorAdicionado = (colaborador) => {
    console.log(colaboradores)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        aoColaboradorCadastrado={colaborador => aoColaboradorAdicionado(colaborador)}
      />
    </div>
  );
}

export default App;
