$(document).ready(function() {
    $('.header__burger, .header__link').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $(window).on('scroll', function() {
        $('#container').css({
            opacity: 0.5,
        })
    });
    $(".details-btn").click(function(){
        $(".details-content").fadeToggle(500);
    });
});