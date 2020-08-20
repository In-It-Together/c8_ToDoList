import React from 'react';

const TaskItem = ({ date, task, isCompleted, completeTask }) => {


    return (
        <li>
            {task}
            {isCompleted ? 
            <button onClick={() => completeTask(date, task)}>o</button> : 
            <button onClick={() => completeTask(date, task)}>x</button>
            }
        </li>
    );
}

export default TaskItem;
