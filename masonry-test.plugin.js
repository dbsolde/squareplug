function initMasonryFadeIn() {
    fadeIdOnScroll();
    $(window).on("popstate", function (event, state) {
        $('body div:last-child div:nth-child(3)').bind("DOMSubtreeModified", function(){
            fadeIdOnScroll();
            $(this).off("DOMSubtreeModified");
        });
    });
    $('body').on('click', 'a', function() {
        $('body div:last-child div:nth-child(3)').bind("DOMSubtreeModified", function(){
            fadeIdOnScroll();
            $(this).off("DOMSubtreeModified");
        });
    });
}

function fadeIdOnScroll(){
$( window ).scroll(function() {
        $('.sqs-gallery-design-grid-slide').each( function(i){
            var marginWrapper = $(this).children('.margin-wrapper');
            var anchor = marginWrapper.children('.image-slide-anchor');
            var img = anchor.children('.thumb-image');
            var imageSlideTitle = marginWrapper.children('.image-slide-title');
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).addClass('fadeIn');
                $('.fadeIn').css({
                      '-webkit-animation-name': 'zoomIn',
                      'animation-name': 'zoomIn',
                      '-webkit-animation-duration': '0.4s',
                      'animation-duration': '0.4s',
                      '-webkit-animation-delay': '0.2s',
                      'animation-delay': '0.2s',
                      '-webkit-animation-fill-mode': 'both',
                      'animation-fill-mode': 'both'
                });
                $(this).on('mouseover', function (){
                    
                    if($(this).hasClass('fadeIn')){
                        imageSlideTitle.css('z-index', 99);
                        anchor.css('z-index', 999);
                        img.css({
                            'opacity': '0.5',
                            'transition': 'opacity 0.2s ease-out',
                            'z-index': 999
                        });
                    }
                }).on('mouseout', function() {
                    if($(this).hasClass('fadeIn')){
                        imageSlideTitle.css('z-index', -1);
                        img.css({
                            'opacity': 1,
                            'transition': 'opacity 0.1s ease-in'
                        });
                    }      
                });
            }
        });
 });
}
