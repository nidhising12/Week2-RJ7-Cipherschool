import React, {useEffect, useState} from "react";
// import {tasks} from ".../testApi";

const TaskScreen = () => {
    // const [allTasks, setTasks] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("TaskScreen Mounted");
        getAllTasks().then((foundTasks => setAllTasks(foundTasks)))
    }, []);

    useEffect(() => {
        console.log("TaskScreen Updated");
        setCount(5)
    }, []);
    

    return allTasks.map((task, index) => (
        <div key={index} onClick={(e) => setCount(count + 1)}>
            <h1 onC>
                {task.taskNumber} {task.taskName}
            </h1>
            <p>{task.taskDescription}</p>
        </div>
        
    ));
}

export default TaskScreen;