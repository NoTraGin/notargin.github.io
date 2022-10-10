/*!
 * Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(document.querySelectorAll("#navbarResponsive .nav-link"));
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  // form submit to inbox
  const scriptURL = "https://script.google.com/macros/s/AKfycbwkl9WwIH3nd-S8QWBGXIoJaIPoGYfcSSuqQEeDKkNezpfdfeSVWvgxbd9kXUz_x-Lv9g/exec";
  const form = document.forms["submit-to-google-sheet"];
  const btnSend = document.querySelector(".btn-send");
  const btnLoading = document.querySelector(".btn-load");
  const contactAlert = document.querySelector(".contact-alert");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // tampilkan tombol loading, hilangkan tombol kirim
    btnLoading.classList.toggle("d-none");
    btnSend.classList.toggle("d-none");
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        // tampilkan tombol kirim, hilangkan tombol loading
        btnLoading.classList.toggle("d-none");
        btnSend.classList.toggle("d-none");
        // tampilkan alert
        contactAlert.classList.toggle("d-none");
        // reset formnya
        form.reset();
      })
      .catch((error) => console.error("Error!", error.message));
  });
});
