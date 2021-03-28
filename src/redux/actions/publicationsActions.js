import axios from 'axios';
import {GET_ALL_PUBLICATIONS, LOADING_PUBLICATIONS, ERROR_PUBLICATIONS} from '../types/publicationsTypes'

export const getAll =()=>async (dispatch)=>{
const response= await axios.get('https://jsonplaceholder.typicode.com/posts');
dispatch({
    type:LOADING_PUBLICATIONS
})
    try {
        dispatch({
            type: GET_ALL_PUBLICATIONS, //Tipo 
            payload:response.data 
        })
    } catch (error) {
        console.log('Error'+ error.message)
        dispatch({
            type:ERROR_PUBLICATIONS,
            payload:'Algo salió mal, intente más tarde.'
        })
    }
}

export const getByUser =(key)=>async(dispatch,getState)=>{
    const {users}=getState().usersReducers;
    const user_id=users[key].id;
    const response= await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);

    dispatch({
        type: GET_ALL_PUBLICATIONS, //Tipo 
        payload:response.data
    })
}