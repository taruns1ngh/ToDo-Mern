import React from "react";
import "./about.css";
const About = () => {
  return (
    <div className="about d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="d-flex">
          <h1>About Us</h1>
        </div>

        <p>
        A to-do list is a simple and effective organizational tool designed to help individuals manage and prioritize their tasks.<br/>
        It typically consists of a list of items or activities. that need to be completed, allowing users to break down larger goals <br/>
        into smaller, actionable steps. To-do lists can be created using pen and paper, digital applications, or integrated into <br/>
        project management tools. They serve several purposes, including organizing tasks, setting priorities, managing time, <br/>
        tracking progress, and enhancing productivity. By providing a clear overview of what needs to be done, to-do lists contribute <br/>
         to effective time management, stress reduction, and a sense of accomplishment as tasks are completed and checked off the list.
        </p>
      </div>
    </div>
  );
};

export default About;