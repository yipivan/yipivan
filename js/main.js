$(document).ready(function() {
    var scroll = new SmoothScroll('a[href*="#"]');
    var options = {
        strings: ["My name is Ivan, a web developer.", "I build mobile apps and websites", "Please feel free to take a look on my projects", "Have a good day"],
        typeSpeed: 40
      }
    var typed = new Typed(".typed", options);
    $(document).on('scroll', function (e) {
        $('.navbar').css('opacity', ($(document).scrollTop() / 1000));
    });
})
