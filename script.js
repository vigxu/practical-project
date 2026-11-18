// Display the current year in the footer.
document.getElementById("year").textContent = new Date().getFullYear();

// A small interactive feature for the contact section.
document.getElementById("helloButton").addEventListener("click", function () {
  document.getElementById("message").textContent = "Thanks for visiting my portfolio!";
});
