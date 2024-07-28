/* eslint-disable react/prop-types */
export default function Task({ id, content, completed, removeTask, editTask }) {
  return (
    <div
      className="todo-component"
    >
      <input type="checkbox" onClick={() => editTask(id, content, !completed)} checked={completed} />
      <p>{content}</p>
      <button className="btn-remove" onClick={() => removeTask(id)}>移除</button>
    </div>
  );
}