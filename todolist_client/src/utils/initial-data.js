import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import user4 from "../assets/user4.png";
const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      title: "Frontend",
      img: user1,
      content:
        "Modifying Career, Scholarship and Entrance exam screen Acc to new design pattern ",
    },
    "task-2": {
      id: "task-2",
      title: "Backend",
      img: user2,
      content: "Watch my favorite show",
    },
    "task-3": {
      id: "task-3",
      title: "Design",
      img: user3,
      content: "Charge my phone",
    },
    "task-4": {
      id: "task-4",
      title: "Sales",
      img: user4,
      content: "Cook dinner",
    },
    "task-5": {
      id: "task-5",
      title: "Wizadry",
      img: user2,
      content: "Practice Spells with Hermoine",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3"],
    },
    "column-2": {
      id: "column-2",
      title: "In Progress",
      taskIds: ["task-4"],
    },
    "column-3": {
      id: "column-3",
      title: "Completed",
      taskIds: ["task-5"],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3"],
};

export default initialData;
