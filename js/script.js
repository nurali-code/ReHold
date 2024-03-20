$(window).scroll(function () {
    if ($(this).scrollTop() > 0) { $('.header-top, .nav').addClass('fixed'); }
    else { $('.header-top, .nav').removeClass('fixed'); }
});

$('.tab__btn').on('click', function (e) {
    $('.tab__btn').removeClass('active');
    $(this).addClass('active');
    const trId = $(this).attr('data-filter-btn');
    $('.dual tbody tr').fadeOut()
    $('[data-filter=' + trId + ']').fadeIn()

});
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 80, }, 300,)
});
