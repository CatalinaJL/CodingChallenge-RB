import React, {useState} from 'react';
import { Radio } from '@material-ui/core';
import triangle from '../Assets/Triangle.jpg';


const DateHour = () =>{
    const [showDateHour, setShowDateHour] = useState(false)
    return(
       <div>
           <input type="date" name="" id=""/>
           <input type="time" name="" id=""/>
       </div>
    )
};

const HandleChange= () =>{
    console.log('estan seleccionando')
} ;


export const ItemsList = () =>{
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
                        <DateHour/>
                    </div>
                </div>
            </div>
          

        
        </div>
          
      
    )
}

