import React, { useState } from 'react';
import InputBox from './InputBox';
import ToDoGrid from './ToDoGrid';
import ToggleMessage from './ToggleMessage';


const ToDoList = () => {

    const initialState = {
        "2020-08-20": [{description: "Play Soccer", isCompleted: false}, 
        {description: "Eat dinner", isCompleted: true}], 
        "2020-08-10": [{description: "Covid Testing", isCompleted: false}]
    }

    const [ listState, setListState ] = useState(initialState);

    const onAddTask = (date, toDo) => {
        const newTask = {
            description: toDo,
            isCompleted: false
        }

        const stateCopy = {...listState};

        if (stateCopy[date]) {
            if (!stateCopy[date].some((task) => task.description === toDo)) {
                stateCopy[date].push(newTask);
            } else {
                console.log("This task exists.")
            }
        } else {
            stateCopy[date] = [toDo];
        };

        setListState(stateCopy);
    };

    const completeTask = (date, toDo) => {
        const newState = {...listState};

        newState[date].map((task) => {
            if (task.description === toDo) {
                task.isCompleted = !task.isCompleted;
            };
            return task;
        });

        setListState(newState);
    };


    return (
        <div>
            <InputBox onAddTask={onAddTask} />
            {Object.keys(listState).length === 0 ? <ToggleMessage message="Your calendar is empty!" isOn={true} /> :  
            <ToDoGrid listState={listState} completeTask={completeTask} />}
        </div>
    );
}

export default ToDoList;