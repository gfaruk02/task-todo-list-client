import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import useTasks from "../../Hooks/useTasks";
import Swal from "sweetalert2";


const ViewTask = () => {
    const taskdata = useTasks()
    const axios = useAxios()
    const [tasks, setTasks] = useState()
    useEffect(()=>{
        setTasks(taskdata)
    },[taskdata])
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
                  const remaining = tasks.filter(food => food._id !== _id);
                  setTasks(remaining);
               }
              })
            }
          });
    }

    return (

        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr className="text-sm lg:text-lg text-gray-700">
                        <th>Sl</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Action Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks?.map((task, index)=> <tr key={task._id} className="hover">
                        <th>{index}</th>
                        <td>{task.title} </td>
                        <td>{task.description}</td>
                        <td className="flex flex-row gap-2">
                            <button className=" px-3 py-2 font-semibold bg-green-400 rounded-lg hover:bg-green-800 hover:text-white"> Edit </button>
                            <button onClick={() => handleDelete(task._id)} className=" px-3 py-2 font-semibold bg-red-400 rounded-lg hover:bg-red-700 hover:text-white"> Delete</button>
                            <button className=" px-3 py-2 font-semibold bg-slate-400 rounded-lg hover:bg-slate-800 hover:text-white"> Completed </button>
                        </td>
                    </tr>)}
                    
                    
                </tbody>
            </table>
        </div>

    );
};

export default ViewTask;