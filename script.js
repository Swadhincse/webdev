const form = document.querySelector("#contact-form");
const alert = document.querySelector("#alert");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Check if all fields are filled
  const name = form.querySelector("#name").value;
  const email = form.querySelector("#email").value;
  const subject = form.querySelector("#subject").value;
  const message = form.querySelector("#message").value;

  if (name && email && subject && message) {
    // Show success alert
    alert.style.display = "block";
  }
});

const downArrow = document.querySelector('.down-arrow');

downArrow.addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('#services').scrollIntoView({
    behavior: 'smooth'
  });
});
