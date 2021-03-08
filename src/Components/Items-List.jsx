import React, {useState} from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import triangle from '../Assets/Triangle.jpg';
import {DateHour} from './DateHour';


// const dataCard=['Problem', 'Solution', 'Team', 'Ecosystem'];

export const ItemsList = () =>{
    const [appState, setChange] =useState({
        activeObject:null,
        data:[
            {id:1, 
            title:'Problem'},
            {id:2, 
            title:'Solution'}, 
            {id:3, 
            title:'Team'},
            {id:4, 
            title:'Ecosystem'} ]
    })
    const [displayDateHour, setDisplayDateHour]= useState(false);
    const [items, setItems] = useState(appState.data);

    const handleOnDragEnd = (result) =>{
        console.log(result);
        const list = Array.from(items);
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
    }
  
    // const HandleChange= (index) =>{
    //     toggleActive(index)
    //     // const buttonValue= e.target.value;
    //     // console.log(buttonValue);
    //     // setDisplayDateHour(true)
    // } ; 

    return(
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="items">
                {(provided) =>(
                     <div className="itemsList"{...provided.droppableProps} ref={provided.innerRef}>
                        <div className="headerBox">
                            <h4>Ideation</h4>
                            <span>Select all in ideation</span>
                            <p>Due Date (optional)</p>
                        </div>
                        {appState.data.map((data, index)=>{
                            return(
                            <Draggable key={data.id} draggableId={data.title} index={index}>
                                {(provided) =>(
                                    <div className="containerItem" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                        <div className="containerCheckBox">
                                            <input type="radio" name="radio" onChange={()=>{toggleActive(index)}} value={data.title}/>
                                        </div>
                                        <div className={toggleActiveStyles(index)}>
                                            <div className="card-text">
                                                <h4>{data.title}</h4>
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

