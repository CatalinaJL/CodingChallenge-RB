import React, {useState} from 'react';
import { Radio } from '@material-ui/core';
import triangle from '../Assets/Triangle.jpg';
import {DateHour} from './DateHour';



export const ItemsList = () =>{
    const [displayDateHour, setDisplayDateHour]= useState(false);

    const HandleChange= () =>{
        console.log('estan seleccionando');
        setDisplayDateHour(true);
    } ; 
       
    return(
        <div className="itemsList">
            <div className="containerItem">
            <Radio name= "Problem" onChange={HandleChange}></Radio>
                <div className="card">
                    <div className="card-text">
                        <h2>Problem</h2>
                        <p>view Builder</p>
                    </div>
                    <div className="card-img">
                        <img src={triangle} alt=""/>
                    </div>
                    <div>
                        {displayDateHour && <DateHour/>}
                        {!displayDateHour && null}
                    </div>
                </div>
            </div>
          

        
        </div>
          
      
    )
}

