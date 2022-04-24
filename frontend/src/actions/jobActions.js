import axios from 'axios'
import { JOB_LIST_REQUEST,
    JOB_LIST_SUCCESS,
    JOB_LIST_FAIL } 
    from '../constants/jobConstants'

export const listJobs = () => async = (dispatch) =>{
    try{
        dispatch({ type: JOB_LIST_REQUEST })
        const {data} = await axios.get('/api/')
    }
    catch(error){

    }
}