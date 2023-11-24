const toggle = document.querySelector(".sidebar-toggle");
const close = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggle.addEventListener("click", (e) => {
  sidebar.classList.toggle("show-sidebar");
});

close.addEventListener("click", (e) => {
  sidebar.classList.remove("show-sidebar");
});
