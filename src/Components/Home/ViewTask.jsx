import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import useTasks from "../../Hooks/useTasks";
import Swal from "sweetalert2";


const ViewTask = () => {
    const taskdata = useTasks()
    const axios = useAxios()
    const [tasks, setTasks] = useState()
    useEffect(() => {
        setTasks(taskdata)
    }, [taskdata])
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
                    .then(res => {
                        if (res.data.deletedCount > 0) {
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

    const handleCompleted = (task) => {
        console.log(task);
        Swal.fire({
            title: "Are you sure?",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Completed!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.patch(`/taskList/${task._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Completed!",
                                icon: "success"
                            });
                            window.location.reload();
                        }
                    })

            }
        });
    }
    const handleEdit = (_id, e) => {
        e.preventDefault();
        const form = e.target
        const title = form.title.value;
        const description = form.description.value;
        const editTask = { title, description }
        console.log(editTask);
        axios.put(`/taskList/${_id}`, editTask)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setTasks((tasks) =>
                        tasks.map((task) => (task._id === _id ? { ...task, ...editTask } : task))
                    );
                }
            })
            .catch(err => console.log(err));
    }
    return (

        <div className="overflow-x-auto">
            <table className="table px-2">
                <thead>
                    <tr className="text-sm lg:text-lg text-gray-700">
                        <th>Sl</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Action Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks?.map((task, index) => <tr key={task._id} className="hover">
                        <td>{index + 1}</td>
                        <td>{task.title} </td>
                        <td>{task.description}</td>
                        <td className="grid grid-cols-1 lg:grid-cols-3 gap-1 items-center text-sm">
                            <label htmlFor={`my_modal_${index}`} className="m-0 py-2 px-2 text-center font-semibold bg-sky-500 rounded-lg hover:bg-sky-800 hover:text-white max-h-10">Edit</label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id={`my_modal_${index}`} className="modal-toggle" />
                            <div className="modal" role="dialog">
                                <div className="modal-box">
                                    <form onSubmit={(e) => handleEdit(task._id, e)} className="py-5 grid grid-cols-1 gap-5 items-center">
                                        <div className="form-control">
                                            <label className=" label">
                                                <span className="label-text md:text-xl font-semibold text-gray-950 ">Task Title</span>
                                            </label>
                                            <input type="text" name="title" placeholder="Task Title " className="input input-bordered" defaultValue={task.title} required />
                                        </div>
                                        <div className="form-control">
                                            <label className=" label">
                                                <span className="label-text md:text-xl font-semibold text-gray-950">Task Description</span>
                                            </label>
                                            <textarea name="description" className="textarea textarea-bordered h-10" placeholder=" Write Tesk Description" defaultValue={task.description} required></textarea>
                                        </div>
                                        <div className="md:mt-9">
                                            <button className="btn btn-primary bg-gray-400 border-none text-gray-950 font-bold hover:bg-orange-400"> Edit Task</button>
                                        </div>
                                    </form>
                                </div>
                                <label className="modal-backdrop" htmlFor={`my_modal_${index}`}>Close</label>
                            </div>
                            <button onClick={() => handleDelete(task._id)} className=" px-2 py-2 font-semibold bg-red-400 rounded-lg hover:bg-red-700 hover:text-white max-h-10"> Delete</button>
                            <td className="pl-0 m-0">
                                {task.role === 'Completed' ? <span className="bg-green-800 max-h-10 px-2 py-2 font-semibold rounded-lg text-gray-400 text-sm">Completed</span> : <button onClick={() => handleCompleted(task)} className="max-h-10 px-2 py-2 font-semibold bg-green-400 rounded-lg hover:bg-green-800 hover:text-white"> Complete </button>}
                            </td>

                        </td>
                    </tr>)}


                </tbody>
            </table>
            </div>
    );
};

export default ViewTask;