$(window).scroll(function () {
    if ($(this).scrollTop() > 0) { $('.header-top, .nav').addClass('fixed'); }
    else { $('.header-top, .nav').removeClass('fixed'); }
});

$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 80, }, 300,)
});
