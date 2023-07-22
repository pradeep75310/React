import ItemTodoWebsite from "./ItemTodoWebsite"

function ListTodoWebsite(props) {
    const { list, onMarkdon, onUpdateText, onDelete } = props

    return (
        <ul>
            {list.map((item) => {
                return <ItemTodoWebsite
                    id={item.id}
                    text={item.text}
                    status={item.status}
                    onMarkdon={onMarkdon}
                    onUpdateText={onUpdateText}
                    onDelete={onDelete}
                    key={item.id}
                ></ItemTodoWebsite>
            })}
        </ul>
    )
}
export default ListTodoWebsite