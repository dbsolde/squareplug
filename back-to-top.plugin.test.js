/**
	plugin: Back to Top
	version: 01
	website: Squareplugs.com
	description: Back to top for Squarespace
*/
function initBackToTop(e) {
	$('.container').bind("DOMSubtreeModified", backToTopfn(e));

function backToTopFn(value) {
	if ($('#back-to-top').length) {
		var scrollTrigger = value,
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('#back-to-top').addClass('show');
				} else {
					$('#back-to-top').removeClass('show');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('#back-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}
}
