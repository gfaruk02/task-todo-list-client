

const CreateTask = () => {
    const handleTaskCreate=e=>{
        e.preventDefault();
        const form = e.target
        const title = form.title.value;
        const description = form.description.value;
        const role = "active"
        const info = {title, description, role}
        console.log(info);
    }
    return (
        <div className="mt-5 md:px-20">
            <h1 className="text-3xl font-semibold"> Create Task List</h1>
            <form onSubmit={handleTaskCreate} className="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 items-center mx-auto">
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
                <div className="md:mt-9">
                    <button className="btn btn-primary bg-gray-400 border-none text-gray-950 font-bold hover:bg-orange-400"> Add Task</button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;