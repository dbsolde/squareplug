/**
	plugin: Tabs
	version: 01
	website: Squareplugs.com
	description: Tabs for Squarespace
*/

function initTabs(a,v){
	void 0 === a ? console.error("Tabs parameters is undefined.") : 
	(tabsFn(a,v), $(window).on("popstate", function (i, t) {
		$("body div:last-child div:nth-child(3)").bind("DOMSubtreeModified", function () {
			tabsFn(a,v), $(this).off("DOMSubtreeModified")
		})
	}), $("body").on("click", "a", function () {
		$("body div:last-child div:nth-child(3)").bind("DOMSubtreeModified", function () {
			tabsFn(a,v), $(this).off("DOMSubtreeModified")
		})
	}))
}

function tabsFn(tab,version){
	if(version==1){
		tabCurrState(tab,version);
	}else{
		tabCurrState(tab,version);
		$("ul li").click(function(e) {
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
}

function tabCurrState(tab,version){
	var tab_class = $('ul.'+tab+' li');
	tab_class.click(function(){
		var tab_id = $(this).attr('data-tab');
		tab_class.removeClass('current');
		$('.tab-content'+version).removeClass('current');
		$(this).addClass('current');
	    $("#"+tab_id).addClass('current');
	});
}
