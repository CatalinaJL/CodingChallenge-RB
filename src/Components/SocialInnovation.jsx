import React, {useState} from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import triangle from '../Assets/Triangle.jpg';
import {DateHour} from './DateHour';
import './Components.css';

export const SocialInnovation = () =>{
    const [appState, setChange] =useState({
        activeObject:null,
        data:['Problem', 'Solution', 'Ecosystem', 'Team', 'Results']
    })
    const [displayDateHour, setDisplayDateHour]= useState(false);
    const [items, setItems] = useState(appState.data);
    console.log(items)
        
    const handleOnDragEnd = (result) =>{
        console.log(result);
        const list = items;
        const [reorderdList] = list.splice(result.source.index, 1);
        console.log(reorderdList)
        list.splice(result.destination.index, 0, reorderdList);
        setItems(list)
    };

    const toggleActive =(index) =>{
        setChange({...appState, activeObject:appState.data[index]});
        setDisplayDateHour(true)
    };

    const toggleActiveStyles=(index) =>{
        if(appState.data[index] === appState.activeObject){
            return "card active";
        }else{
            return "card inactive"
        }
    };


    return(
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="items">
                {(provided) =>(
                     <div className="itemsList"{...provided.droppableProps} ref={provided.innerRef}>
                        <div className="headerBox-Social">
                            <h4>Social Innovation</h4>
                            <p>Due Date (optional)</p>
                        </div>
                        {appState.data.map((data, index)=>{
                            return(
                            <Draggable key={index} draggableId={data} index={index}>
                                {(provided) =>(
                                    <div className="containerItem" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                        <div className="containerCheckBox">
                                            <input type="radio" name="radio" onChange={()=>{toggleActive(index)}} value={data}/>
                                        </div>
                                        <div className={toggleActiveStyles(index)}>
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
                                    </div>
                              )}

                         </Draggable>
                         )
                     })}
                {provided.placeholder}
             </div>
                )}            
        </Droppable>
    </DragDropContext>
      
    )

}