import { useEffect, useRef } from 'react'

function AddTodoWebsite(props) {
    const { onAdd } = props
    const inputeRef = useRef()
    const disableRef = useRef()

    useEffect(() => {
        disableRef.current.disabled = true
    }, [])


    function handleAdd() {
        const newText = inputeRef.current.value
        onAdd(newText)
        inputeRef.current.value = ''
        disableRef.current.disabled = true
    }
    function disabled(event) {
        const disableBtn = event.target.value
        if (disableBtn.trim().length > 0) {
            disableRef.current.disabled = false
        } else {
            disableRef.current.disabled = true
        }
    }
    return (
        <div>
            <input type="text" ref={inputeRef} onChange={disabled}></input>
            <button onClick={handleAdd} ref={disableRef}>Add</button>
        </div>
    )
}
export default AddTodoWebsite