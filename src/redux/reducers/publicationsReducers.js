import {GET_ALL_PUBLICATIONS, LOADING_PUBLICATIONS, ERROR_PUBLICATIONS} from '../types/publicationsTypes'
//Creo un estado inicial
const initialState ={
    publications:[],
    loading: false,
    error:''
};

//Indico que por defecto el estado sea el estado inicial y la accion
export default function publicationsReducers(state = initialState, action) {
       switch (action.type){
        case GET_ALL_PUBLICATIONS:
            //Hago una copia del estado
            return {
                ...state, 
                publications: action.payload,
                loading: false,
                error:''
            }
        case LOADING_PUBLICATIONS:
            return{...state, loading:true}
                
        case ERROR_PUBLICATIONS:
            return{
                    ...state,
                    error:action.payload,
                    loading:false
                }
    
        default: return state;
    }
}