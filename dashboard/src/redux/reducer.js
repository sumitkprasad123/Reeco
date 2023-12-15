import * as types from "./actionTypes";
import jsonData from "../db.json";

const initialState = {
     isLoading:false,
     isError:false,
     data:jsonData.data
}

const reducer = (state = initialState,action) => {
     const {type,payload} = action;

     switch(type){
        // get request
        case types.GET_REQUEST:
            return{
               ...state,isLoading:true
            }
        case types.GET_SUCCESS:
            return{
                ...state,isLoading:false,data:payload
            } 
        case types.GET_ERROR:
            return{
                ...state,isLoading:false,isError:true
            }   
        // post request 
        case types.POST_REQUEST:
            return{
               ...state,isLoading:true
            }
        case types.POST_SUCCESS:
            return{
                ...state,isLoading:false,data:[...state,payload]
            } 
        case types.POST_ERROR:
            return{
                ...state,isLoading:false,isError:true
            }   
        // edit request 
        case types.EDIT_REQUEST:
            return{
               ...state,isLoading:true
            }
        case types.EDIT_SUCCESS:
            return{
                ...state,
                isLoading:false,
                data:state.data.map((item) => {
                    if(item.id === payload.id){
                        return {...item,...payload}
                    }
                    return item;
                })
            } 
        case types.EDIT_ERROR:
            return{
                ...state,isLoading:false,isError:true
            }     
        default:return state    
     }
}

export { reducer }