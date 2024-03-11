import React from 'react'
import './plan.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faIdBadge } from '@fortawesome/free-regular-svg-icons'
import { faBook, faLocationDot } from '@fortawesome/free-solid-svg-icons'
const Plan = () => {
  return (
    <div className='mainPlan'>
    <div className="planConatiner">
        <div className="planLeft">
            {/* <h1>Left</h1> */}
            <img src="/Images/plan.png" style={{height:"450px",width:"300px"}}  alt='first' className='img1'/>
            <div className="subLeft">
                <div className="fonrIght">
                <FontAwesomeIcon color='#FFA03F' size='lg' icon={faBook} />
                </div>

                <p>Proffesional Tour guide</p>
                
            </div>

        </div>
        <div className="planRight">
            <p style={{color:"#FFA03F"}}>why choose us?</p>
            <h1>Plan Your Trip With Us</h1>
            <div className="subRight">
                <div className="subRightItem">
                <div className="subIcon">
                    <FontAwesomeIcon color='#FFA03F' size='lg' icon={faIdBadge} />
                    </div>
            <p>Best Price Guarantee</p>
                </div>
                <div className="subRightItem">
                    <div className="subIcon">
                    <FontAwesomeIcon color='#FFA03F' size='lg' icon={faCalendarCheck} />
                    </div>
            <p>Best Price Guarantee</p>
                </div>
                <div className="subRightItem">
                <div className="subIcon">
                    <FontAwesomeIcon color='#FFA03F' size='lg' icon={faLocationDot} />
                    </div>
            <p>Best Price Guarantee</p>
                </div>
           
            </div>
        </div>
    </div>

    </div>
  )
}

export default Plan