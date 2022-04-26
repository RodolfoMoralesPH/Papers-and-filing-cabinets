import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listJobs } from '../actions/jobActions'
import HomeHeader from '../Components/Home/HomeHeader'
import Job from '../Components/Home/Job'
import JobExpanded from '../Components/Home/JobExpanded'

function Home() {
  const [jobGrab, setJobGrab] = useState([])
  const dispatch = useDispatch()
  const jobList = useSelector(state => state.jobList)
  const {error, loading, jobs} = jobList
  useEffect(() => {
    dispatch(listJobs())
    console.log()
  }, [dispatch])
  return (
    <main>
        <HomeHeader />
        <div className="homecomponentbox">
          <div className="homecomponentbox__left">
          <div>
        <p className="page__title margin-bottom-medium">Jobs</p>

        <div className="jobs">
            {jobs.map(job=> (
              <Job key={job._id} job={job} />
            ))}
              
            
        </div>
    </div>
          </div>
          <div className="homecomponentbox__right">
          <JobExpanded key={jobs._id} jobs={jobs} />
          </div>
        </div>
    </main>
  )
}

export default Home