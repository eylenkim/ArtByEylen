          var modal = document.querySelector(".modal");
          var trigger = document.querySelector(".about-trigger");
          var closeButton = document.querySelector(".close-button"); 

          function toggleModal() {
              modal.classList.toggle("show-modal");
          }

          function windowOnClick(event) {
              if (event.target === modal) {
                  toggleModal();
              }
              else if (event.target === closeButton) {
                toggleModal();
              }
          }

          trigger.addEventListener("click", toggleModal);
          closeButton.addEventListener("click", toggleModal);
          window.addEventListener("click", windowOnClick);