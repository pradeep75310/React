
import { useRef, useState } from "react"

function TodoItemComponent(props) {
    const { id, text, status, onMarkDone, onDeleteItem, onUpdateText } = props
    const [isEditing, setEditing] = useState()
    const inputRef = useRef()

    function renderList() {
        if (status == 'active') {
            return (
                <>
                    <button id={`${id}-edit`} onClick={handleEdit}>{isEditing ? 'Edit Done' : 'Edit'}</button>
                    <button id={ `${id}-done` } onClick={onMarkDone}>Done</button> 
                </>
            )
        } else {
            return null
        }
    }

    function handleEdit() {
        if (isEditing) {
            const updateText = inputRef.current.value
            onUpdateText(id, updateText)
        }
        setEditing(!isEditing)
    }

    function handledelete(event) {
        const id = event.target.id.split('-')[0]
        onDeleteItem(id)
    }

    return (
        <div>
            <li>
                {isEditing ? <input defaultValue={text} ref={inputRef} /> : <p>{text}</p>}
                <div>
                    {renderList()}
                    <button id={`${id}-delete`} onClick={handledelete}>Delete</button>
                </div>
            </li>
        </div>
    )
}
export default TodoItemComponent;
