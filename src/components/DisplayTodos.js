import React, { useState } from "react";

const DisplayTodos = ({ todos, handleDelete }) => {
  const [complete, setComplete] = useState([]);

  const handleComplete = (title) => {
    const completed = [...complete, title];
    console.log(completed);
    setComplete(completed);
  };

  return (
    <>
      <div className="my-10">
        <h3> Display todos : {todos.length}</h3>
        <section className="grid grid-cols-1 gap-10">
          {todos &&
            todos.map((todo) => (
              <div className="border border-blue-700 p-5 w-full lg:w-1/2 mx-auto rounded">
                {complete.find((t) => t === todo.title) ? (
                  <p className="text-2xl font-bold line-through">
                    {todo.title}
                  </p>
                ) : (
                  <p className="text-2xl font-bold">{todo.title}</p>
                )}

                <p className="font-serif text-xl">{todo.details}</p>
                <button
                  onClick={() => handleComplete(todo.title)}
                  className="bg-green-700 px-4 rounded text-white mt-8 mx-8"
                >
                  Complete
                </button>
                <button
                  onClick={() => handleDelete(todo.title)}
                  className="bg-red-700 px-4 rounded text-white mt-8 mx-8"
                >
                  Delete
                </button>
              </div>
            ))}
        </section>
      </div>
    </>
  );
};

export default DisplayTodos;
