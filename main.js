const greenBall = "#B7CF57";


function onDragStart(event) {
	event
	  .dataTransfer
	  .setData('text/plain', event.target.id);
  
	event
	  .currentTarget
	  .style
  }

function onDragOver(event) {
	event.preventDefault();
  }



function onDrop(event) {
	const id = event
	  .dataTransfer
	  .getData('text');
	  const draggableElement = document.getElementById(id);
	  const dropzone = event.target;
	  dropzone.appendChild(draggableElement);
	  event
	  	.dataTransfer
	  	.clearData();

	// change the colour of the dropped ball to green 
	  draggableElement
	  	.style
		.backgroundColor = greenBall;
  }

  //add new task
  function addTask() {
    const taskInput = document.getElementById('new-task').value.trim();
    if (taskInput) {
      const draggableContainer = document.getElementById('draggable-container');
      const newTask = document.createElement('div');
      newTask.classList.add('example-draggable');
      newTask.draggable = true;
      newTask.innerHTML = taskInput;
      newTask.addEventListener('dragstart', onDragStart);
      draggableContainer.appendChild(newTask);
      document.getElementById('new-task').value = '';
    }
  };