import initialData from "../utils/initial-data";
import Column from "./column";
import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
export default function Projects() {
  const [currentTaskState, setcurrentTaskState] = useState(initialData);
  const [columnState, setcolumnState] = useState(initialData.columns);
  function onDragEnd(result) {
    // var newState = {
    //   ...columnState,

    // };
    // console.log(newState);

    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = currentTaskState.columns[source.droppableId];
    const finish = currentTaskState.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...currentTaskState,
        columns: {
          ...currentTaskState.columns,
          [newColumn.id]: newColumn,
        },
      };

      setcurrentTaskState(newState);
      return;
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...currentTaskState,
      columns: {
        ...currentTaskState.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setcurrentTaskState(newState);
  }
  return (
    <div className="StageWrapper">
      <div className="columnsWrapper">
        <DragDropContext onDragEnd={onDragEnd}>
          {currentTaskState.columnOrder.map((columnId) => {
            const column = currentTaskState.columns[columnId];
            const tasks = column.taskIds.map(
              (taskId) => currentTaskState.tasks[taskId]
            );
            return (
              <Column
                key={column.id}
                column={column}
                tasks={tasks}
                currentTaskState={currentTaskState}
                setcurrentTaskState={setcurrentTaskState}
              />
            );
          })}
        </DragDropContext>
      </div>
    </div>
  );
}
