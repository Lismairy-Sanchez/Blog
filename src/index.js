import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './componets/Style/icons.css'
import App from './componets/App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
//redux-thunk es un middleware
import reduxThunk from 'redux-thunk';
import reducers from './redux/reducers';


//Creo un store (Almacenamiento)
const store = createStore(
  reducers, //Todos los reducers
  {}, //Estado inicial
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  //Proveedor, el almacenamieno es igual al que cree, esto le da acceso a la app
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
