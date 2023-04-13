import { useState } from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {AiFillHome} from 'react-icons/ai'
import {MdOutlineAccountTree} from 'react-icons/md'
import {GiPathDistance} from 'react-icons/gi'
import {BsCalendarWeek} from 'react-icons/bs'
import {BsPen}from'react-icons/bs'
import {AiFillWarning} from 'react-icons/ai'
import './Mymoves.css'
import InvertoryDetails from '../InvertoryDetails/InvertoryDetails'

const Samplemove = (props)=>{
    const [viewDetails, setViewDetails] = useState(false)
    const data = props
    const each = data.each
    
    
    const handleViewDetails = ()=>{
        setViewDetails(!viewDetails)
    }
    return(
        <div className="card-container">
                                <div className="top-container">
                                <div className="from-container">
                                     <label>From</label>
                                     <p>{each.moving_from}</p>
                                 </div>
                                 <div className="icon-container-two">
                                 <div className="icon-container">
                                    <AiOutlineArrowRight className="icon"/>
                                 </div>
                                 </div>
                                 <div className="from-container-two">
                                     <label>To</label>
                                     <p>{each.moving_to}</p>
                                 </div>
                                 <div className="request-item">
                                    <label>Request#</label>
                                    <p className="id">{each.estimate_id}</p>
                                 </div>
                                 </div>
                                 <div className="middle-container">
                                    <div>
                                        <AiFillHome className="h"/>{each.property_size}
                                    </div>
                                    <div>
                                        <MdOutlineAccountTree className="h"/>{each.total_items}
                                    </div>
                                    <div>
                                        <GiPathDistance className="h"/>{each.distance}
                                    </div>
                                    <div>
                                        <BsCalendarWeek className="h"/>{each.date_created}<BsPen/>
                                    </div>
                                    <div>
                                        <input type='checkbox'/> Is flexible
                                    </div>
                                    <div>
                                        <button className="red-border" onClick={handleViewDetails}>View more details</button> 
                                         
                                        <button className="red-background">Quotes Awaiting</button>
                                    </div>
                                 </div>
                                 <div className="discliamer">
                                    <div className="war">
                                 <AiFillWarning className="war-icon"/>
                                 </div>
                                 <p className="dis">Disclaimer: </p>
                                 <p>please update your move before two days of shifting</p>
                                 </div>
                                 {viewDetails && (
                                    <div className="second-part-container">
                                        <div className="second-first">
                                            <div className="second-first-tex">
                                                <p className="sec-black">Additional informaion</p>
                                                <p>Test Data</p>
                                            </div>
                                        <button className="red-background1">Edit Addition Info</button>
                                        </div>
                                        
                                            <div className="second-second">
                                                <p className="sec-black">House Details</p>
                                                <button className="red-background1">Edit House Details</button>
                                            </div>
                                            <p className="sec-red">Existing House Details</p>
                                            <div className="first-third">
                                                <div>
                                                    <label className="l-t">Floor No.</label>
                                                    <p>{each.old_floor_no}</p>
                                            
                                                    
                                                </div>
                                                <div>
                                                   <label className="l-t">Elevators Available</label>
                                                    <p>{each.old_elevator_availability}</p>
                                                    
                                                </div>
                                                <div>
                                                <label className="l-t">Distance from Elevator/StrairCase to truck</label>
                                                <p>{each.old_parking_distance}</p>
                                                </div>
                                            </div>
                                            <p className="sec-red">New House Details</p>
                                                <div className="first-third">
                                                    
                                                <div>
                                                    <label className="l-t">Floor No.</label>
                                                    <p>{each.new_floor_no}</p>
                                                </div>
                                                <div>
                                                <label className="l-t">Elevators Available</label>
                                                    <p>{each.new_elevator_availability}</p>
                                                    
                                                </div>
                                                <div>
                                                <label className="l-t">Distance from Elevator/StrairCase to truck</label>
                                                <p>{each.new_parking_distance}</p>
                                                </div>
                                                </div>
                                                <div>
                                                    <InvertoryDetails />
                                                </div>
                                            </div>
                                    
                                )}
                                 <hr className="line"/>
                            </div>
    )
}
export default Samplemove;