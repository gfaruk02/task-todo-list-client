import toast, { Toaster } from 'react-hot-toast';
import useAxios from "../../Hooks/useAxios";
import Swal from 'sweetalert2';

const CreateTask = () => {
    const axiosPublic = useAxios()
    const handleTaskCreate = e => {
        e.preventDefault();
        const form = e.target
        const title = form.title.value;
        const description = form.description.value;
        const deadlines = form.deadlines.value;
        const role = "active"
        const task = { title, description, deadlines, role }
        // console.log(task);
        axiosPublic.post('/taskList', task)
            .then(res => {
                // console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    window.location.reload();
                }
                form.reset();
            })
            .catch(err => {
                toast.error(err)
            });
    }
    return (
        <div className="px-2 py-5 border-b-2 border-gray-300 w-full lg:w-10/12 mx-auto">
            <h1 className="text-3xl font-semibold"> Create Task List</h1>
            <form onSubmit={handleTaskCreate} className="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center mx-auto">
                <div className="form-control">
                    <label className=" label">
                        <span className="label-text text-xl font-semibold text-gray-950 ">Task Title</span>
                    </label>
                    <input type="text" name="title" placeholder="Task Title " className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className=" label">
                        <span className="label-text text-xl font-semibold text-gray-950">Task Description</span>
                    </label>
                    <textarea name="description" className="textarea textarea-bordered h-10" placeholder=" Write Tesk Description" required></textarea>
                </div>
                <div className="form-control">
                    <label className="text-sm">Deadlines</label> <br />
                    <input name="deadlines" type="date" placeholder="deadlines" className="w-full py-2 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                </div>
                <div className="">
                    <button className="btn btn-primary bg-gray-400 border-none text-gray-950 font-bold hover:bg-orange-400"> Add Task</button>
                </div>
            </form>
            <Toaster />
        </div>
    );
};

export default CreateTask;