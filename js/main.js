(function () {
  window.addEventListener("load", function () {
    var navLinks = document.querySelectorAll("header a");
    var getActiveLink = navLinks.forEach((item) => {
      if (item.href === window.location.href) {
        item.classList.add("active");
      }
    });
  });
})();