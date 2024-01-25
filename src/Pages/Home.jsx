import CreateTask from "../Components/Home/CreateTask";


const Home = () => {
    return (
        <div className=" w-11/12 mx-auto">
            <div className="bg-gray-300 text-center">
                <h1 className="text-5xl font-bold py-5"> TasK Todo List</h1>
            </div>
            <CreateTask></CreateTask>
        </div>
    );
};

export default Home;