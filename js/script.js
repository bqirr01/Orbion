/* Orbion — Home (Desktop) interactions
   Kept intentionally small: an accordion for Services and a rotating
   Process carousel. No dependencies. */
(function () {
  "use strict";

  /* ---- Services accordion --------------------------------------------- */
  var accItems = document.querySelectorAll(".acc");
  accItems.forEach(function (item) {
    var head = item.querySelector(".acc__head");
    if (!head) return;
    head.addEventListener("click", function () {
      var isOpen = item.classList.contains("is-open");
      accItems.forEach(function (other) {
        other.classList.remove("is-open");
        var h = other.querySelector(".acc__head");
        if (h) h.setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("is-open");
        head.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ---- Process carousel ----------------------------------------------- */
  var stage = document.querySelector(".process__stage");
  if (stage) {
    var slides = [
      { src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=900&q=80&auto=format&fit=crop", caption: "Research & planning" },
      { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80&auto=format&fit=crop", caption: "Discussion of the idea" },
      { src: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=900&q=80&auto=format&fit=crop", caption: "Design & build" },
      { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&q=80&auto=format&fit=crop", caption: "Launch & review" }
    ];
    var index = 1;
    var centerEl = stage.querySelector('[data-slot="center"]');
    var leftEl = stage.querySelector('[data-slot="left"]');
    var rightEl = stage.querySelector('[data-slot="right"]');
    var captionEl = centerEl ? centerEl.querySelector(".caption") : null;

    function at(i) { return slides[(i % slides.length + slides.length) % slides.length]; }
    function setImg(el, slide) {
      if (!el) return;
      var img = el.querySelector("img");
      if (!img) { img = document.createElement("img"); img.loading = "lazy"; img.alt = ""; el.insertBefore(img, el.firstChild); }
      img.onerror = function () { img.remove(); };
      img.src = slide.src;
    }
    function render() {
      setImg(leftEl, at(index - 1));
      setImg(centerEl, at(index));
      setImg(rightEl, at(index + 1));
      if (captionEl) captionEl.textContent = at(index).caption;
    }
    function go(dir) { index += dir; render(); }

    var prev = stage.querySelector(".process__nav--prev");
    var next = stage.querySelector(".process__nav--next");
    if (prev) prev.addEventListener("click", function () { go(-1); });
    if (next) next.addEventListener("click", function () { go(1); });

    render();
    var timer = setInterval(function () { go(1); }, 5000);
    stage.addEventListener("mouseenter", function () { clearInterval(timer); });
  }

  /* ---- Newsletter (demo only) ----------------------------------------- */
  var form = document.querySelector(".footer__input");
  if (form) {
    form.addEventListener("submit", function () {
      var input = form.querySelector("input");
      if (input && input.value) { input.value = ""; input.placeholder = "Thanks — you're subscribed!"; }
    });
  }
})();
