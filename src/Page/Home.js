import { useState } from "react"
import { useSelector , useDispatch } from "react-redux"
import { ADDPOST, REMOVEPOST} from "../Redux/todo_post/todo_action" 





const Home=()=>{

    const state = useSelector(state=>state.Todo.list)
    const dispatch = useDispatch()

    const [text, setText]=useState("")

    const handleChange =(e)=>{
        const data = e.target.value
        setText(data)
    }

    return(
        <>
        <div>
            <h1>Todo List</h1>
            <div>
                <textarea onChange={handleChange}/>
                <button onClick={()=>dispatch(ADDPOST(text))}>submit</button>
            </div>
        </div>
        <div>
            <hr/>
            {state.map((x)=>{
                return(
                    <>
                    <ul>
                        <li>{x}</li>
                    </ul>
                    <button onClick={(id)=>dispatch(REMOVEPOST(id))}>delete</button>
                    </>
                )
            })}
        </div>
        </>
    )
}

export default Home