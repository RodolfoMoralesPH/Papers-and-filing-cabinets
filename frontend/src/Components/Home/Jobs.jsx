import React from 'react'
import Job from './Job'
import jobs from '../../jobs'

function Jobs() {
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