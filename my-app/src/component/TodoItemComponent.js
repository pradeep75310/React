import { useRef, useState } from "react"

function TodoItemComponent(props) {
    const { id, text, status, onUpdatText, onMarkdone, onDeleteItem } = props
    const [isEditing, setEditing] = useState()
    const inputeRef = useRef()


    function render() {
        if (status == 'active') {
            return (
                <>
                    <button id={`${id}-edit`} onClick={handleEdit}>{isEditing ? 'Edit Done' : 'Edit'}</button>
                    <button id={`${id}-Done`} onClick={onMarkdone} >Done</button>
                </>
            )
        }
        else {
            return null
        }
    }

    function handleEdit() {
        if (isEditing) {
            const updateText = inputeRef.current.value
            onUpdatText(id, updateText)
        }
        setEditing(!isEditing)
    }

    function handleDelete(event) {
        const id = event.target.id.split('-')[0]
        onDeleteItem(id)
    }
    return (
        <div>
            <li>
                {isEditing ? <input defaultValue={text} ref={inputeRef}></input> : <p>{text}</p>}
                <div>
                    <div>{render()}</div>
                </div>
                <button id={`${id}-Delete`} onClick={handleDelete}>Delete</button>
            </li>
        </div>
    )
}
export default TodoItemComponent;