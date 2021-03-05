import React from 'react';
import { Radio } from '@material-ui/core';
import triangle from '../Assets/Triangle.jpg';

export const ItemsList = () =>{
    return(
        <div className="itemsList">
            <div className="containerItem">
            <Radio name= "Problem" onChange={console.log('me estan selecionando')}></Radio>
                <div className="card">
                    <div className="card-text">
                        <h2>Problem</h2>
                        <p>view Builder</p>
                    </div>
                    <div className="card-img">
                        <img src={triangle} alt=""/>
                    </div>
                </div>
                <div className="date-hour">
                    

                </div>
            </div>
          

        
        </div>
          
      
    )
}

