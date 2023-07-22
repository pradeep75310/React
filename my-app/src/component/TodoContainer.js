import { useHokks } from "../hook_component/useHooks";
import TodoAddComponent from "./TodoAddComponent";
import TodoListComponent from "./TodoListComponent"


function TodoContainerF() {

    const { list, addTodo, updatTextTodo, markdone, deleteItem } = useHokks()
    return (
        <div>
            <TodoAddComponent onAdd={addTodo} />
            <TodoListComponent list={list}
                onUpdatText={updatTextTodo}
                onMarkdone={markdone}
                onDeleteItem={deleteItem}></TodoListComponent>
        </div>
    )
}
export default TodoContainerF;