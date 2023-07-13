import { useRef, useState } from "react"

function TodoItem(props) {
    const { id, text, status, onUpdateText, onMarkDone, onDelete } = props
    const [isEditing, setEditing] = useState(false)
    const inputRef = useRef()
    function render() {
        if (status === 'active') {
            return (
                <>
                    <button id={`${id}-edit`} onClick={editingButton}>{isEditing ? 'Edit Done' : 'Edit'}</button>
                    <button id={`${id}-done`} onClick={onMarkDone}>Done</button>
                </>
            )
        } else {
            return null
        }
    }

    function editingButton() {
        if (isEditing) {
            const updateText = inputRef.current.value
            onUpdateText(id, updateText)
        }
        setEditing(!isEditing)
    }

    function deleteButton(event) {
        const id = event.target.id.split('-')[0]
        onDelete(id)

    }

    return (
        <div>
            <li>
                {isEditing ? <input defaultValue={text} ref={inputRef} /> : <p>{text}</p>}
            </li>
            {render()}
            <button id={`${id}-delete`} onClick={deleteButton}>Delete</button>
        </div>
    )
}

export default TodoItem