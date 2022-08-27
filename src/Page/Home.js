import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADDPOST, REMOVEPOST } from "../Redux/todo_post/todo_action";

const Home = () => {
  const state = useSelector((state) => state.Todo.list);
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handleChange = (e) => {
    const data = e.target.value;
    setText(data);
  };


  console.log(state)
  return (
    <>
      <div className="top-c">
        <h1>Todo List</h1>
        <div className="input">
          <input value={text} onChange={handleChange} type="text"/>
          <button onClick={() => dispatch(ADDPOST(text))}>submit</button>
        </div>
      </div>
      <div>
        {state.map((x) => {
          return (
            <>
              <div className="mapstate" key={x.id}>
                <ul>
                  <li>{x.text}</li>
                </ul>
                <button onClick={() => dispatch(REMOVEPOST(x.id))}>delete</button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Home;
