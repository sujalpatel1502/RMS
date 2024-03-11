import React, { useState } from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import format from 'date-fns/format'
import { useNavigate } from 'react-router-dom'
const Header = ({type}) => {
   const [destination,setDestination]=useState('')
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [show, showDate] = useState(false)
    const [openOptions,setopenOptions]=useState(false);
    const[options,setOptions]=useState({
        adult:0,
        children:0,
        room:0
    })
    const navigate=useNavigate();
    const handleOption=(name,operation)=>{
        
            setOptions((prev)=>{
                return{
                    ...prev,[name]:operation === "i"?options[name] + 1 : name!=="children" ? options[name]>1 ? options[name] - 1:1:options[name]>0 ? options[name] - 1:0
                }
            }) 
    }
    const handleSearch=()=>{
        navigate("/hotels",{state:{destination,date,options}})
    }
    return (
        <div className='header'>
            <div className={type==="list"?"headerContainer listMode":"headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attraction</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                {
                    type!="list"?
                    <>
                
                <h1 className='headerTitle'>A lifetime of discounts</h1>
                <p className="heaserDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eos quis similique nobis quisquam dolorum dolorem ratione repudiandae quas error?
                </p>
                <button className='headerBtn'>Sign in / Register</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className='headerIcon' />
                        <input
                            type='text'
                            placeholder='Where are you going'
                            className='headerSearchInput'
                            onChange={e=>setDestination(e.target.value)}
                        />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
                        <span onClick={() => showDate(!show)} className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
                        {
                            show ?
                                <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className='date'
                                /> : null
                        }

                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                        <span onClick={()=>setopenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adults ${options.children} childrens ${options.room} rooms`}</span>
                      { 
                      openOptions?
                      <div className="options">
                            <div className="optionItem">
                                <span className="optiontext">
                                Adult
                                </span>
                                <div className="optionCounter">
                                <button disabled={options.adult <=1} onClick={()=>handleOption("adult","d")} className='optionCounterButton' >-</button>
                                <span className="optionCounterNumber">{options.adult}</span>
                                <button onClick={()=>handleOption("adult","i")} className='optionCounterButton'>+</button>
                                </div>
                                
                            </div>
                            <div className="optionItem">
                                <span className="optiontext">
                                Children
                                </span>
                                <div className="optionCounter">
                                <button disabled={options.children <=0} onClick={()=>handleOption("children","d")} className='optionCounterButton'>-</button>
                                <span className="optionCounterNumber">{options.children}</span>
                                <button onClick={()=>handleOption("children","i")} className='optionCounterButton'>+</button>
                            </div>
                            </div>
                            <div className="optionItem">
                                <span className="optiontext">
                                Room
                                </span>
                                <div className="optionCounter">
                                <button disabled={options.room <=1} onClick={()=>handleOption("room","d")} className='optionCounterButton'>-</button>
                                <span className="optionCounterNumber">{options.room}</span>
                                <button onClick={()=>handleOption("room","i")} className='optionCounterButton'>+</button>
                            </div>
                            </div>
                        </div>:null}

                    </div>
                    <div className='headerSearchbtn'>
                        <button className='headerBtn' onClick={handleSearch}>Search</button>
                    </div>
                </div>
                </>
                :null
                }
            </div>
        </div>
    )
}

export default Header