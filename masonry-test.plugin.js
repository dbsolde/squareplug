function fadeIdOnScroll(){
$( window ).scroll(function() {
        $('.sqs-gallery-design-grid-slide').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).addClass('fadeIn');
            }
        });
 });
}
