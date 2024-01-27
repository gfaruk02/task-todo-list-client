import { useEffect, useState } from "react";

const useTasks = () => {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        fetch('https://task-todo-list-server.vercel.app/taskList')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])
    return tasks;
};

export default useTasks;