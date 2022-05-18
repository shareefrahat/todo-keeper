import { useState } from "react";

const useTodos = () => {
  const [todos, setTodos] = useState([]);

  //   useEffect(()=>{

  //   },[])
  return [todos, setTodos];
};

export default useTodos;
