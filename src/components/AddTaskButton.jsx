

const AddTaskButton=({onClick})=>{

    return (
        <>
            <button onClick={onClick} className="border px-4 py-2 rounded-md hover:bg-gray-100 flex items-center gap-2" >
                <span>+</span> Add Task
            </button>
           

        </>
    )
}

export default AddTaskButton