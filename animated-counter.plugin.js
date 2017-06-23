/**
	plugin: Animated Counter
	version: 01
	website: Squareplugs.com
	description: Animated counter for Squarespace
*/

function initAnimatedCounter(a) {
  void 0 === a ? console.error("Animated counter parameters is undefined.") : 
	(animateCounterFn(a), $(window).on("popstate", function (i, t) {
		$("body div:last-child div:nth-child(3)").bind("DOMSubtreeModified", function () {
			animateCounterFn(a), $(this).off("DOMSubtreeModified")
		})
	}), $("body").on("click", "a", function () {
		$("body div:last-child div:nth-child(3)").bind("DOMSubtreeModified", function () {
			animateCounterFn(a), $(this).off("DOMSubtreeModified")
		})
	}))
}

function animateCounterFn(animationDuration){
	$('.counter-container').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible){
			$(this).find('.counter-box h1').each(function () {
				var $this = $(this);
				$({
					Counter: 0
				}).animate({
					Counter: $this.text()
				}, {
					duration: animationDuration,
					easing: 'swing',
					step: function () {
						$this.text(Math.ceil(this.Counter));
					}
				});
			});
			$(this).unbind('inview');
		}
	});
}
