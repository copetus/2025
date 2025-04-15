const draggableElement = document.getElementById('draggable-element');

let isDragging = false;
let offsetX, offsetY;

draggableElement.addEventListener('mousedown', (e) => {
  isDragging = true;

  // Calculate the offset between the mouse position and the element's top-left corner
  offsetX = e.clientX - draggableElement.offsetLeft;
  offsetY = e.clientY - draggableElement.offsetTop;

  // Add event listeners for mousemove and mouseup on the document
  document.addEventListener('mousemove', drag);
  document.addEventListener('mouseup', stopDrag);
});

function drag(e) {
  if (isDragging) {
    // Calculate the new position based on the mouse position and the initial offset
    const newX = e.clientX - offsetX;
    const newY = e.clientY - offsetY;

    // Keep the element within the bounds of the document (optional)
    const maxX = document.documentElement.clientWidth - draggableElement.offsetWidth;
    const maxY = document.documentElement.clientHeight - draggableElement.offsetHeight;

    const boundedX = Math.max(0, Math.min(newX, maxX));
    const boundedY = Math.max(0, Math.min(newY, maxY));


    draggableElement.style.left = boundedX + 'px';
    draggableElement.style.top = boundedY + 'px';
  }
}

function stopDrag() {
  isDragging = false;
  document.removeEventListener('mousemove', drag);
  document.removeEventListener('mouseup', stopDrag);
}
