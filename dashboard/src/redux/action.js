import * as types from "./actionTypes"

// get request
const getRequest = () => ({
     type:types.GET_REQUEST
})
const getSuccess = (payload) => ({
    type:types.GET_SUCCESS,
    payload
})
const getError = () => ({
    type:types.GET_ERROR
})

// post request
const postRequest = () => ({
    type:types.POST_REQUEST
})
const postSuccess = (payload) => ({
   type:types.POST_SUCCESS,
   payload
})
const postError = () => ({
   type:types.POST_ERROR
})

// edit request
const editRequest = () => ({
    type:types.EDIT_REQUEST
})
const editSuccess = (payload) => ({
   type:types.EDIT_SUCCESS,
   payload
})
const editError = () => ({
   type:types.EDIT_ERROR
})

export {
    getRequest,
    getSuccess,
    getError,
    postRequest,
    postSuccess,
    postError,
    editRequest,
    editSuccess,
    editError
}