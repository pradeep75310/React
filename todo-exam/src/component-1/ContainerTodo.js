import AddTodo from "./AddTodo";
import TodoList from "./TodoList";


const arrItem = ['Todo Item One' ,
 'Todo Item Two' , 
 'Todo item three']


function ContainerTodo(){
    return (
        <div>
         <AddTodo/>
         <TodoList list={arrItem}/>
        </div>
    )
}
export default ContainerTodo;