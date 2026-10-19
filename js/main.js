// Recipe Secrets — shared site behavior
(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Mobile nav toggle ---------- */
  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    var links = document.querySelector(".nav-links");
    if (!toggle || !links) return;

    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      links.classList.toggle("open");
    });

    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        links.classList.remove("open");
      });
    });
  }

  /* ---------- Scroll fade-in ---------- */
  function initFadeIn() {
    var items = document.querySelectorAll(".fade-in");
    if (!items.length) return;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("in-view"); });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- Menu category tabs (menu.html) ---------- */
  function initMenuTabs() {
    var tabs = document.querySelectorAll(".menu-tab");
    if (!tabs.length) return;
    var categories = document.querySelectorAll(".menu-category");

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) { t.setAttribute("aria-selected", "false"); });
        tab.setAttribute("aria-selected", "true");

        var target = tab.getAttribute("data-target");
        categories.forEach(function (cat) {
          if (target === "all" || cat.id === target) {
            cat.style.display = "";
          } else {
            cat.style.display = "none";
          }
        });
      });
    });
  }

  /* ---------- Reservation form validation (reservation.html) ---------- */
  function initReservationForm() {
    var form = document.getElementById("reservation-form");
    if (!form) return;
    var confirmation = document.getElementById("confirmation-message");

    var today = new Date();
    var dateInput = document.getElementById("res-date");
    if (dateInput) {
      var yyyy = today.getFullYear();
      var mm = String(today.getMonth() + 1).padStart(2, "0");
      var dd = String(today.getDate()).padStart(2, "0");
      dateInput.setAttribute("min", yyyy + "-" + mm + "-" + dd);
    }

    function setInvalid(field, isInvalid) {
      field.closest(".field").classList.toggle("invalid", isInvalid);
    }

    function validateField(field) {
      var valid = field.checkValidity();
      setInvalid(field, !valid);
      return valid;
    }

    var fields = form.querySelectorAll("input[required], select[required]");
    fields.forEach(function (field) {
      field.addEventListener("blur", function () { validateField(field); });
      field.addEventListener("input", function () {
        if (field.closest(".field").classList.contains("invalid")) {
          validateField(field);
        }
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var allValid = true;
      fields.forEach(function (field) {
        if (!validateField(field)) allValid = false;
      });

      if (!allValid) {
        var firstInvalid = form.querySelector(".field.invalid input, .field.invalid select");
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // No backend: this demo shows a local confirmation instead of a real network submit.
      // Wire the form's action= to your Formspree endpoint (see README) to actually send it.
      form.style.display = "none";
      if (confirmation) {
        confirmation.classList.add("show");
        confirmation.setAttribute("tabindex", "-1");
        confirmation.focus();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    initFadeIn();
    initMenuTabs();
    initReservationForm();
  });
})();
