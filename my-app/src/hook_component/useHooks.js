import { useState } from "react";

const arrayList = []

export function useHokks() {
    const [list, updateList] = useState(arrayList)

    

    function updatTextTodo(id, updateText) {
        const index = list.findIndex((item) => item.id === id)
        const cloneList = [...list]
        cloneList[index] = { ...cloneList[index], text: updateText }
        updateList(cloneList)
    }

    function markdone(event) {
        const id = event.target.id.split('-')[0]
        const index = list.findIndex((item) => item.id === id)
        const cloneList = [...list]
        cloneList[index] = { ...cloneList[index], status: 'done' }
        updateList(cloneList)
    }
    function addTodo(text) {
        const todos = {
            id: '' + Date.now(),
            text,
            status: 'active'
        }
        const cloneList = [todos, ...list]
        updateList(cloneList)
    }

    function deleteItem(id) {
        const cloneList = list.filter((item) => item.id !== id)
        updateList(cloneList)
    }
    return {
        list,
        addTodo,
        updatTextTodo,
        markdone,
        deleteItem
    }
}