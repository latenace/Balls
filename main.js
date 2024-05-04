const card = document.getElementById('card');
const dropZone = document.getElementById('drop-zone');
card.addEventListener('dragstart', function(event) {
	console.log(event)
})
dropZone.addEventListener('dragover', function(event) {
	event.preventDefault()
})
dropZone.addEventListener('drop', function(event) {
	dropZone.prepend(card)
})


function onDragStart(event) {
	event
	  .dataTransfer
	  .setData('text/plain', event.target.id);
  
	event
	  .currentTarget
	  .style
	  .backgroundColor = 'yellow';
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
	
  }