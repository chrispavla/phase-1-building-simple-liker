// // Defining text characters for the empty and full hearts for you to use later.
// const EMPTY_HEART = "♡";
// const FULL_HEART = "♥";

// Your JavaScript code goes here!

// const hearts = document.querySelectorAll(".like-glyph")

// hearts.forEach(function(heart) {
//    heart.addEventListener('click', () => {

//     mimicServerCall()

//     .then(() => {
//       if(heart.innerText === EMPTY_HEART) {
//       heart.innerText = FULL_HEART
//       heart.className='activated-heart'
//     } else {
//       heart.innerText = EMPTY_HEART
//       heart.className=""
//     }

//     })
//     .catch(() => {

//       let modal = document.getElementById('modal')
//       modal.className = ""
//       document.getElementById('modal-message').innerHTML = "Server error"
//       setTimeout(() => {
//         modal.className="hidden"
//       }, 3000)
//     })

//   })
// })

//
//
//
// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

//Add the .hidden class to the error modal in the HTML so it does not appear when the page first loads
const errorModal = document.querySelector("#modal");
let hearts = document.querySelectorAll(".like-glyph");
let message = document.getElementById("modal-message");

errorModal.classList.add("hidden");

hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        if (heart.textContent === EMPTY_HEART) {
          heart.textContent = FULL_HEART;
          heart.classList.add("activated-heart");
        } else {
          heart.textContent = EMPTY_HEART;
          heart.className = "";
        }
      })
      .catch(() => {
        errorModal.className = "";
        message.textContent = "Server error";
        setTimeout(() => {
          errorModal.className = "hidden";
        }, 3000);
      });
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
