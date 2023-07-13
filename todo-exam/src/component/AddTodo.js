import { useEffect, useRef } from 'react'

function AddTodo(props) {
    const { onAdd } = props
    const inputeRef = useRef()
    const buttonRef = useRef()

    useEffect(() => {
        buttonRef.current.disabled = true
    }, [])

    function disableButton(event) {
        const newVal = event.target.value
        if (newVal.trim().length > 0) {
            buttonRef.current.disabled = false
        } else {
            buttonRef.current.disabled = true
        }
    }



    function handleTodo() {
        const newText = inputeRef.current.value
        onAdd(newText)
        inputeRef.current.value = ''
        buttonRef.current.disabled = true
    }

    return (
        <div>
            <div>
                <input type="text" ref={inputeRef} placeholder="type Some Word" onChange={disableButton} />
                <button onClick={handleTodo} ref={buttonRef}>Add</button>
            </div>
        </div>
    )
}
export default AddTodo;