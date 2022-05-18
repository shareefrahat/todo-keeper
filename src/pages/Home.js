import React from "react";
import AddTodos from "../components/AddTodos";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <AddTodos></AddTodos>
    </div>
  );
};

export default Home;
