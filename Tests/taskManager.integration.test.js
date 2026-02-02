import {
  addTask,
  deleteTask,
  toggleComplete,
  filterTasks,
  _clearTasks,
  _getTasks
} from '../src/taskManager';

describe('Task Manager – Integration Tests', () => {
  beforeEach(() => {
    _clearTasks();
  });

  test('user can create, complete, and delete a task', () => {
    const task = addTask('Integration Task', 'flow');
    expect(_getTasks()).toHaveLength(1);

    toggleComplete(task.id);
    expect(_getTasks()[0].completed).toBe(true);

    deleteTask(task.id);
    expect(_getTasks()).toHaveLength(0);
  });

  test('filtering works across task states', () => {
    const t1 = addTask('Active', '');
    const t2 = addTask('Completed', '');
    toggleComplete(t2.id);

    expect(filterTasks('active')).toHaveLength(1);
    expect(filterTasks('completed')).toHaveLength(1);
    expect(filterTasks('all')).toHaveLength(2);
  });

  test('handles large task datasets', () => {
    for (let i = 0; i < 120; i++) {
      addTask(`Task ${i}`, 'bulk');
    }
    expect(filterTasks('all')).toHaveLength(120);
  });
});
