import React from 'react';
import Store from './store/Store'
import { Provider } from 'react-redux'
import AgregarAsistente from './components/AgregarCitas';
import ListarAsistente from './components/ListarCitas';

function App() {
  return (
    <Provider store={Store}>
      <div className="container text-center">
        <header><h1>Discoteca</h1></header>

        <div className="infinite row mt-3">
          <div className="col-md-6">
            < AgregarAsistente />
          </div>
          <div className="col-md-6">
            < ListarAsistente />
          </div>
        </div>
        
      </div>
    </Provider>
  );
}

export default App;