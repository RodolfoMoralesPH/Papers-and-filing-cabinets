import React from 'react'


function Review({review}) {
  return (
    <div className="col-1-of-3 review">
        <span className="title">
            {review.phrase}
        </span><br></br>
        <span className="margin-top-medium review_text">
            {review.rev}
        </span>

        <div className="review__profile margin-top-medium">
          <div className="review__profile-left">
            <img src={review.image} className="review__profile-picture" />
          </div>

          <div className="review__profile-right">
            <span className="title">
              {review.name}
          </span>
          <p className=" header__action-supplementarytext">
            {review.place}
          </p>
          </div>

        </div>
    </div>
  )
}

export default Review