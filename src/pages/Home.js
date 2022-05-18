import React from "react";
import AddTodos from "../components/AddTodos";
import DisplayTodos from "../components/DisplayTodos";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <DisplayTodos></DisplayTodos>
      <AddTodos></AddTodos>
    </div>
  );
};

export default Home;
