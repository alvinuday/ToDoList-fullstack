import React, { useState } from "react";
// import styled from "styled-components";
import Task from "./task.jsx";
import { Droppable } from "react-beautiful-dnd";
import "../styles/column.css";
import add from "../assets/add.png";
import NewTask from "./NewTask.jsx";
export default function Column({
  column,
  tasks,
  currentTaskState,
  setcurrentTaskState,
}) {
  const [addInCol, setaddInCol] = useState(false);

  function addNewTask(e) {
    console.log(e.target.id);
    const taskContainer = document.getElementById(
      `taskContainer-${e.target.id}`
    );
    setaddInCol(!addInCol);
    // var tag = document.createElement("p");
    // var text = document.createTextNode(
    //   "Tutorix is the best e-learning platform"
    // );
    // tag.appendChild(text);
    // var blob = () => {
    //   return NewTask;
    // };
    // console.log(taskContainer.prepend(blob));
  }

  return (
    <div className="columnContainer" id={column.id}>
      <div className="columnHeader">
        <div className="columnTitle">{column.title} </div>
        <span className="no_tasks">{tasks.length}</span>
      </div>
      <div className="addTaskContainer" id={column.id} onClick={addNewTask}>
        <img src={add} alt="addTask" className="addButton" />
      </div>
      {addInCol ? (
        <NewTask
          column={column.id}
          currentTaskState={currentTaskState}
          setcurrentTaskState={setcurrentTaskState}
          setaddInCol={setaddInCol}
        />
      ) : (
        ""
      )}
      <Droppable droppableId={column.id}>
        {(provided) => {
          return (
            <div
              className="taskContainer"
              id={`taskContainer-${column.id}`}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
}
