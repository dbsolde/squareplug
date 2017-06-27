/**
	plugin: Simple Tab
	version: 01
	website: Squareplugs.com
	description: Simple Tab for Squarespace
*/

function initTabs(a){
	void 0 === a ? console.error("Simple Tab parameters is undefined.") : 
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
		tab_class.removeClass('current');
		$('.tab-content').removeClass('current');
		$(this).addClass('current');
	    $("#"+tab_id).addClass('current');
	});
	var drawer_class = $(".tab-drawer-heading");
	drawer_class.click(function () {
		$(".tab-content").hide();
		var d_activeTab = $(this).attr("data-tab");
		$("#" + d_activeTab).fadeIn();
		drawer_class.removeClass("active-accordion");
		$(this).addClass("active-accordion");
		$("ul.tabs li").removeClass("current");
		$("ul.tabs li[data-tab^='" + d_activeTab + "']").addClass("current");
	});
}
