/**
	plugin: Tabs
	version : 02
	website: Squareplugs.com
	description: Tabs for Squarespace
*/

function initTabsV2(a) {
	void 0 === a ? console.error("Tabs parameters is undefined.") :
		(tabsFn(a), $(window).on("popstate", function (i, t) {
			$("body div:last-child div:nth-child(3)").bind("DOMSubtreeModified", function () {
				tabsFn(a), $(this).off("DOMSubtreeModified")
			})
		}), $("body").on("click", "a", function () {
			$("body div:last-child div:nth-child(3)").bind("DOMSubtreeModified", function () {
				tabsFn(a), $(this).off("DOMSubtreeModified")
			})
		}))
}

function tabsFn(tab) {
	var tab_class = $('ul.' + tab + ' li');
	tab_class.click(function () {
		var tab_id = $(this).attr('data-tab');
		tab_class.removeClass('current2');
		$('.tab-content2').removeClass('current2');
		$(this).addClass('current2');
		$("#" + tab_id).addClass('current2');
	});
	$("ul li").click(function (e) {
		if ($(this).hasClass('slider')) {
			return;
		}
		var whatTab = $(this).index();
		var howFar = 88 * whatTab;
		$(".slider").css({
			left: howFar + "px"
		});
	});
}
