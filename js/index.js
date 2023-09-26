$(document).ready(function() {
    $('.header__link, .btn').fixedHeaderScroll( {
        headerSelector: 'header',
        offset: 0,
        offset: $('.header').offsetHeight,
        smooth: true,
        smoothDuration: 500,
        smoothEasing: 'swing',
    });

    $('.header__burger, .header__link, #BtnCta1').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $(window).on('scroll', function() {
        $('#container').css({
            opacity: 0.5,
        })
    });

    $(".details-content").hide();
    $("#DetailsBtn1").click(function(){
        $(".arrow").toggleClass("active-arrow");
        $("#DetailsContent1").fadeToggle(300);
    });
    $("#DetailsBtn2").click(function(){
        $(".arrow").toggleClass("active-arrow");
        $("#DetailsContent2").fadeToggle(300);
    });
    $("#DetailsBtn3").click(function(){
        $(".arrow").toggleClass("active-arrow");
        $("#DetailsContent3").fadeToggle(300);
    });
});

const request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});