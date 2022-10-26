import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';


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
      <Time nome="Programação"/>
      <Time nome="Frontend"/>
      <Time nome="Data Science"/>
      <Time nome="Devops"/>
    </div>
  );
}

export default App;
