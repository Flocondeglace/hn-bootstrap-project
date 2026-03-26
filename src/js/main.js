// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap’s JS
import * as bootstrap from "bootstrap";

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach(function (element) {
      new bootstrap.Tooltip(element);
    });
});
