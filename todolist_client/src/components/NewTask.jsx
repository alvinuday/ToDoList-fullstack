import "../styles/NewTask.css";
import user1 from "../assets/user1.png";
export default function NewTask({
  column,
  currentTaskState,
  setcurrentTaskState,
  setaddInCol,
}) {
  function addTask(e) {
    e.preventDefault();
    const taskId = `task-${Object.keys(currentTaskState.tasks).length + 1}`;
    const task = {
      id: taskId,
      title: e.target.TaskTitle.value,
      img: user1,
      content: e.target.TaskContent.value,
    };
    const TaskIds = currentTaskState.columns[column].taskIds;
    TaskIds.unshift(taskId);
    const Tasks = currentTaskState.tasks;
    Tasks[taskId] = task;
    console.log(Tasks, TaskIds);

    const newColumn = {
      ...currentTaskState.columns[column],
      taskIds: TaskIds,
    };
    const newState = {
      ...currentTaskState,
      columns: {
        ...currentTaskState.columns,
        [newColumn.id]: newColumn,
      },
      tasks: Tasks,
    };
    console.log(newState);
    setcurrentTaskState(newState);
    setaddInCol(false);

    // alert("add");
  }
  return (
    <div className="newTaskWrapper">
      <form className="newTaskForm" onSubmit={addTask}>
        <div className="newTaskTitle">
          <input
            type="text"
            className="newTaskTitle"
            id="TaskTitle"
            placeholder="Give your task a title"
          />
        </div>
        <div className="newTaskDescription">
          <input
            type="text"
            placeholder="Description..."
            className="newTaskDesc"
            id="TaskContent"
          />
        </div>
        <div className="newTaskUser">
          <img src={user1} id="addTaskUserImg" />
          <button type="submit" className="addTaskButton">
            Add task
          </button>
        </div>
      </form>
    </div>
  );
}
