/**
	plugin: Pricing Table
	version: 01
	website: Squareplugs.com
	description: Pricing Table for Squarespace
*/
function initPricingTable(a) {
  void 0 === a ? console.error("Pricing table parameter is undefined.") : 
	(pricingTableFn(a), $(window).on("popstate", function (e, a) {
		$("body div:last-child div:nth-child(3)").bind("DOMSubtreeModified", function () {
			pricingTableFn(a), $(this).off("DOMSubtreeModified")
		})
	}), $("body").on("click", "a", function () {
		$("body div:last-child div:nth-child(3)").bind("DOMSubtreeModified", function () {
			pricingTableFn(a), $(this).off("DOMSubtreeModified")
		})
	}))
}

function pricingTableFn(item){
	$('.' + item).hover(function() {
		if ($(this).hasClass('default')) {
			$('.default').addClass('active');
		} else {
			$(this).addClass("active");
			$('.default').removeClass('active');
		}
	}, function() {
		if ($(this).hasClass('default')) {
			$(this).addClass("active");
		} else {
			$(this).removeClass("active");
			$('.default').addClass('active');
		}
	});
}
