import { useHooks } from "../hook/useHokks";
import TodoAddComponent from "./TodoAddComponent";
import TodoListComponent from "./TodoListComponent";

function TodoContainer() {
    const { additem, list, markDone, deleteItem, updateText } = useHooks()


    return (
        <div>
            <TodoAddComponent onAdd={additem} />
            <TodoListComponent list={list} onMarkDone={markDone} onDelete={deleteItem} onUpdateText={updateText} />
        </div>
    )
}
export default TodoContainer;