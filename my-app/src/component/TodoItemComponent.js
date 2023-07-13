
function TodoItemComponent(props){
    const{id , text , status , onUpdatText } = props
    return(
        <div>
            <p>{text}</p>
            <button id={`${id}-edit`}>Edit</button>
            <button id={`${id}-Done`}>Done</button>
            <button id={`${id}-Delete`}>Delete</button>
        </div>
    )
}
export default TodoItemComponent;