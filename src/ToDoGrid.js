import React from 'react';
import TaskItem from './TaskItem';

const ToDoGrid = ({ listState, completeTask }) => {
    

    const mapList = () => {
        const dates = Object.keys(listState);

        return dates.map((date, index) => {
            return (<div key={index}>
                <h1>{date}</h1>
                <ul>
                    {mapTasks(listState[date], date )}
                </ul>
            </div>)
        });
    };

    const mapTasks = ( taskArray, date ) => {
        return taskArray.map((task, index) => 
            <TaskItem key={index} date={date} task={task.description} isCompleted={task.isCompleted} completeTask={completeTask} />
        )
    }

    return (
        <>
            {mapList()}
        </>
    );
}

export default ToDoGrid;
