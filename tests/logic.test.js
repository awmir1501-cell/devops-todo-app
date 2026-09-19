const assert = require("node:assert");
const { addTask, toggleTask, deleteTask, clearCompleted, countRemaining } = require("../logic.js");

// 1. addTask adds a task
let tasks = addTask([], "Buy milk", "2026-09-25");
assert.strictEqual(tasks.length, 1);
assert.strictEqual(tasks[0].text, "Buy milk");
assert.strictEqual(tasks[0].done, false);

// 2. addTask ignores empty text
assert.strictEqual(addTask(tasks, "   ").length, 1);

// 3. toggleTask flips done
tasks = toggleTask(tasks, tasks[0].id);
assert.strictEqual(tasks[0].done, true);

// 4. countRemaining
tasks = addTask(tasks, "Study");
tasks = addTask(tasks, "Sleep");
assert.strictEqual(countRemaining(tasks), 2);

// 5. clearCompleted removes done tasks
tasks = clearCompleted(tasks);
assert.strictEqual(tasks.length, 2);
assert.strictEqual(tasks[0].text, "Study");

// 6. deleteTask removes by id
tasks = deleteTask(tasks, tasks[0].id);
assert.strictEqual(tasks.length, 1);

console.log("All tests passed");
