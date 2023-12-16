import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center flex-column ">
        <h1 className="text-center">
        Empower your day, <br /> One task at a time. 
        </h1>
        <p>
        Because greatness starts with a todo list.
        </p>
        <button class="home-btn p-2">Make Todo List</button>
      </div>
    </div>
  );
};

export default Home;