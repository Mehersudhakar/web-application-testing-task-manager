import {
  addTask,
  deleteTask,
  toggleComplete,
  filterTasks,
  validateTask,
  _clearTasks,
  _getTasks
} from '../src/taskManager';

describe('Task Manager – Unit Tests', () => {
  beforeEach(() => {
    _clearTasks();
  });

  test('addTask creates a task with correct properties', () => {
    const task = addTask('Buy groceries', 'Milk and eggs');
    expect(task.title).toBe('Buy groceries');
    expect(task.completed).toBe(false);
    expect(task.id).toBeDefined();
  });

  test('addTask rejects empty title', () => {
    expect(() => addTask('', 'desc')).toThrow();
  });

  test('deleteTask removes task by ID', () => {
    const task = addTask('Delete', 'test');
    deleteTask(task.id);
    expect(_getTasks()).toHaveLength(0);
  });

  test('toggleComplete changes completion status', () => {
    const task = addTask('Toggle', 'test');
    toggleComplete(task.id);
    expect(_getTasks()[0].completed).toBe(true);
  });

  test('filterTasks returns completed tasks', () => {
    const task = addTask('Done', 'test');
    toggleComplete(task.id);
    const completed = filterTasks('completed');
    expect(completed).toHaveLength(1);
  });

  test('validateTask validates correct task structure', () => {
    const valid = validateTask({
      title: 'Valid',
      description: 'desc',
      completed: false
    });
    expect(valid).toBe(true);
  });
});
