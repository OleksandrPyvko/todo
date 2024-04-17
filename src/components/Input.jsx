import { useContext, useState } from "react"
import { Context } from "../App";
import Button from "../ui/Button";

function Input() {
    const [inputValue, setInputValue] = useState('');
    const {addTodo} = useContext(Context)

    function handleChange(e) {
        setInputValue(e.target.value)
    }

    function handleSubmit (e) {
        e.preventDefault();
        addTodo(inputValue);   
        setInputValue('')
    }

    return (
        <form name='todos' className="flex gap-2 p-3 m-auto justify-center font-bold"  onSubmit={handleSubmit}>
        <input className="bg-slate-100 p-1 w-1/3" type="text" value={inputValue} onChange={handleChange}  placeholder="Enter your todo..."/>  
        <Button onClick={handleSubmit}>Add task</Button>
        </form>

    )
}

export default  Input
