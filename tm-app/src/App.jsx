import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
// import "./style/bootstrap.min.css";
import "./style/index.css";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 5:30pm",
      reminder: false,
    },
  ]);
  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <>
      <div className="container">
        <Header />
        <Tasks tasks={tasks} onDelete={onDelete} />
      </div>
    </>
  );
};
export default App;
