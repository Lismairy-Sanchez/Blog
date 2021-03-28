import axios from 'axios';
import {GET_BY_USER, LOADING, ERROR} from '../types/publicationsTypes';
import * as usersTypes from '../types/usersTypes';

const {GET_ALL: GET_ALL_USERS}=usersTypes;

export const getByUser =(key)=>async(dispatch,getState)=>{
    dispatch({
        type:LOADING
    })

    const {users}=getState().usersReducers;
    const {publications}=getState().publicationsReducers;
    //User_Id es igual a users que recibo como parametro
    const user_id=users[key].id;

    try {
        const response= await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);

        const news=response.data.map((publications)=>(
           { ...publications,
            comments:[],
            open:false
            }
        ));

        const update_publications =[
            ...publications,
            news
        ];
        dispatch({
            type: GET_BY_USER, //Tipo 
            payload:update_publications
        });

        //Busco la ultima publicación
        const publications_key= update_publications.length -1;
        //Actualizar usuarios
        const update_Users =[...users];
        update_Users[key] ={
            ...users[key],
            publications_key
        }
        dispatch({
            type: GET_ALL_USERS, //Tipo 
            payload:update_Users
        });
    } 
    catch (error) {
        console.log('Error'+ error.message)
        dispatch({
            type:ERROR,
            payload:'Pubicaciones no disponibles.'
        })
    }
}

export const openClose=()=>{
    
}
