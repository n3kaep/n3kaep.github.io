const inputTask = document.getElementById('inputTask');
const addTask = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTask.addEventListener('click', () => {
    const taskText = inputTask.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');

        li.textContent = taskText;

        li.className = "bg-zinc-700 border border-zinc-600 rounded-lg px-4 py-2 cursor-pointer hover:bg-zinc-600 transition";

        taskList.appendChild(li);

        inputTask.value = '';
    }
});