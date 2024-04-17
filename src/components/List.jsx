import { useContext } from "react"
import { Context } from "../App"
import Item from "./Item";
import { Reorder } from "framer-motion";


function List() {
    const {todos, deleteTodo, setTodos} = useContext(Context);

    return (
        <ul className="flex flex-col bg-slate-100 w-1/2 justify-center m-auto">
            <Reorder.Group values={todos} onReorder={setTodos}>

            {todos.map((todo, index) => ( 
                <Reorder.Item value={todo} key={todo}>
                <Item key={index} onDelete={()=> deleteTodo(index)}  index={index}>{todo}</Item>
                </Reorder.Item>
            ))}
            </Reorder.Group>
        </ul>
    )
}

export default List
