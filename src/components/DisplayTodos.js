import React from "react";

const DisplayTodos = ({ todos, handleDelete }) => {
  return (
    <>
      <div className="my-10">
        <h3> Display todos : {todos.length}</h3>
        <section className="grid grid-cols-1 gap-10">
          {todos &&
            todos.map((todo, index) => (
              <div className="border border-blue-700 p-5 w-full lg:w-1/2 mx-auto rounded">
                <p className="text-2xl font-bold">{todo.title}</p>
                <p className="font-serif text-xl">{todo.details}</p>
                <button className="bg-green-700 px-4 rounded text-white mt-8 mx-8">
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
