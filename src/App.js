import Store from './store/Store'
import { Provider } from 'react-redux'
import AgregarCitas from './components/AgregarCitas';
import ListarCitas from './components/ListarCitas';

function App() {
  return (
    <Provider store={Store}>
      <div className="container text-center">
        <header><h1>Spa</h1></header>
        <div className="row mt-3">
          <div className="col-md-6">
            < AgregarCitas />
          </div>
          <div className="col-md-6">
            < ListarCitas />
          </div>
        </div>
      </div>
    </Provider>
  );
}


export default App;