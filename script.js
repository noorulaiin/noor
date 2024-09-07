const dynamicText = document.querySelector("h3 span");
const words = ["Developer.", "Designer.", "Freelancer."];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();
// ... (existing JavaScript)


// Open the modal with the clicked image
function openimgModal(imagePath) {
    const modal = document.getElementById('myimgModal');
    const modalImage = document.getElementById('modalImage');

    modal.style.display = 'block';
    modalImage.src = imagePath;
}

// Close the modal
function closeimgModal() {
    const modal = document.getElementById('myimgModal');
    modal.style.display = 'none';
}

// Close the modal when clicking outside the image
window.onclick = function (event) {
    const modal = document.getElementById('myimgModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};


document.getElementById('hireMeBtn').addEventListener('click', openModal);

function openModal() {
  document.getElementById('hireMeModal').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

function closepopModal() {
  document.getElementById('hireMeModal').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}





//

function openquizModal() {

    // Close the first modal
  closepopModal();

  document.getElementById('tellmemodal').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

function closequizModal() {
  document.getElementById('tellmemodal').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}



//
function opencontactModal() {

    // Close the first modal
  closequizModal();

  document.getElementById('contactmemodal').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

function closecontactModal() {
  document.getElementById('contactmemodal').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}


function goBack() {
    // Close the current modal (Option 1 modal)
    closecontactModal();
  
    // Open the main modal
    openquizModal();
  }

  function goBacktofirst() {
    // Close the current modal (Option 1 modal)
    closequizModal();
  
    // Open the main modal
    openModal();
  }

//
  function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    // You can perform additional validation here
  
    // Display thank you message
    document.getElementById('submitForm').style.display = 'none';
    document.getElementById('thankyouModal').style.display = 'block';
  }

  function closeThankYouMessage() {
    document.getElementById('thankyouModal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

  function toggleMobileMenu() {
    var menu = document.getElementById("mainMenu");
    menu.classList.toggle("active");

    var menuBtn = document.querySelector(".fa-bars");
    var closeBtn = document.querySelector(".fa-times");
    var overlay = document.querySelector(".overlay");

    // Toggle visibility of the menu and close buttons
    overlay.style.display = menu.classList.contains("active") ? "block" : "none";
    menuBtn.style.display = menu.classList.contains("active") ? "none" : "block";
    closeBtn.style.display = menu.classList.contains("active") ? "block" : "none";
    
}