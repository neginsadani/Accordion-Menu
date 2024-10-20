"use stric";
const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", function (event) {
  if (event.target.classList.contains("accordion-header")) {
    const allHeaders = document.querySelectorAll(".accordion-header");
    allHeaders.forEach((header) => {
      header.classList.remove("active");
      header.nextElementSibling.style.maxHeight = "0";
    });

    const clickedHeader = event.target;
    clickedHeader.classList.add("active");

    const content = clickedHeader.nextElementSibling;
    content.style.maxHeight = content.scrollHeight + "px";
  }
});
