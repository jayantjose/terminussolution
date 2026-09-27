$(document).ready(function () {
    // Smooth scrolling for menu items
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80 // Adjust for sticky header if any
            }, 1000);

            // Close mobile menu if open
            $('.navigation').removeClass('active');
        }
    });

    // Mobile Menu Toggle
    $('.menu-toggle').click(function () {
        $('.navigation').toggleClass('active');
    });
});
