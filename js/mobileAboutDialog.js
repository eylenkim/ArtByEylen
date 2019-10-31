          const modals = Array.from(document.querySelectorAll('.modal'));
          const triggers = Array.from(document.querySelectorAll('.trigger'));
          var closeButtons = Array.from(document.querySelectorAll(".close-button")); 

        for (const trigger of triggers) {
             trigger.addEventListener('click', toggleModal);
          }

        for (const closebutton of closeButtons) {
             closebutton.addEventListener("click", toggleModal);
          }

          function toggleModal(event)
            event.target.querySelector('.modal').classList.toggle("show-modal");
          }

  
          function windowOnClick(event) {

          if (modals.some((modal) => modal.contains(event.target))) {
            toggleModal();
            }
          }
         
         window.addEventListener("click", windowOnClick);
    
 



 