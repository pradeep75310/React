
import { useEffect, useRef } from "react";

function AddTodo(props) {
    const { onAdd } = props
    const inputRef = useRef()
    const buttonRef = useRef()

    useEffect(() => {
        buttonRef.current.disabled = true
    }, [])

    function handleAdd() {
        const newInput = inputRef.current.value;
        onAdd(newInput)
        inputRef.current.value = ''
        buttonRef.current.disabled = true
    }

    function buttonDsiable(event) {
        const value = event.target.value

        if (value.trim().length > 0) {
            buttonRef.current.disabled = false
        } else {
            buttonRef.current.disabled = true
        }

    }

    return (
        <div>
            <input type="text" ref={inputRef} onChange={buttonDsiable} />
            <button onClick={handleAdd} ref={buttonRef}>Add</button>
        </div>
    )
}
export default AddTodo;
