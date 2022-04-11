import React from 'react'
import { BsCalendar3 } from 'react-icons/bs';

function Pricing() {
  return (
    <div className="pricing">
        <div className="pricing_package pricing_package-1">
            <div className="card__title">
                    <BsCalendar3 className='card__title-icon' /> <span className="card__title-text">IndieChecks</span>
                    <br></br><span className="card__title-type">Free Edition</span>
            </div>
            <div className="card__title--subtitle">
                    <div>
                    <span className="card__title--subtitle-free">Free</span>
                    <span className="card__title--subtitle-small">
                        $0 Fee. $0 State. $0 to File.
                    </span>
                    </div>
                    
            </div>
            <span className="card__title--subtitle-small">
                        For simple tax returns only.
                    </span>
            <div>
                <button className="btn btn_white">
                    File for $0
                </button>
            </div>
        </div>

        <div className="pricing_package pricing_package-2">
            <div className="card__title">
                    
                    <BsCalendar3 className='card__title-icon' /> <span className="card__title-text">IndieChecks</span>
                    <br></br><span className="card__title-type">Self Employed</span>
            </div>
            <span className="card__title--subtitle-small">
                        Personal & small business income and expenses.
                </span>
            <span className="card__title-price">$119*</span>
            <div>
                <button className="btn btn_white">
                    Get Started
                </button>
            </div>
        </div>
    </div>
  )
}

export default Pricing