//Componente de Clase
import React, {Component} from 'react';

//importo el connect
import {connect} from 'react-redux'
import * as userActions from '../../redux/actions/userActions'
import Spinner from '../Spinner/Spiner';
import Fatal from '../Fatal/Fatal';
import Table from './Table';

class Users extends Component{
 
//Funcion de montado
componentDidMount(){
  if(!this.props.users.length){
    this.props.getAll();
  }
}


putContent=()=>{
  if(this.props.loading){
    return <Spinner/>
  }

  if(this.props.error){
    return <Fatal message={this.props.error}/> //paso info por parametros
  }
  return <Table/>
}
  render (){
console.log(this.props)
    return(
    <div >
      <h1>
        Usuarios
      </h1>
     {this.putContent()}
    </div>
    )
  }
}

//Traigo los reducers que necesito
const mapStateToProps= (reducers) => {
    return reducers.usersReducers;
};
//connect recibe como primer parametro todos los reducers, y como segundo parametro todas las acciones
export default connect(mapStateToProps,userActions) (Users);
