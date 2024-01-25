import Completed from "../Components/Home/Completed";
import CreateTask from "../Components/Home/CreateTask";
import ViewTask from "../Components/Home/ViewTask";


const Home = () => {

    return (
        <div className=" lg:w-11/12 mx-auto bg-gray-100">
            <div className=" text-center bg-gray-200">
                <h1 className="text-5xl font-bold py-5"> TasK Todo List</h1>
            </div>
            <CreateTask></CreateTask>

            <div role="tablist" className="px-2 tabs tabs-lifted w-full lg:w-10/12 mx-auto mt-5">
                <input type="radio" name="my_tabs_2" role="tab" className="tab ml-20 lg:ml-36 text-sm lg:text-xl font-semibold text-gray-900" aria-label="View All Tesks" checked/>
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box lg:p-6">

                <ViewTask></ViewTask>
                </div>
                <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl font-semibold text-gray-900 px-2" aria-label="Complete Task" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box lg:p-6">

                <div className="overflow-x-auto">
                       <Completed></Completed>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;