import React from 'react'
import Job from './Job'
import jobs from '../../jobs'

function Jobs() {
  return (
    <div>
        <span className="page__title">Jobs</span>

        <div className="jobs">
            {jobs.map(job=> (
              <Job key={job._id} job={job} />
            ))}
              
            
        </div>
    </div>
  )
}

export default Jobs