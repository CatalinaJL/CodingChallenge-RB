import React, {useState} from 'react';
import triangle from '../Assets/Triangle.jpg';
import {DateHour} from './DateHour';


const dataCard=['Problem', 'Solution', 'Team']

export const ItemsList = () =>{
    const [displayDateHour, setDisplayDateHour]= useState(false);

    const HandleChange= () =>{
        console.log('estan seleccionando');
        setDisplayDateHour(true);
    } ; 

    return(
        <div className="itemsList">
                <div className="headerBox">
                    <h4>Ideation</h4>
                    <span>Select all in ideation</span>
                    <p>Due Date (optional)</p>
                </div>
                {dataCard.map((data, index)=>{
                    return(
                    <div className="containerItem" key={index}>
                        <div className="containerCheckBox">
                            <input type="radio" name="radio" onChange={HandleChange} value={data}/>
                        </div>
                        <div className="card">
                            <div className="card-text">
                                <h4>{data}</h4>
                                <p>view Builder</p>
                            </div>
                            <div className="card-img">
                                <img src={triangle} alt=""/>
                            </div>
                        </div>
                        <div>
                                {displayDateHour && <DateHour/>}
                                {!displayDateHour && null}
                        </div>
                    </div>)
                })}
           <div className="headerBox">
                    <h4>Validation</h4>
                    <p>Select all in validation</p>        
            </div>
            <div className="containerItem" >
                        <div className="containerCheckBox">
                            <input type="radio" name="radio" onChange={HandleChange}/>
                        </div>
                        <div className="card">
                            <div className="card-text">
                                <h4>Ecosystem</h4>
                                <p>view Builder</p>
                            </div>
                            <div className="card-img">
                                <img src={triangle} alt=""/>
                            </div>
                        </div>
                        <div>
                                {displayDateHour && <DateHour/>}
                                {!displayDateHour && null}
                        </div>
                    </div>
          

        
        </div>
          
      
    )
}

