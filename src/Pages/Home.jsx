import CreateTask from "../Components/Home/CreateTask";


const Home = () => {
    return (
        <div className=" w-11/12 mx-auto">
            <div className="bg-gray-300 text-center">
                <h1 className="text-5xl font-bold py-5"> TasK Todo List</h1>
            </div>
            <CreateTask></CreateTask>

            <div role="tablist" className="tabs tabs-lifted w-10/12 mx-auto mt-5">
                <input type="radio" name="my_tabs_2" role="tab" className="tab ml-20 md:ml-36 text-xl font-semibold text-gray-900" aria-label="View All Tesks" checked/>
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">

                    <div className="overflow-x-auto">
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
                                <tr className="hover">
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td className="flex flex-row gap-2">
                                        <button className=" px-3 py-2 font-semibold bg-green-400 rounded-lg hover:bg-green-800 hover:text-white"> Edit </button>
                                        <button className=" px-3 py-2 font-semibold bg-red-400 rounded-lg hover:bg-red-700 hover:text-white"> Delete</button>
                                        <button className=" px-3 py-2 font-semibold bg-slate-400 rounded-lg hover:bg-slate-800 hover:text-white"> Complete </button>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>

                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl font-semibold text-gray-900 px-5" aria-label="Complete Task" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">

                <div className="overflow-x-auto">
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
                                <tr className="hover">
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td className="flex flex-row gap-2">
                                        <button className=" px-3 py-2 font-semibold bg-green-400 rounded-lg hover:bg-green-800 hover:text-white"> Edit </button>
                                        <button className=" px-3 py-2 font-semibold bg-red-400 rounded-lg hover:bg-red-700 hover:text-white"> Delete</button>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;