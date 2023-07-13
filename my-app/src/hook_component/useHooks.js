import { useState } from "react";

const arrayList = []

export function useHokks(){
    const [list , updateList] = useState(arrayList)

    function updatTextTodo(id, updateText){
        const index = list.findIndex((item)=>item.id ===id)
        const cloneList = [...list]
        cloneList[index] = {...cloneList[index] , text: updateText}
        updateList(cloneList)   
    }
function addTodo(text){
    const todos={
        id: ''+Date.now(),
        text,
        status:'active'}
        const cloneList = [todos, ...list]
        updateList(cloneList)
      
        
    
}
    return{
        list ,
        addTodo,
        updatTextTodo
    }
}