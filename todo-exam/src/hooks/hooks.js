import { useEffect, useState } from "react";



export function useTodoHooks() {
    const [list, updateList] = useState(null)

    useEffect(() => {
        const storeList = window.localStorage.getItem('todoList')
        if (storeList) {
            updateList(JSON.parse(storeList))
        }
    }, [])
    useEffect(() => {
        if (list != null) {
            window.localStorage.setItem('todoList', JSON.stringify(list))
        }
    }, [list])

    function addItem(text) {
        const todo = {
            id: '' + Date.now(),
            text,
            status: 'active'
        }
        const todoList = list == null ? [] : list
        const cloneList = [todo, ...todoList]
        updateList(cloneList)
    }


    function updateText(id, updateText) {
        const index = list.findIndex((item) => item.id === id)
        console.log('index', id)
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

    function deleteItem(id) {
        const cloneList = list.filter((item) => item.id != id)
        console.log('clone list', cloneList)
        updateList(cloneList)
    }

    return (
        {
            list,
            addItem,
            updateText,
            markDone,
            deleteItem

        }
    )
}