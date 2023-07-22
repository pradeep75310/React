import { useState } from "react";

const arr = []

export function useHokksWeb() {
    const [list, updateList] = useState(arr)

    function addList(text) {
        const todo = {
            id: '' + Date.now(),
            status: 'active',
            text
        }
        const cloneList = [todo, ...list]
        updateList(cloneList)

    }
    function updateText(id, updateText) {
        const index = list.findIndex((item) => item.id === id)
        const cloneList = [...list]
        cloneList[index] = { ...cloneList[index], text: updateText }
        updateList(cloneList)
    }

    function markDone(event) {
        const id = event.target.id.split('-')[0]
        const index = list.findIndex((item) => item.id === id)
        const cloneList = [...list]
        cloneList[index] = { ...cloneList[index], status: 'done' }
        updateList(cloneList)
    }
    function deleteList(id) {
        const index = list.filter((item) => item.id != id)
        updateList(index)
    }
    return (
        {
            list,
            addList,
            markDone,
            updateText,
            deleteList
        }
    )
}