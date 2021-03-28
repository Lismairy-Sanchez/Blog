import {GET_ALL_USERS, LOADING_USERS, ERROR_USERS} from '../types/usersTypes'
//Creo un estado inicial
const initialState ={
    users:[],
    loading: false,
    error:''
};

//Indico que por defecto el estado sea el estado inicial y la accion
export default function usersReducers(state = initialState, action) {
       switch (action.type){
        //Traer usuarios
        case GET_ALL_USERS:
            //Hago una copia del estado
            return {
                ...state, 
                users: action.payload,
                loading: false,
                error:''
            }
        case LOADING_USERS:
            return{...state, loading:true}
            
        case ERROR_USERS:
            return{
                ...state,
                error:action.payload,
                loading:false
            }

        default: return state;
    }
}