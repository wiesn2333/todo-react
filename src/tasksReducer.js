export default function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'new': {
      return [
        ...tasks,
        { id: action.id, content: action.content, completed: false },
      ];
    }
    case 'remove': {
      return tasks.filter(task => (task.id != action.id));
    }
    case 'edit': {
      return tasks.map(task => {
        if (task.id == action.id)
          return { id: task.id, content: action.content, completed: action.completed };
        return task;
      });
    }
  }
}