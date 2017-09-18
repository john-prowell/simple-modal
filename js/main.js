// Get Elements
const button = document.querySelector('.btn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.closeBtn');

// Add Event Listeners to Elements
button.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', windowClick);

// Functions

// Open Modal
function openModal() {
  modal.style.display = 'block';
}

// Close Modal when click on X inside modal
function closeModal() {
  modal.style.display = 'none';
}

// Close Modal on click outside of modal
function windowClick(e) {
  if (e.target === modal) {
    modal.style.display = 'none'
  }
}