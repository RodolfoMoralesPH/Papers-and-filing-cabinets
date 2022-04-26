import React from 'react'


function Job({job}) {
  return (
    <div className="job margin-bottom-medium">
        <img src={job.jobImage} className="jobBox" alt="" />
        
          <p className="jobBox__title">{job.name}</p>
          
    </div>
  )
}

export default Job