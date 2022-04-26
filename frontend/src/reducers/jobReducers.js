import { JOB_LIST_REQUEST,
    JOB_LIST_SUCCESS,
    JOB_LIST_FAIL } 
    from '../constants/jobConstants'

import { JOB_EXPANDED_REQUEST,
    JOB_EXPANDED_SUCCESS,
    JOB_EXPANDED_FAIL } 
    from '../constants/jobConstants'

export const jobListReducer = (state = {jobs: []}, action) => {
    switch(action.type){
        case JOB_LIST_REQUEST:
            return {loading: true, jobs: []}
        case JOB_LIST_SUCCESS:
            return {loading: false, jobs: action.payload}
        case JOB_LIST_FAIL:
            return {loading: false, error: action.payload}

        default: 
            return state
    }
}

export const jobExpandedReducer = (state = {jobExpanded: []}, action) => {
    switch(action.type){
        case JOB_EXPANDED_REQUEST:
            return {jobExpanded: []}
        case JOB_EXPANDED_SUCCESS:
            return {jobExpanded: action.payload}
        case JOB_EXPANDED_FAIL:
            return {jobExpanded: action.payload}

        default: 
            return state
    }
}