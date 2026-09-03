/* Orbion — shared layout (nav + footer)
   Injected on every page so navigation stays consistent and connected.
   The active link is chosen from <body data-page="…">. */
(function () {
  "use strict";

  var PAGES = [
    { key: "home", label: "Home", href: "index.html" },
    { key: "about", label: "About", href: "about.html" },
    { key: "service", label: "Service", href: "service.html" },
    { key: "testimonial", label: "Testimonial", href: "testimonial.html" },
    { key: "pricing", label: "Pricing", href: "pricing.html" },
    { key: "blog", label: "Blog", href: "blog.html" },
    { key: "contact", label: "Contact", href: "contact.html" }
  ];

  var current = (document.body.getAttribute("data-page") || "home");

  var logo =
    '<a class="brand" href="index.html" aria-label="Orbion home">' +
      '<span>Orbi</span>' +
      '<svg class="brand__o" viewBox="0 0 26 26" aria-hidden="true">' +
        '<circle cx="13" cy="13" r="10.6" fill="none" stroke="currentColor" stroke-width="4.4"/>' +
        '<g fill="#f7c9b0"><circle cx="13" cy="8.7" r="3.1"/><circle cx="13" cy="17.3" r="3.1"/>' +
        '<circle cx="8.7" cy="13" r="3.1"/><circle cx="17.3" cy="13" r="3.1"/></g>' +
        '<circle cx="13" cy="13" r="2.2" fill="currentColor"/>' +
      '</svg><span>n</span></a>';

  var links = PAGES.map(function (p) {
    return '<a href="' + p.href + '"' + (p.key === current ? ' class="is-active"' : "") + ">" + p.label + "</a>";
  }).join("");

  var arrow = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="1.5"/><path d="M9 9h6v6M9 15l6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  var navHTML =
    '<header class="nav">' + logo +
      '<nav class="nav__links" id="nav-links" aria-label="Primary">' + links + "</nav>" +
      '<div class="nav__right">' +
        '<a href="contact.html" class="nav__cta">Free Consultation ' + arrow + "</a>" +
        '<button class="nav__burger" aria-label="Open menu" aria-expanded="false" aria-controls="nav-links"><span></span><span></span><span></span></button>' +
      "</div>" +
    "</header>";

  var footerHTML =
    '<footer class="footer" id="footer"><div class="footer__card">' +
      '<div class="footer__social">' +
        '<a href="#" aria-label="Dribbble"><svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.3"/><path d="M2 6c5 0 9 1 12 5M3.5 12.5C5 8 9 5.5 12.5 5M6 1.5c3 3 4.5 7 4.5 13" stroke="currentColor" stroke-width="1.1"/></svg></a>' +
        '<a href="#" aria-label="Facebook"><svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M10 3H8.5C7.7 3 7 3.7 7 4.5V6H5v2h2v6h2V8h1.8L11 6H9V5c0-.3.2-.5.5-.5H11V3h-1Z"/></svg></a>' +
        '<a href="#" aria-label="Twitter X"><svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M3 3h2.6l3 4.1L11.9 3H14l-4.3 5.4L14.5 15H12l-3.3-4.5L4.9 15H3l4.6-5.7L3 3Z"/></svg></a>' +
        '<a href="#" aria-label="Instagram"><svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="2.5" y="2.5" width="11" height="11" rx="3.5" stroke="currentColor" stroke-width="1.3"/><circle cx="8" cy="8" r="2.6" stroke="currentColor" stroke-width="1.3"/><circle cx="11.4" cy="4.6" r=".8" fill="currentColor"/></svg></a>' +
      "</div>" +
      '<p class="footer__lead">Got a project? Need an Under Advantage?</p>' +
      '<h2 class="footer__big">Crafting Since 2020</h2>' +
      '<div class="footer__cols">' +
        '<div class="footer__news">' +
          "<h4>Subscribe newsletter</h4>" +
          '<p class="sub">Subscribe our newsletter to get the latest news and updates!</p>' +
          '<form class="footer__input" onsubmit="return false">' +
            '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" stroke-width="1.4"/><path d="m3 5 7 6 7-6" stroke="currentColor" stroke-width="1.4"/></svg>' +
            '<input type="email" placeholder="enter your email" aria-label="Email address">' +
            '<button type="submit" class="btn btn--primary btn--sm">Subscribe</button>' +
          "</form>" +
          '<div class="footer__brand-row"><span class="fb"><b>Flow</b>mo</span><p>Gearing your company through an innovative strategy.</p></div>' +
        "</div>" +
        '<div class="footer__links">' +
          '<div class="group"><h5>Company</h5><ul><li><a href="about.html">Who we are</a></li><li><a href="service.html">Our services</a></li><li><a href="testimonial.html">Our clients</a></li><li><a href="contact.html">Contact us</a></li></ul></div>' +
          '<div class="group"><h5>Services</h5><ul><li><a href="service.html">Planning</a></li><li><a href="service.html">Research</a></li><li><a href="service.html">Consulting</a></li><li><a href="service.html">Analysis</a></li></ul></div>' +
          '<div class="group"><h5>Customer</h5><ul><li><a href="contact.html">Client support</a></li><li><a href="contact.html">Help center</a></li><li><a href="pricing.html">System status</a></li><li><a href="blog.html">Feedback</a></li></ul></div>' +
        "</div>" +
      "</div>" +
      '<div class="footer__meta"><a href="#">Privacy policy</a><span class="divider"></span><a href="#">Terms and conditions</a><span class="divider"></span><a href="#">Copyright</a></div>' +
      '<div class="footer__signature">© 2024 JobLab is Proudly Powered by Baqir Syafi</div>' +
    "</div></footer>";

  var navSlot = document.getElementById("site-nav");
  var footSlot = document.getElementById("site-footer");
  if (navSlot) navSlot.innerHTML = navHTML;
  if (footSlot) footSlot.innerHTML = footerHTML;
})();
