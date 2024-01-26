import useAxios from "../../Hooks/useAxios";
import useTasks from "../../Hooks/useTasks";
import { useEffect, useMemo, useState } from "react";
import Swal from "sweetalert2";

const Completed = () => {

    const taskdata = useTasks()
    const axios = useAxios()
    const [tasks, setTasks] = useState()
    // const filterTasks = taskdata?.filter(task=> task.role === "Completed")
    const filterTasks = useMemo(() => {
        return taskdata?.filter(task => task.role === "Completed");
    }, [taskdata]);
    useEffect(()=>{
        setTasks(filterTasks)
    },[filterTasks])
    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/taskList/${_id}`)
              .then(res=>{
               if(res.data.deletedCount > 0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                  setTasks((tasks) => tasks.filter((task) => task._id !== _id));
                        
               }
              })
            }
          });
    }

    return (
        <table className="table">
           
        <thead>
            <tr className="text-lg text-gray-700">
                <th>Sl</th>
                <th>Title</th>
                <th>Description</th>
                <th>Action Status</th>
            </tr>
        </thead>
        <tbody>
            {tasks?.map((task, index)=>
            <tr key={task._id} className="hover">
                <th> {index+1} </th>
                <td>{task.title} </td>
                <td>{task.description}</td>
                <td className="flex flex-row gap-2">
                <button onClick={() => handleDelete(task._id)} className="max-h-10 px-3 py-2 font-semibold bg-red-400 rounded-lg hover:bg-red-700 hover:text-white"> Delete</button>
                </td>
            </tr>
            )}
            
        </tbody>
    </table>
    );
};

export default Completed;