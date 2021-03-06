import React, {useState} from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import {DateHour} from './DateHour';
import './Components.css'




export const ItemsList = () =>{
    const [appState, setChange] =useState({
        activeObject:null,
        data:['Problem', 'Solution', 'Team', 'Ecosystem']
    })
    const [displayDateHour, setDisplayDateHour]= useState(false);
    const [items, setItems] = useState(appState.data);
        
    const handleOnDragEnd = (result) =>{
        const list = items;
        const [reorderdList] = list.splice(result.source.index, 1);
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
                        <div className="headerBox">
                            <h4>Ideation</h4>
                            <span className="AllSelector">Select all in ideation</span>
                            <p>Due Date (optional)</p>
                        </div>
                        {appState.data.map((data, index)=>{
                            return(
                            <Draggable key={index} draggableId={data} index={index}>
                                {(provided) =>(
                                    <div className="containerItem" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                        <form name="topic" className="containerCheckBox">
                                            <input type="checkbox" name="radio" onChange={()=>{toggleActive(index)}} value={data}/>
                                        </form>
                                        <div className={toggleActiveStyles(index)}>
                                            <div className="card-text">
                                                <h4>{data}</h4>
                                                <p>view Builder</p>
                                            </div>
                                            <div className="card-img">
                                                <div className="BigTriangle"></div>
                                                <div className="SmallTriangle inactive"></div>
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

