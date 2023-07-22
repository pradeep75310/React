import { useHokksWeb } from "../hokks_Website/useHoksWeb"
import AddTodoWebsite from "./AddTodoWebsite"
import ListTodoWebsite from "./ListTodoWebsite"

function MainCintainerWeb() {
    const { list, addList, markDone, updateText, deleteList } = useHokksWeb()
    return (
        <div>
            <AddTodoWebsite onAdd={addList} />
            <ListTodoWebsite list={list}
                onMarkdon={markDone}
                onUpdateText={updateText}
                onDelete={deleteList} />
        </div>
    )
}

export default MainCintainerWeb