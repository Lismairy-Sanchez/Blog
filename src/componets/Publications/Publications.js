//-------------------------Imports
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Spinner from '../Spinner/Spiner';
import Fatal from '../Fatal/Fatal';
import * as userActions from '../../redux/actions/userActions'
import * as publicationsActions from '../../redux/actions/publicationsActions'

const {getAll:getAll_Users}=userActions;
const {getByUser:getUser_Publications}=publicationsActions;

class Publications extends Component{

    async componentDidMount(){
        const {
            getAll_Users,
            getUser_Publications,
            match:{params:{key}}//destructuro
        }= this.props;

        //sino existen los usuarios traerlos
        if(!this.props.usersReducers.users.length){
            await getAll_Users();
            //console.log(this.props.publicationsReducers)
        }
        if(this.props.usersReducers.error){
            return;
        }
        //Si esta propiedad no esta en 
        if(!('publications_key' in this.props.usersReducers.users[key])){
           getUser_Publications(key);
        }      
    }

    //-----------------------------Función Poner Usuarios
    put_User= ()=>{
        const {
            usersReducers,  
            match:{params:{key}}//destructuro
        }= this.props;
        if(usersReducers.error){
            return <Fatal message={usersReducers.error}/>
        }
        if(!usersReducers.users.length|| usersReducers.loading){
            return <Spinner/>
        }
        const name= usersReducers.users[key].name;
        return(
            <h1>
                Publicaciones de {name}
            </h1>
        )
    };

    //----------------------------Función Poner Publicaciones
    put_Publications=()=>{
        const {
            usersReducers, 
            usersReducers:{users},
            publicationsReducers, 
            publicationsReducers:{publications},
            match:{params:{key}}
        }= this.props;
        if(!users.length) return;
        if(usersReducers.error)return;
        if(publicationsReducers.loading){
            return <Spinner/>
        }
        if(publicationsReducers.error){
            return <Fatal message={publicationsReducers.error}/>
        }
        if(!publications.length) return;
        if(!('publications_key' in users[key]))return;
        
        const {publications_key}=users[key]
        return publications[publications_key].map((publications)=>(
            <div 
            className="put_title"
            key={publications.id}
            onClick={()=>alert(publications.id)}
            >
                <h2>
                    {publications.title}
                </h2>
                <h3>
                    {publications.body}
                </h3>
            </div>
        ));
    };

    render(){
        console.log(this.props)
        return(
            <div>
               {this.put_User()}
               {this.put_Publications()}
            </div>
        )
    }
}
const mapStateToProps= ({usersReducers, publicationsReducers}) => {
    return {
        usersReducers,
        publicationsReducers
    };
};

const mapDispatchToProps=({
    getAll_Users,
    getUser_Publications
})
export default connect(mapStateToProps,mapDispatchToProps)(Publications);