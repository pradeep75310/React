import { useEffect, useRef } from "react"


function TodoAddComponent(props) {
    const { onAdd } = props
    const inputRef = useRef()
    const buttonRef = useRef()

    useEffect(() => {
        buttonRef.current.disabled = true
    }, [])

    function addHandle() {
        const text = inputRef.current.value;
        onAdd(text)
        inputRef.current.value = " "
        buttonRef.current.disabled = true

    }

    function buttonDisabled(event) {
        const inputBtn = event.target.value;
        if (inputBtn.trim().length > 0) {
            buttonRef.current.disabled = false
        } else {
            buttonRef.current.disabled = true
        }
    }
    return (
        <div>
            <input type="text" ref={inputRef} onChange={buttonDisabled} />
            <button onClick={addHandle} ref={buttonRef}> Add </button>
        </div>
    )

}
export default TodoAddComponent