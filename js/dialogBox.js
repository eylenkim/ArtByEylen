const modals = Array.from(document.querySelectorAll('.modal'));
const triggers = Array.from(document.querySelectorAll('.trigger'));
var closeButton = document.querySelector(".close-button"); 

//if a trigger is clicked then...
for (const trigger of triggers) {
  trigger.addEventListener('click', toggleModal);
}

// .. then toggle it's modal
function toggleModal(event) { event.target.closest('.trigger').querySelector('.modal').classList.toggle("show-modal"); }

  // check if the clicked element is a modal, or in a modal
function windowOnClick(event) {
  if (modals.some((modal) => modal.contains(event.target))) {
    toggleModal();
  }
}
