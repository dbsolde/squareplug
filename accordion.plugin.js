/**
	plugin: Accordion
	version: 01
	website: Squareplugs.com
	description: Accordion for Squarespace
*/

function initAccordion(a) {
	void 0 === a ? console.error("Accordion parameters is undefined.") :
		(accordionFn(a), $(window).on("popstate", function (i, t) {
			$("body div:last-child div:nth-child(3)").bind("DOMSubtreeModified", function () {
				accordionFn(a), $(this).off("DOMSubtreeModified")
			})
		}), $("body").on("click", "a", function () {
			$("body div:last-child div:nth-child(3)").bind("DOMSubtreeModified", function () {
				accordionFn(a), $(this).off("DOMSubtreeModified")
			})
		}))
}

function accordionFn(c) {
	var allAccordions = $('.' + c + ' p.data');
	var allAccordionItems = $('.' + c + ' .accordion-item');
	$('.' + c + ' > .accordion-item').click(function () {
		if ($(this).hasClass('open')) {
			$(this).removeClass('open');
			$(this).next().slideUp(400);
		} else {
			allAccordions.slideUp(400);
			allAccordionItems.removeClass('open');
			$(this).addClass('open');
			$(this).next().slideDown(400);
			return false;
		}
	});
}
