import TodoItem from "./TodoItem"

function TodoList(props){
    const {list}=props
    return(
        <div>
            <ul>
                {
         list.map((arrayList) =>{
            return<TodoItem text={arrayList}/>
         }
         )
                }
         </ul>
        </div>
    )
}
export default TodoList