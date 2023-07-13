import { useState } from 'react';

const todoListArray = []

export function useHooks() {
    const [list, updateList] = useState(todoListArray)

    function markDone(event) {
        const id = event.target.id.split('-')[0]
        const index = list.findIndex((item) => item.id === id)
        const cloneList = [...list]
        cloneList[index] = { ...cloneList[index], status: 'done' }
        updateList(cloneList)
    }
    
    function updateText(id, updateText) {
        const index = list.findIndex((item) => item.id === id)
        const cloneList = [...list]
        cloneList[index] = { ...cloneList[index], text: updateText }
        updateList(cloneList)
    }

    function additem(text) {
        const todo = {
            id: '' + Date.now(),
            text,
            status: 'active'
        }
        const cloneList = [todo, ...list]
        updateList(cloneList)
    }

    function deleteItem(id) {
        const cloneList = list.filter((item) => item.id !== id)
        updateList(cloneList)
    }

    return {
        list,
        markDone,
        updateText,
        additem,
        deleteItem

    }


}