//плавний скролл та автовідступ контента від хедера після скроллу
(function($) {

    $.fn.fixedHeaderScroll = function(options) {

        var settings = $.extend({
            'headerSelector': '.header', // You need to designate the header element in your website.
            'offset': 0, // You can offset the scroll position.
            'smooth': true, // You can choose if you use smooth scroll or not.
            'smoothDuration': 300, // Scroll speed. (in ms)
            'smoothEasing': 'swing', // Scroll easing.
        }, options);

        function fixScroll(targetSlector) {
            if (settings.headerSelector == false) {
                var h = 0;
            } else {
                var headerEl = $(settings.headerSelector);
                var h = headerEl.outerHeight();
            }

            var targetEl = $(targetSlector);
            if( targetEl.length < 1) {
                return false;
            }
            var t = targetEl.offset().top;
            var s = t - h + settings.offset;

            if (settings.smooth) {
                $("html, body").stop(true, false).animate({
                    scrollTop: s
                }, settings.smoothDuration, settings.smoothEasing);
            } else {
                $("html, body").scrollTop(s);
            }
            return $(this);
        }

        this.unbind( "click.fixedHeaderScroll");
        this.bind( "click.fixedHeaderScroll", function (){
            fixScroll( $(this).attr("href"));
        });

        $(window).on('load', function() {
            if (location.hash) {
                fixScroll(location.hash);
                return false;
            }
        });

    };
})(jQuery);

//налаштування переходу по якорю, щоб решітка не відображалася в адресному рядку після переходу:
$('a[href^="#"]').bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
    }, 750);
    e.preventDefault();
});