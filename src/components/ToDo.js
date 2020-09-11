import React, { useState } from 'react';

function ToDo ()
{
  //  const [num1, num2] = [1,2];
   // console.log( num1 );
    //console.log( num2 );

    const [newTask, setNewTask] = useState( 'default' );

    const [toDos, setToDos] = useState( [ 
        { task: "Buy milk" },
        { task: "Learn Reacy" },
        { task: "Find out what Redux is" }
    ] );

    const addNewTask = event => {
        event.preventDefault();

        const newToDosList = [...toDos];
        newToDosList.push( { task: newTask } );

        setToDos( newToDosList );

        setNewTask( '' );

    }



    return (
        <>
            <form onSubmit={addNewTask}>
                <label htmlFor="task">New Task:</label>
                <input type="text" id="task" onChange={e => { setNewTask( e.target.value ) } } value={newTask} />
                <p>
                    <strong>Current Task Value: </strong>
                    <em>{newTask}</em>
                </p>
                <input type="submit" value="Add To-Do" />
            </form>
            <ul>{toDos.map( ( toDo, index ) => <li key={index}>{toDo.task}</li> )}</ul>
        </>
    );

}

export default ToDo;