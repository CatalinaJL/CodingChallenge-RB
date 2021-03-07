import React, {useState} from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import triangle from '../Assets/Triangle.jpg';
import {DateHour} from './DateHour';


const dataCard=['Problem', 'Solution', 'Team']

export const ItemsList = () =>{
    const [displayDateHour, setDisplayDateHour]= useState(false);

    const HandleChange= (e) =>{
        const buttonValue= e.target.value;
        console.log(buttonValue);
        setDisplayDateHour(true)
        
        // if(buttonValue === dataCard[0]){
        //     return  setDisplayDateHour(true);
        // } if (buttonValue === dataCard[1]){
        //     return setDisplayDateHour(true)
        // } if(buttonValue === dataCard[2]){
        //     return setDisplayDateHour(true)
        // }else{
        //     return displayDateHour
        // }
        
    } ; 

    return(
        <DragDropContext>
            <Droppable droppableId="items">
                {(provided) =>(
                     <div className="itemsList"{...provided.droppableProps} ref={provided.innerRef}>
                        <div className="headerBox">
                            <h4>Ideation</h4>
                            <span>Select all in ideation</span>
                            <p>Due Date (optional)</p>
                        </div>
                        {dataCard.map((data, index)=>{
                            return(
                            <Draggable key={index} draggableId={data} index={index}>
                                {(provided) =>(
                                        <div className="containerItem" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
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
                                        {provided.placeholder}
                                    </div>
                              )}
                         
                         </Draggable>
                         )
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
                         {provided.placeholder}
             </div>
                )}
                           
        </Droppable>
    </DragDropContext>
      
    )
}

