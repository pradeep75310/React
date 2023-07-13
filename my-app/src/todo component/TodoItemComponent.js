import { useRef, useState } from "react";

function TodoItemComponent(props) {
   const { text,
      id,
      status,
      onMarkDone,
      onDelete,
      onUpdateText
   } = props
   const [isEditing, setEditing] = useState(false)
   const inputeRef = useRef()

   function renderAction() {
      if (status === 'active') {
         return (
            <>

               <button id={`${id}-edit`} onClick={handleEdit}>{isEditing ? 'Edit Done' : 'Edit'}</button>
               <button id={`${id}-done`} onClick={onMarkDone}>Done</button>

            </>
         )
      } else {
         return null
      }
   }

   function handleEdit() {
      if (isEditing) {
         const updateText = inputeRef.current.value
         onUpdateText(id, updateText)
      }
      setEditing(!isEditing)
   }

   function handleDelete(event) {
      const id = event.target.id.split('-')[0]
      onDelete(id)
   }
   return (
      <div>
         <li>
            {isEditing ? <input defaultValue={text} ref={inputeRef} /> : <p>{text}</p>}
            <div>{renderAction()}</div>
            <button id={`${id}-delete`} onClick={handleDelete} >Delete</button>
         </li>
      </div>
   )
}
export default TodoItemComponent;