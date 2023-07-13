
function TodoItem(props){
    const {text} = props
    return(
            <div>
            <p>{text}</p>
            <div>
            <button>Edit</button>
            <button>Done</button>
            <button>Delete</button>
            </div>
         </div>
    )
}
export default TodoItem