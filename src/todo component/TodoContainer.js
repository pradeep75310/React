import { useTodoHooks } from "../hook/useHokks"
import AddTodo from "./TodoAddComponent";
import TodoListComponent from "./TodoListComponent";

function TodoContainer() {

    const { list, addItem, markDone, updateText, deleteItem } = useTodoHooks()

    return (
        <div>
            <AddTodo onAdd={addItem} />
            <TodoListComponent
                list={list}
                onMarkDone={markDone}
                onUpdateText={updateText}
                onDeleteItem={deleteItem} />
        </div>
    )
}

export default TodoContainer;
