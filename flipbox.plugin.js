/**
* @plugin: Flipbox
* @version: 0.1
* @website: Squareplugs.com
* @description: Flipbox Plugin for Squarespace
* @author: Zeddicus Zu'l Zorander <jimenez.phillip.felicidario@gmail.com>
*/

function setFlipbox(e) {
	void 0 === e ? console.error("Flipbox Parameters is undefined.") : (callFlipbox(e), $(window).on("popstate", function (i, t) {
		$("body div:last-child div:nth-child(3)").bind("DOMSubtreeModified", function () {
			callFlipbox(e), $(this).off("DOMSubtreeModified")
		})
	}), $("body").on("click", "a", function () {
		$("body div:last-child div:nth-child(3)").bind("DOMSubtreeModified", function () {
			callFlipbox(e), $(this).off("DOMSubtreeModified")
		})
	}))
}

function callFlipbox(e) {
	$.getScript('https://cdn.rawgit.com/nnattawat/flip/master/dist/jquery.flip.min.js', function () {
		$(e).each(function (e, i) {
			$(".menu").each(function (e, t) {
				var n = $(this).attr("class").split(" ")[1];
				if ($(this).hasClass(n) && -1 != n.indexOf(i)) {
					$("." + n + " .menu-section").parent().parent().parent().parent().parent().removeClass("sqs-block");
					var s = $("." + n + " .menu-section").children().children();
					s.attr("style") || (s.flip({
						axis: "y",
						trigger: "hover",
						reverse: !0,
						speed: 0
					}), setFlipboxStyle(i))
				}
			})
		});
	});
}

function setFlipboxStyle(e) {
	var i = $('.menu-block .menu-style-classic div[class^="menu menu-' + e + '-"]'),
		t = i.children(".menu-section").children(".menu-items"),
		n = t.children(".menu-item"),
		s = n.children("div"),
		o = s.children("a"),
		l = n.children(".menu-item-title"),
		c = l.children(".front").children(".inner"),
		a = n.children(".menu-item-description"),
		d = a.children(".back").children(".inner");
	i.css({
		width: "100%"
	}), t.css({
		height: "230px",
		"-webkit-column-width": "auto",
		"-webkit-column-gap": "auto",
		"-moz-column-width": "auto",
		"-moz-column-gap": "auto",
		"-ms-column-width": "auto",
		"-ms-column-gap": "auto",
		"-o-column-width": "auto",
		"-o-column-gap": "auto",
		"column-width": "auto",
		"column-gap": "auto"
	}), n.css({
		"float": "left",
		position: "relative",
		width: "25%",
		height: "100%",
		"transform-style": "preserve-3d",
		"-webkit-transform-style": "preserve-3d",
		perspective: "1000px",
		"-webkit-perspective": "1000px"
	}), s.css({
		position: "absolute",
		left: "0",
		top: "0",
		width: "100%",
		height: "100%"
	}), o.css({
		"float": "left",
		perspective: "1000px"
	}), l.css({}), c.css({
		transform: "translateX(0px) translateZ(60px) scale(.94)"
	}), a.css({
		"margin-top": "0",
		"margin-right": "0",
		"display":"block"
	});
	var r = navigator.userAgent.toLowerCase(); - 1 !== r.indexOf("safari") && -1 !== r.indexOf("8.0") && -1 === r.indexOf("chrome") && a.css({
		"z-index": "1"
	}), d.css({
		transform: "translateX(0px) translateY(15px) translateZ(60px) scale(.94)"
	}), setFlipboxStyleByWindow(i, n), $(window).resize(function () {
		setFlipboxStyleByWindow(i, n)
	})
}

function setFlipboxStyleByWindow(e, i) {
	var t = $(window).width();
	t > 768 && (1 === i.length ? i.css({
		width: "100%"
	}) : 2 === i.length ? i.css({
		width: "50%"
	}) : 3 === i.length ? i.css({
		width: "33.3%"
	}) : i.css({
		width: "25%"
	})), 768 >= t && (e.css({
		padding: "0",
		width: "100%"
	}), i.css({
		width: "50%"
	})), 376 >= t && i.css({
		padding: "0",
		width: "100%"
	})
}
