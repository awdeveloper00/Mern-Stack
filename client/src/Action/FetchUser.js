import * as api from '../API/API'
export const getUser = () => async (dispatch) => {
    try {
        const data  = await api.getUsers();
         //Action just an object consisting of this
        dispatch({ type:'FETCH_ALL', payload:data });
       
    } catch (error) {
        console.log(error.message)
    }

}
