import { useState } from "react"
export default function NewTask({ addTask }) {
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => setNewTask(e.target.value);

  return (
    <>
      <label>
        <input placeholder="新的待办事项" value={newTask} onChange={handleInputChange} />
        <button type="button" onClick={() => { addTask(newTask), setNewTask('') }} disabled={newTask == ""}>添加</button>
      </label>
    </>
  );
}