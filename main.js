const rangeInput = document.getElementById('slider');
rangeInput.addEventListener('input', updateDifficulty);

function updateDifficulty() {
    const difficultyOutput = document.getElementById('difficulty');
    const difficulty = getDifficulty();
    difficultyOutput.textContent = difficulty;
}

function getDifficulty() {
    const value = parseInt(rangeInput.value);
    if (value >= 0 && value <= 20) {
        return "Easy";
    } else if (value > 20 && value <= 40) {
        return "Medium";
    } else if (value > 40 && value <= 60) {
        return "Hard";
    } else if (value > 60 && value <= 80) {
        return "Super Hard";
    } else {
        return "Insane";
    }
}

function onDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}

function onDragOver(event) {
    event.preventDefault();
}

function onDrop(event) {
    const id = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;

    if (!dropzone.classList.contains('bin')) {
        dropzone.appendChild(draggableElement);
    } else {
        draggableElement.remove();
    }
}

function addTask() {
    const taskInput = document.getElementById('new-task').value.trim();

    if (taskInput) {
        const draggableTasks = document.getElementById('draggable-tasks');
        const newTask = document.createElement('div');
        newTask.classList.add('example-draggable');
        newTask.draggable = true;
        newTask.id = 'draggable-' + (draggableTasks.children.length + 1); // Unique ID for each task
        newTask.innerHTML = taskInput;
        newTask.style.backgroundColor = getColor(); // Apply color here
        newTask.addEventListener('dragstart', onDragStart);
        draggableTasks.appendChild(newTask);
        document.getElementById('new-task').value = '';
    }
}

function getColor() {
  const colors = ["#B7CF57", "#F5CA5B", "#DF84CB", "#A188CA", "#EDADAD"];
  const value = parseInt(rangeInput.value);
  const index = Math.floor((value / 100) * colors.length); 
  return colors[index];
}

addTask();
