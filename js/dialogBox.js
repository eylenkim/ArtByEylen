const modals = Array.from(document.querySelectorAll('.modal'));
const triggers = Array.from(document.querySelectorAll('.trigger'));
var closeButton = document.querySelector(".close-button"); 


for (const trigger of triggers) {
  trigger.addEventListener('click', toggleModal);
}

function toggleModal(event) { event.target.closest('.trigger').querySelector('.modal').classList.toggle("show-modal"); }


function windowOnClick(event) {
  if (modals.some((modal) => modal.contains(event.target))) {
    toggleModal();
  }
}
