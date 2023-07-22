import { useRef, useState } from "react"

function ItemTodoWebsite(props) {
    const { id, text, status, onMarkdon, onUpdateText, onDelete } = props
    const [isEditing, setEditing] = useState()
    const inputRef = useRef()

    function render() {
        if (status == 'active') {
            return <>
                <button id={`${id}-edit`} onClick={handleEdit}>{isEditing ? 'Edit done' : 'Edit'}</button>
                <button id={`${id}-done`} onClick={onMarkdon}>Done</button>
            </>
        }

    }
    function handleEdit() {
        if (isEditing) {
            const updateText = inputRef.current.value
            onUpdateText(id, updateText)
        }
        setEditing(!isEditing)
    }

    function handleDelete(event) {
        const item = event.target.id.split('-')[0]
        onDelete(item)
    }

    return (
        <li>
            {isEditing ? <input defaultValue={text} ref={inputRef}></input> : <p>{text}</p>}
            {render()}
            <button id={`${id}-delete`} onClick={handleDelete}>Delete</button>
        </li>
    )
}
export default ItemTodoWebsite