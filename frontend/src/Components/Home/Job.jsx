import React from 'react'


function Job({job}) {
  return (
    <div className="job">
        <img src={job.img} className="jobBox" alt="" />
        
          <span className="jobBox__title">{job.name}</span>
    </div>
  )
}

export default Job