import { useContext, useState } from "react"
import Button from "../ui/Button"
import { Context } from "../App";

function Item({children, onDelete, index}) {
    const {editTodo} = useContext(Context);

    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(children);

function handleEdit() {
    setIsEditing(true);
}

function handleSubmit(e) {
    e.preventDefault();
    editTodo(editValue, index);
    setIsEditing(false);
}

function cancelEdit() {
    setIsEditing(false)
}



    return (
        <li className="w-full flex py-2 px-4 justify-between bg-slate-300 mb-2 rounded font-bold" >
            { isEditing ? (
                <form onSubmit={handleSubmit} className=" w-full flex  justify-between bg-slate-300  rounded">
                    <input className="w-60 bg-slate-200 px-3 rounded" type="text" value={editValue} onChange={(e) => setEditValue(e.target.value)} />
                    <div>

                    <button type='submit' className="bg-green-500 p-1 rounded text-green-100 border-green-700 font-bold px-2 mr-2" >Apply</button>
                    <button onClick={cancelEdit} className="bg-red-500 p-1 rounded text-red-100 border-red-700 font-bold px-2 mr-2">Cancel</button>
                    </div>
                </form>
            ) : (  
                <>
            <p className="w-60">{children}</p> 
            <div>

            <Button onClick={onDelete}>✔ Done</Button>
            <Button onClick={handleEdit}>Edit</Button>
            </div>
                </>
            )
}
        </li>
        
    )
}

export default Item
