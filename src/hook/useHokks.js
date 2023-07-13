import { useEffect, useState } from 'react'



export function useTodoHooks() {
    const [list, updateList] = useState(null)

    useEffect(() => {
        const setLocalStorage = window.localStorage.getItem('todoItem')
        if (setLocalStorage) {
            updateList(JSON.parse(setLocalStorage))
        }
    }, [])

    useEffect(() => {
        if (list != null) {
            window.localStorage.setItem('todoItem', JSON.stringify(list))
        }
    }, [list])

    function markDone(event) {
        const id = event.target.id.split('-')[0]
        const index = list.findIndex((item) => item.id === id)
        const cloneList = [...list]
        cloneList[index] = { ...cloneList[index], status: 'done' }
        updateList(cloneList)
    }

    function updateText(id, updateText) {
        const index = list.findIndex((item) => item.id === id)
        const clonelist = [...list]
        clonelist[index] = { ...clonelist[index], text: updateText }
        updateList(clonelist)
    }

    function addItem(text) {
        const todo = {
            id: '' + Date.now(),
            text,
            status: 'active'
        }
        const todoItemClone = list == null ? [] : list;
        const clonelIst = [todo, ...todoItemClone]
        updateList(clonelIst)
    }

    function deleteItem(id) {
        const clonelIst = list.filter((item) => item.id != id)
        updateList(clonelIst)
    }
    return {
        list,
        addItem,
        markDone,
        updateText,
        deleteItem

    }

}


