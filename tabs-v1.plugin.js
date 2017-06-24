/**
	plugin: Tabs
	version: 01
	website: Squareplugs.com
	description: Tabs for Squarespace
*/

function initTabsV1(a){
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

function tabsFn(tab){
		var tab_class = $('ul.'+tab+' li');
		tab_class.click(function(){
			var tab_id = $(this).attr('data-tab');
			tab_class.removeClass('current1');
			$('.tab-content1').removeClass('current1');
			$(this).addClass('current1');
	    	$("#"+tab_id).addClass('current1');
		})
}
