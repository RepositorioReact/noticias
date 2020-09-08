import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  //desde aquí fluye la categoría, porque de aquí se toma la categoría y pasamos el resultado a Formulario. En este componente se hace la consulta
  //definir la categoría y noticias por separado
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() =>{
    const consultarAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=e2255e57866946fdac849fa61b871e22`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  },[categoria]);

  return (
    <Fragment>
      <Header 
        titulo="Buscador de Noticias"
      />
      <div className="container white">
        <Formulario 
          guardarCategoria={guardarCategoria}
        />
        <ListadoNoticias
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
