/**
	plugin: Tab slider
	version: 02
	website: Squareplugs.com
	description: Tab slider Squarespace
*/

function initsliderTab(a){
	void 0 === a ? console.error("Slider Tab parameters is undefined.") : 
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
	var tab_class = $('ul.slider-tab li');
	tab_class.click(function(){
			var tab_id = $(this).attr('data-tab');
			$('ul.slider-tab li').removeClass('slider-tab-current');
			$('.slider-tab-content').removeClass('slider-tab-current');
			$(this).addClass('slider-tab-current');
		    $("#"+tab_id).addClass('slider-tab-current');
		});	

	$("ul.slider-tab").append("<li class='"+tab+"'></li>");
    var currentWidth = $(".current_page_item").outerWidth();
    $("."+tab).css({
		width: currentWidth
	});
    tab_class.find("span").click(function (e) {
		var leftPos = $(this).position().left;
		var newWidth = $(this).parent().width();
		$("."+tab).stop().animate({
		    left: leftPos,
		    width: newWidth
		});
    });
}
