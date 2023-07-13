import TodoItemComponent from "./TodoItemComponent";

function TodoListComponent(props) {
    const { list, onMarkDone, onDeleteItem, onUpdateText, } = props

    if (list == null) {
        return null;
    }

    return (
        <ul>
            {
                list.map((item) => {
                    return <TodoItemComponent id={item.id}
                        text={item.text}
                        status={item.status}
                        onMarkDone={onMarkDone}
                        onDeleteItem={onDeleteItem}
                        onUpdateText={onUpdateText}
                        key={item.id}
                    />

                })
            }
        </ul>
    )
}
export default TodoListComponent;

