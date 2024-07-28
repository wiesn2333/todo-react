import { useReducer } from "react";
import tasksReducer from "./tasksReducer"
import Task from "./components/Task"
import NewTask from "./components/NewTask"
import "./app.css"

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialDate);

  return (
    <div >

      <h1>待办事项</h1>

      <NewTask
        addTask={content => dispatch({
          type: 'new',
          id: tasks.length == 0 ? 1 : tasks.at(-1).id + 1,
          content
        })} />

      {tasks.map(task =>
      (<Task
        key={task.id}
        id={task.id}
        content={task.content}
        completed={task.completed}
        removeTask={(id) => dispatch({
          type: 'remove',
          id
        })}
        editTask={(id, content, completed) => dispatch({
          type: 'edit',
          id, content, completed
        })}
      />))
      }

    </div>
  );
}

export default App;

const initialDate = [
  { id: 1, content: '吃饭', completed: true },
  { id: 2, content: '学习', completed: false },
];