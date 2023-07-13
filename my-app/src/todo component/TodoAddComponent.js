import { useEffect, useRef } from "react"



function TodoAddComponent(props) {
  const { onAdd } = props
  const inputref = useRef()
  const addButtonRef = useRef()

  useEffect(() => {
    addButtonRef.current.disabled = true
  }, [])

  function addHandle() {
    const text = inputref.current.value
    onAdd(text)
    inputref.current.value = ''
    addButtonRef.current.disabled = true

  }

  function buttonDisabled(event) {
    const value = event.target.value;
    if (value.trim().length > 0) {
      addButtonRef.current.disabled = false
    } else {
      addButtonRef.current.disabled = true
    }

  }

  return (
    <div>
      <input type='text' ref={inputref} onChange={buttonDisabled} />
      <button onClick={addHandle} ref={addButtonRef}>Add</button>
    </div>
  )
}
export default TodoAddComponent