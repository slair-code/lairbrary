
document.getElementById('bookForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const entries = Object.fromEntries(formData.entries());

  console.log('Form submitted with answers:', entries);

  alert("Thanks for filling it out! Your lair is being built.");

  // Optional: Send to server or email API here.
});
