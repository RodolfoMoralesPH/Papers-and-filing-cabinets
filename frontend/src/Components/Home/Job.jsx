import React from 'react'


function Job({job}) {
  return (
    <div className="job">
        <img src={job.img} className="jobBox" alt="" />


    </div>
  )
}

export default Job