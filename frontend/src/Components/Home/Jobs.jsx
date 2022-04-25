import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listJobs } from '../../actions/jobActions'
import Job from './Job'



function Jobs() {
  const dispatch = useDispatch()
  const jobList = useSelector(state => state.jobList)
  const {error, loading, jobs} = jobList
  useEffect(() => {
    dispatch(listJobs())
  }, [dispatch])
  return (
    <div>
        <p className="page__title margin-bottom-medium">Jobs</p>

        <div className="jobs">
            {jobs.map(job=> (
              <Job key={job._id} job={job} />
            ))}
              
            
        </div>
    </div>
  )
}

export default Jobs