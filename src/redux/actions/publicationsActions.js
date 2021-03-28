import axios from 'axios';
import {GET_BY_USER, LOADING, ERROR} from '../types/publicationsTypes'

export const getByUser =(key)=>async(dispatch,getState)=>{
    const {users}=getState().usersReducers;
    const {publications}=getState().publicationsReducers;
    //User_Id es igual a users que recibo como parametro
    const user_id=users[key].id;
    const response= await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);

    const update_publications =[
        ...publications,
        response.data
    ];
    dispatch({
        type: GET_BY_USER, //Tipo 
        payload:update_publications
    })
}

