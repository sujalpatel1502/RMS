import React, { useState } from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    const [isLocationOpen, setIsLocationOpen] = useState(false);
    const [isDateOpen, setIsDateOpen] = useState(false);
    const [isPriceOpen, setIsPriceOpen] = useState(false);
    const [data, setData] = useState(undefined);
 
    const options = [
        "Mumabi",
        "Dubai",
        "paris",
        "China",
        "Japan",
    ];
    const onOptionChangeHandler = (event) => {
        setData(event.target.value);
        
    };

  return (
    <div className="header">
        <div className="headerContainer">
            <div className="headerLeft">
            <h1 style={{fontSize:"69px"}}>
           <span style={{textDecorationLine:"underline",textDecorationColor:"#FFA03F"}}>Let’s</span>  Create Memorable Journey
            </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
             <div className='headerData'>
                <div className="headerDataItem">
                <select onChange={onOptionChangeHandler}>
                <option>Please choose one option</option>
                {options.map((option, index) => {
                    return (
                        <option key={index}>
                            {option}
                        </option>
                    );
                })}
            </select>
            <p> {data} 
                </p> 
                </div>
            
            
             

             <div className="headerDataItem">
                <select onChange={onOptionChangeHandler}>
                <option>Please choose one option</option>
                {options.map((option, index) => {
                    return (
                        <option key={index}>
                            {option}
                        </option>
                    );
                })}
               
            </select>
            <p> {data} 
                </p> 
                </div>
                <div className="headerDataItem">
                <select onChange={onOptionChangeHandler}>
                <option>Please choose one option</option>
                {options.map((option, index) => {
                    return (
                        <option key={index}>
                            {option}
                        </option>
                    );
                })}
            </select>
            <p> {data} 
                </p> 
                </div>
                <div className="searchHeader">
                <FontAwesomeIcon color='white' size='lg' icon={faSearch} />
                </div>

                </div>
            
            </div>
            <div className="headerRight">
                
                <div className="headerRight1">
                <img src="/Images/Left1.png" style={{height:"250px",width:"200px"}}  alt='first' className='img1'/>
                <img src="/Images/Left2.png" style={{height:"250px",width:"200px"}} alt='second' className='img2'/>
               
                </div>
                <div className="headerRight2">
                <img src="/Images/Left3.png" style={{height:"350px",width:"250px"}}  alt='third' className='img3'/>
                </div>
                </div>
        </div>
    </div>
  )
}

export default Header