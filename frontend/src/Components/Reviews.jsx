import React from 'react'
import reviews from '../reviews'
import Review from './Review'
function Reviews() {
  return (
    <div className="reviews">
        <h1 className="header__action-title margin-bottom-medium">
            Here's What Customers Are Saying
          </h1>
          <span className="card__title-type">Rated 4.6 Out Of 5 Stars By Our Customers</span>


          <div className="row">
          {reviews.map(review => (
                <Review key={review._id} className="col-1-of-3" review={review} />
            ))}
          </div>
    </div>
  )
}

export default Reviews