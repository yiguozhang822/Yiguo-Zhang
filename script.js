// Reveal elements as they enter the viewport.
(function () {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll(".reveal");

  if (reduce || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("in-view"); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18, rootMargin: "0px 0px -10% 0px" });

    revealEls.forEach(function (el) { revealObserver.observe(el); });
  }

  // Light up the rail dot for the section currently in view.
  var sections = document.querySelectorAll("main > section[id]");
  var dots = document.querySelectorAll(".rail__dot");

  function dotFor(id) {
    for (var i = 0; i < dots.length; i++) {
      if (dots[i].getAttribute("href") === "#" + id) return dots[i];
    }
    return null;
  }

  if ("IntersectionObserver" in window) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          dots.forEach(function (d) { d.classList.remove("is-active"); });
          var active = dotFor(entry.target.id);
          if (active) active.classList.add("is-active");
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(function (s) { sectionObserver.observe(s); });
  }
})();
