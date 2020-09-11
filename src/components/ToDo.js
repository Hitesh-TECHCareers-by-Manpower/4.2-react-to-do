import React, { useState } from 'react';

function ToDo ()
{
  //  const [num1, num2] = [1,2];
   // console.log( num1 );
    //console.log( num2 );

    const [newTask, setNewTask] = useState( 'default' );



    return (
        <>
            <form>
                <label htmlFor="task">New Task:</label>
                <input type="text" id="task" onChange={e => { setNewTask( e.target.value ) } } value={newTask} />
                <p>
                    <strong>Current Task Value:</strong>
                    <em>{newTask}</em>
                </p>
                <input type="submit" value="Add To-Do" />
            </form>
            <ul></ul>
        </>
    );

}

export default ToDo;