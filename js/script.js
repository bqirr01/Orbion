/* Orbion — Home (Desktop) interactions
   Kept intentionally small: an accordion for Services and a rotating
   Process carousel. No dependencies. */
(function () {
  "use strict";

  /* ---- Image fallback chain ------------------------------------------- *
   * Each photo points at a local asset in assets/img/. If that file isn't
   * present yet, we fall back to the stock URL in data-fb; if that also
   * fails, the element is removed so the brand gradient behind it shows. */
  document.querySelectorAll("img[data-fb]").forEach(function (img) {
    img.addEventListener("error", function handle() {
      if (!img.dataset.tried && img.dataset.fb) {
        img.dataset.tried = "1";
        img.src = img.dataset.fb;
      } else {
        img.removeEventListener("error", handle);
        img.remove();
      }
    });
  });

  /* ---- Scroll reveal animations --------------------------------------- */
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce && "IntersectionObserver" in window) {
    document.body.classList.add("anim");
    // Whole-block fade-ups
    var singles = ".hero__text,.hero__art,.pagehead__left,.pagehead__right,.about__text,.about__art," +
      ".split__text,.split__media,.services__intro,.tst__head,.faq__head,.process__head,.bloghero," +
      ".creative__card,.ctaband__inner,.contact__left,.contact__form,.map,.pricing__head,.billing," +
      ".footer__card,.blogsec__head,.faqx>.pagehead__row";
    document.querySelectorAll(singles).forEach(function (el) { el.setAttribute("data-reveal", ""); });
    // Staggered groups (cards / rows animate in one after another)
    var groups = ".cards,.plans,.staff__grid,.tst__stats,.tst__grid,.articles__grid,.blogcards," +
      ".work__col,.services__list,.faqx__list,.faq__list,.logos__track";
    document.querySelectorAll(groups).forEach(function (group) {
      Array.prototype.forEach.call(group.children, function (child, i) {
        child.setAttribute("data-reveal", "");
        child.style.setProperty("--d", Math.min(i * 0.08, 0.5) + "s");
      });
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll("[data-reveal]").forEach(function (el) { io.observe(el); });
    window.__revealIO = io; // used by the single-file preview router to re-reveal on route change
  }

  /* ---- Nav shadow on scroll ------------------------------------------- */
  var navEl = document.querySelector(".nav");
  if (navEl) {
    var onScroll = function () { navEl.classList.toggle("scrolled", window.scrollY > 12); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---- Mobile / tablet nav (hamburger) -------------------------------- */
  var nav = document.querySelector(".nav");
  var burger = document.querySelector(".nav__burger");
  if (nav && burger) {
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    nav.querySelectorAll(".nav__links a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }


  /* ---- FAQ rows (independent toggle) ---------------------------------- */
  document.querySelectorAll(".qarow__head, .qa__head").forEach(function (h) {
    h.addEventListener("click", function () { h.parentElement.classList.toggle("is-open"); });
  });

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
      { src: "assets/img/process-1.jpg", fb: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=900&q=80&auto=format&fit=crop", caption: "Research & planning" },
      { src: "assets/img/process-2.jpg", fb: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80&auto=format&fit=crop", caption: "Discussion of the idea" },
      { src: "assets/img/process-3.jpg", fb: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=900&q=80&auto=format&fit=crop", caption: "Design & build" },
      { src: "assets/img/process-4.jpg", fb: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&q=80&auto=format&fit=crop", caption: "Launch & review" }
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
      img.dataset.tried = "";
      img.onerror = function () {
        if (!img.dataset.tried && slide.fb) { img.dataset.tried = "1"; img.src = slide.fb; }
        else { img.onerror = null; img.remove(); }
      };
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

  /* ---- Pricing billing toggle ----------------------------------------- */
  var billing = document.querySelector(".billing");
  if (billing) {
    billing.querySelectorAll("button").forEach(function (b) {
      b.addEventListener("click", function () {
        billing.querySelectorAll("button").forEach(function (x) { x.classList.remove("is-active"); });
        b.classList.add("is-active");
        var yearly = b.dataset.mode === "yearly";
        document.querySelectorAll(".plan__price .amt").forEach(function (a) {
          var v = yearly ? a.dataset.y : a.dataset.m;
          if (v) a.childNodes[0].nodeValue = v;
        });
        document.querySelectorAll(".plan__per").forEach(function (p) {
          p.textContent = yearly ? "Per year" : "Per month";
        });
      });
    });
  }


  /* ---- Contact chips -------------------------------------------------- */
  document.querySelectorAll(".chipgroup").forEach(function (group) {
    var single = group.classList.contains("chipgroup--single");
    group.querySelectorAll(".chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        if (single) group.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("is-active"); });
        chip.classList.toggle("is-active");
      });
    });
  });

  /* ---- Newsletter (demo only) ----------------------------------------- */
  var form = document.querySelector(".footer__input");
  if (form) {
    form.addEventListener("submit", function () {
      var input = form.querySelector("input");
      if (input && input.value) { input.value = ""; input.placeholder = "Thanks — you're subscribed!"; }
    });
  }
})();
