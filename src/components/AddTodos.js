import React, { useState } from "react";
import { toast } from "react-toastify";
import DisplayTodos from "./DisplayTodos";

const AddTodos = () => {
  const [todos, setTodos] = useState([]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const details = e.target.details.value;
    const newTodo = { title, details };
    setTodos([...todos, newTodo]);
    toast.success("New todo added");
    e.target.reset();
  };

  const handleDelete = (name) => {
    console.log(name);
    const remaining = todos.filter((todo) => todo.title !== name);
    setTodos(remaining);
    toast.success("Successfully Deleted");
  };
  return (
    <div className="px-4 flex flex-col-reverse my-10">
      <DisplayTodos todos={todos} handleDelete={handleDelete}></DisplayTodos>
      <div className="shadow-md sm:rounded-lg border border-blue-700 p-5 text-left rounded w-full lg:w-1/2 mx-auto">
        <form onSubmit={handleOnSubmit}>
          <div>
            {/* <h4 className="lg:text-xl text-center mb-5 ">
                  Adding Product as:{" "}
                  <span className="text-blue-800">{user?.email}</span>
                </h4> */}
          </div>
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Title of todo"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="details"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Description
            </label>
            <textarea
              id="details"
              name="details"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Todo Description..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTodos;
