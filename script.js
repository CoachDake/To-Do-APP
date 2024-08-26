document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const newTask = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', function() {
            taskList.removeChild(newTask);
        });

        newTask.appendChild(taskSpan);
        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);

        taskInput.value = '';
    }
});

document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('addTaskButton').click();
    }
});
