import TodoItem from "./TodoItem";

function TodoList(props) {
    const { list, onUpdateText, onDelete, onMarkDone } = props
 if(list==null){
    return null
 }
    return (
        <ul>{

            list.map((item) => {
                return <div>
                    <TodoItem id={item.id}
                        text={item.text}
                        status={item.status}
                        onUpdateText={onUpdateText}
                        onDelete={onDelete}
                        onMarkDone={onMarkDone}
                        key={item.id} />
                </div>
            })
        }
        </ul>
    )
}
export default TodoList;