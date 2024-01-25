

const CreateTask = () => {
    return (
        <div className="mt-5 md:px-20">
            <h1 className="text-3xl font-semibold"> Create Task List</h1>
            <form className="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center mx-auto">
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
                    <textarea name="description" className="textarea textarea-bordered h-10" placeholder=" Write Tesk Description"></textarea>
                </div>
                <div className="mt-8">
                    <button className="btn btn-primary"> Add Task</button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;