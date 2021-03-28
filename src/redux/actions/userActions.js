import axios from 'axios'
import {GET_ALL, LOADING, ERROR} from '../types/usersTypes'

//Creo una funcion que retorna otra funcion, esta ultima funcion trae como parametro el dispath que dispara la llamada y contacta al reducer para que haga el cambio de estado

export const getAll=()=> async (dispatch)=>{
    dispatch({
        type:LOADING
    })
    //Manejo de errores
    try {
        //funcion asincrona, trae una promesa
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        dispatch({
            type: GET_ALL, //Tipo 
            payload:response.data 
        })
    //Si existe un promesa entra al catch
    } 
    catch (error) {
        console.log('Error'+ error.message)
        dispatch({
            type:ERROR,
            payload:'Información de usuario no disponible.'
        })
    }
}