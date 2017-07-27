/**
* @plugin: Vertical Timeline
* @version: 0.1
* @website: Squareplugs.com
* @description: Vertical Timeline Plugin for Squarespace
*/

function initVerticalTimeline(t) {
	void 0 === t ? console.error("ImageFadeOnScroll Parameters is undefined.") : (VerticalTimelineEffect(t), $(window).on("popstate", function (i, n) {
		$("body div:last-child div:nth-child(3)").bind("DOMSubtreeModified", function () {
			VerticalTimelineEffect(t), $(this).off("DOMSubtreeModified")
		})
	}), $("body").on("click", "a", function () {
		$("body div:last-child div:nth-child(3)").bind("DOMSubtreeModified", function () {
			VerticalTimelineEffect(t), $(this).off("DOMSubtreeModified")
		})
	}))
}

function VerticalTimelineEffect(t) {
	var i = {};
	$("img").each(function (n, e) {
		var a = $(this).attr("data-src");
		if (void 0 !== a) {
			var r = a.split("/"),
				o = r[r.length - 1];
			if (-1 !== t.indexOf(o)) {
				var s = $(this).offset().left,
					d = $(this).parent().parent().parent().parent().parent().parent().parent().width() / 2;
				d > s ? $(this).parent().parent(".intrinsic").css({
					"margin-left": "-" + $(this).width() / 3 + "px"
				}) : $(this).parent().parent(".intrinsic").css({
					"margin-left": $(this).width() / 3 + "px"
				}), i[n] = $(this).attr("src"), $(this).parent().parent(".intrinsic").css({
					"opacity": "0",
					"width": "90%",
					"height": "auto"
				})
			}
		}
	}), $(window).on("scroll", function () {
		$("img").each(function (n, e) {
			var a = $(this).parent().parent(".intrinsic"),
				r = $(this).attr("data-src");
			if (void 0 !== r) {
				var o = r.split("/"),
					s = o[o.length - 1];
				if (-1 !== t.indexOf(s)) {
					var d = $(this).offset().top + $(this).outerHeight(),
						l = $(window).scrollTop() + $(window).height(),
						c = ($(this).offset().left, $(this).parent().parent().parent().parent().parent().parent().parent().width() / 2, l - $(window).height() + $(window).height() / 2);
					l > d && d > c && $("<img/>").on("load", function () {
						a.css({
							"transition": "margin-left 0.3s ease-in",
							"-webkit-transition": "margin-left 0.3s ease-in",
							"margin-left": "0"
						}).fadeTo("slow", 1)
					}).attr("src", i[n])
				}
			}
		})
	})
}
