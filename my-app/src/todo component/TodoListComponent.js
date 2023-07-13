import TodoItemComponent from "./TodoItemComponent"

function TodoListComponent(props) {
    const { list, onMarkDone, onDelete, onUpdateText } = props

    function render(item) {
        return (
            <div>
                <TodoItemComponent
                    id={item.id}
                    text={item.text}
                    status={item.status}
                    onMarkDone={onMarkDone}
                    onDelete={onDelete}
                    onUpdateText={onUpdateText}
                    key={item.id} />
            </div>
        )
    }

    return (
        <div>
            <ul>
                {list.map(render)}
            </ul>
        </div>
    )
}
export default TodoListComponent