import "../styles/task.css";
import { Draggable } from "react-beautiful-dnd";
export default function Task({ task, index }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => {
        return (
          <div
            className="taskWrapper"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <div className="taskTitle">{task.title}</div>
            <div className="taskContent">{task.content}</div>
            <div className="taskUser">
              <img src={task.img} className="taskUserImg" />
            </div>
          </div>
        );
      }}
    </Draggable>
  );
}
