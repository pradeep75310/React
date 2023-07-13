import { hooks, useTodoHooks } from "../hooks/hooks";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function TodoContainer() {
    const { list,
        addItem,
        updateText,
        markDone,
        deleteItem } = useTodoHooks()


    return (
        <div>
            <AddTodo onAdd={addItem} />
            <TodoList list={list}
                onUpdateText={updateText}
                onMarkDone={markDone}
                onDelete={deleteItem} />
        </div>
    )
}
export default TodoContainer;