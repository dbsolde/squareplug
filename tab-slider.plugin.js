/**
	plugin: Tab slider
	version: 02
	website: Squareplugs.com
	description: Tab slider for Squarespace
*/

function initsliderTab(a){
	void 0 === a ? console.error("Simple Tab parameters is undefined.") : 
	(sliderTab(a), $(window).on("popstate", function (i, t) {
		$("body div:last-child div:nth-child(3)").bind("DOMSubtreeModified", function () {
			sliderTab(a), $(this).off("DOMSubtreeModified")
		})
	}), $("body").on("click", "a", function () {
		$("body div:last-child div:nth-child(3)").bind("DOMSubtreeModified", function () {
			sliderTab(a), $(this).off("DOMSubtreeModified")
		})
	}))
}

function sliderTab(tab){
	var leftPos, newWidth;
	$('ul.tabs-v2 li').click(function(){
			var tab_id = $(this).attr('data-tab');
			$('ul.tabs-v2 li').removeClass('current2');
			$('.tab-content2').removeClass('current2');
			$(this).addClass('current2');
		    $("#"+tab_id).addClass('current2');
		});	

	$("ul.tabs-v2").append("<li class='"+tab+"'></li>");
    var currentWidth = $(".current_page_item").outerWidth();
    $("."+tab).css({
		width: currentWidth
	});
    $("ul.tabs-v2 li").find("span").click(function (e) {
		var leftPos = $(this).position().left;
		var newWidth = $(this).parent().width();
		$("."+tab).stop().animate({
		    left: leftPos,
		    width: newWidth
		});
    });
}
