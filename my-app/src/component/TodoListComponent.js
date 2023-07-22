import TodoItemComponent from "./TodoItemComponent"


function TodoListComponent(props) {
    const { list, onUpdatText, onMarkdone, onDeleteItem } = props
    function render(item) {
        return (
            <div>
                <TodoItemComponent id={item.id}
                    text={item.text}
                    status={item.status}
                    onUpdatText={onUpdatText}
                    onMarkdone={onMarkdone}
                    onDeleteItem={onDeleteItem}
                    key={item.id}></TodoItemComponent>
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

export default TodoListComponent;