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