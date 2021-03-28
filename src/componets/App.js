import React from 'react';
//importo React router dom
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './NavBar'
import Publications from './Publications/Publications';
import Users from './users';

const Taks=()=> <div>Tareas</div>

function App (){
  return (
  //BrowserRouter nos deja navegar en las pantallas
  <BrowserRouter>
    <NavBar/>
    <div className="margin">
    <Route exact path='/' component={Users}/>
    <Route exact path='/Tareas' component={Taks}/>
    <Route exact path='/Publicaciones/:key' component={Publications}/>
    </div>
  
  </BrowserRouter>
  )
}

export default App;
