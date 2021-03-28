import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const Table = (props) => {
    //Agregar 
    const bring_Users =() => (      
        //Map itera por la cantidad de elementos que tenga en el arreglo
        props.user.map((user,key)=>(
            //Se define la key
            <tr key={user.id}>
                <td>
                    {user.name}
                </td>
                <td>
                    {user.email}
                </td>
                <td>
                    {user.website}
                </td>
                <td>
                     {/* Pasando parametros por url */}
                    <Link to= {`/publicaciones/${key}`}>
                        <div className="eye-solid icon"> 
                        </div>
                    </Link>
                </td>
            </tr>
        )) 
    );

    return(
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th>
                    Nombre
                    </th>
                    <th>
                    Email
                    </th>
                    <th>
                    Link
                    </th>
                    <th>
                    Id
                    </th>
                </tr>
                </thead>
                <tbody>
                {/* this se usa para hacer referencia a una funcion */}
                {bring_Users()}
                </tbody>
            </table>
        </div>
    )
};

//Paso info conectando con state de redux
const mapStateToProps=(reducers)=>{
    return reducers.usersReduces;
}

export default connect(mapStateToProps)(Table);
