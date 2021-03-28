import axios from 'axios';
import {UPDATE, LOADING, ERROR} from '../types/publicationsTypes';
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

        const news=response.data.map((publication)=>(
           { ...publication,
            comments:[],
            open:false
            }
        ));

        const update_publications =[
            ...publications,
            news
        ];
        dispatch({
            type: UPDATE, //Tipo 
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

export const openClose=(pub_key,com_key)=>(dispatch,getState)=>{
    const {publications}=getState().publicationsReducers;
    const select = publications[pub_key][com_key]

    const update={
        ...select,
        //abierto es distinto de lo que la seleccion abierto tiene
        open:!select.open
    }
    //inmutabilidad
    const update_publications=[...publications];
    update_publications[pub_key]=[...publications[pub_key]];

    update_publications[pub_key][com_key]=update
    dispatch({
        type: UPDATE, //Tipo 
        payload:update_publications
    });
}
