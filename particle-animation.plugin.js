/**
* @plugin: Particles Animation
* @version: 0.1
* @website: Squareplugs.com
* @description: Particles Animation Plugin for Squarespace
* @author: Zeddicus Zu'l Zorander <jimenez.phillip.felicidario@gmail.com>
*/


function setParticlesAnimation(e, a) {
	void 0 === e.particles ? console.error("Particles Animation Parameters is undefined.") : (callParticlesAnimation(e, a, visibleTo), $(window).on("popstate", function (i, n) {
		$("body div:last-child div:nth-child(3)").bind("DOMSubtreeModified", function () {
			callParticlesAnimation(e, a, visibleTo), $(this).off("DOMSubtreeModified")
		})
	}), $("body").on("click", "a", function () {
		$("body div:last-child div:nth-child(3)").bind("DOMSubtreeModified", function () {
			callParticlesAnimation(e, a, visibleTo), $(this).off("DOMSubtreeModified")
		})
	}))
}

function callParticlesAnimation(e, a, visibleTo) {
	var showParticleAnimationDiv = visibleTo ? "."+visibleTo : "body";
  	// browser check
	var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
	var is_safari = navigator.userAgent.indexOf("Safari") > -1;	
	if ((is_chrome)&&(is_safari)) {is_safari=false;}
	if( is_safari ){ $('html').addClass('safari'); }
	var i = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
	if (!i || is_safari) {
		var n = window.location.pathname,
			t = '<div id="ajax-content-wrap" style="position: relative; left: 0; top: 0; z-index: 0;width: 100%; height: 100%;"><div class="blurred-wrap"><div class="nectar-box-roll"><div class="fullscreen-header" data-alignment="center" data-alignment-v="bottom" data-animate-in-effect="none" data-bg-pos="center" data-height="0" data-midnight="light" data-parallax="0" data-text-effect="rotate_in" id="page-header-bg" style="height: 0;"><div class="scroll-down-wrap hidden"><a class="section-down-arrow" style="cursor: pointer; outline: none"><i class="fa fa-angle-down"></i></a></div><div class="nectar-particles" data-disable-explosion="off" data-rotation-timing="5000"><div class="canvas-bg"><canvas data-active-index="0" id="particlesCanvas"></canvas></div><div class="overlaid-content" data-alignment="center" data-alignment-v="bottom" data-text-effect="rotate_in"><div class="container"><div class="row" style="top: 0px; visibility: visible;"><div class="col span_6"></div></div></div><div class="pagination-navigation"><div class="pagination-dots"></div></div><svg version="1.1" width="690" xmlns="http://www.w3.org/2000/svg"><defs><filter id="goo"><fegaussianblur in="SourceGraphic" result="blur" stddeviation="10"></fegaussianblur><fecolormatrix in="blur" mode="matrix" result="goo" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 69 -16"></fecolormatrix><fecomposite in="SourceGraphic" in2="goo" operator="atop"></fecomposite></filter></defs></svg></div></div></div></div></div></div>';
		if (0 === $("#ajax-content-wrap").length && $(showParticleAnimationDiv).prepend(t), 0 !== $("#ajax-content-wrap").length) {
			$("#ajax-content-wrap").show();
			var o = "";
			$(e.particles).each(function (a, i) {
				var n = a + 1;
				if (void 0 === i.background) return console.error("Particles Animation Background is undefined."), !1;
				if (void 0 === i.color) return console.error("Particles Animation Color is undefined."), !1;
				if (void 0 === i.image_src) return console.error("Particles Animation Image Source is undefined."), !1;
				var t = void 0 === i.image_map ? "original" : i.image_map,
					s = void 0 === i.density ? 13 : i.density,
					r = void 0 === i.max_size ? 3 : i.max_size,
					c = '<div class="shape" data-alpha="original" data-bg-color="' + i.background + '" data-color="' + i.color + '" data-color-mapping="' + t + '" data-density="' + s + '" data-max-size="' + r + '" data-src="' + i.image_src + '"></div>',
					d = void 0 === i.title ? "" : i.title,
					l = void 0 === i.sub_title ? "" : i.sub_title,
					p = '<div class="inner-wrap shape-' + n + '"><h1>' + d + '</h1><span class="subheader">' + l + "</span></div>";
				o += c + p, void 0 !== e.navigation && e.navigation === !0 && 0 === $(".pagination-navigation").children(".pagination-current").length && $(".pagination-navigation").append('<div class="pagination-current"></div>')
			}), 0 === $(".shape").length && 0 === $(".inner-wrap").length && $(".nectar-particles .overlaid-content .container .row .span_6").append(o), void 0 !== e.navigation && e.navigation === !0 && 0 === $(".pagination-dot").length && $(e.particles).each(function (e, a) {
				$(".pagination-navigation .pagination-dots").append('<button class="pagination-dot" style="opacity: 1"></button>')
			}), void 0 !== e.scroll_down_button && $(".section-down-arrow .fa-angle-down").css(e.scroll_down_button)
		}
		var s = $(".fullscreen-header"),
			r = ["#siteWrapper header", "#canvasWrapper header", "#canvas header", "#site header", ".Site header"];
		if (-1 === a.indexOf(n)) s.stop().animate({
			height: 0
		}, 500, function () {
			$("#ajax-content-wrap").hide(), $(".shape, .inner-wrap").remove(), $(r.join() + ",.Site .sqs-announcement-bar-dropzone").css({
				top: "0"
			})
		}), $(".Site .Content-outer").stop().animate({
			"margin-top": 0
		}), localStorage.getItem("prev_page") || localStorage.setItem("prev_page", n);
		else {
			$("body").on("click", ".sqs-announcement-bar-close", function () {
				$("#ajax-content-wrap").css({
					"z-index": "1"
				}), $(r.join()).css({
					"z-index": "2"
				})
			});
			var c = localStorage.getItem("squarespace-announcement-bar") ? JSON.parse(localStorage.getItem("squarespace-announcement-bar")) : void 0;
			void 0 !== c && void 0 !== c.closed && c.closed === !0 && ($("#ajax-content-wrap").css({
				"z-index": "1"
			}), $(r.join()).css({
				"z-index": "2"
			}));
			var d = localStorage.getItem("prev_page") ? 500 : 1500;
			localStorage.removeItem("prev_page"), s.stop().animate({
				height: $(window).height()
			}, d, function () {
				$(this).attr("data-height", $(window).height())
			}), $(window).width() < 640 ? ($(".Site .Content-outer").stop().animate({
				"margin-top": "0"
			}), $(".Site .sqs-announcement-bar-dropzone").css({
				top: 0
			}), $(r.join()).css({
				top: 0
			}), $("#sidecarNav").length > 0 && $("body").on("click", ".mobile-nav-toggle", function () {
				$("#sidecarNav").css({
					"z-index": "1"
				})
			}), $("#overlayNav").length > 0 && $(".mobile-nav-toggle-label").click(function () {
				"inline-block" === $("#siteTitleWrapper").css("display") ? $("#siteTitleWrapper").css("display", "none") : $("#siteTitleWrapper").css("display", "inline-block")
			})) : ($(".Site .Content-outer").stop().animate({
				"margin-top": "-180px"
			}), $(r.join() + ",.Site .sqs-announcement-bar-dropzone").css({
				top: -$(window).height()
			})), $(".Site .sqs-announcement-bar-dropzone").css({
				position: "relative",
				left: "0"
			}), $(r).each(function (e, a) {
				$(a).length > 0 && ($(a).css("position") && "static" !== $(a).css("position") || $(a).css({
					position: "relative",
					left: "0"
				}))
			}), $(".Site header").css({
				"background-color": "transparent"
			}), $("#canvas #headerWrapper header").css({
				top: "0"
			}), $(window).resize(function () {
				-1 !== a.indexOf(window.location.pathname) && (s.attr("data-height", $(window).height()), s.css({
					height: $(window).height()
				}), $(window).width() < 640 ? ($(r.join() + ",.Site .sqs-announcement-bar-dropzone").css({
					top: 0
				}), $(".Site .Content-outer").css({
					"margin-top": 0
				}), $("#canvas #headerWrapper header").css({
					top: "0"
				}), $("#sidecarNav").length > 0 && $("body").on("click", ".mobile-nav-toggle", function () {
					$("#sidecarNav").css({
						"z-index": "1"
					})
				}), $("#overlayNav").length > 0 && $(".mobile-nav-toggle-label").click(function () {
					"inline-block" === $("#siteTitleWrapper").css("display") ? $("#siteTitleWrapper").css("display", "none") : $("#siteTitleWrapper").css("display", "inline-block")
				})) : ($(r.join() + ",.Site .sqs-announcement-bar-dropzone").css({
					top: -$(window).height()
				}), $(".Site .Content-outer").css({
					"margin-top": "-180px"
				}), $("#canvas #headerWrapper header").css({
					top: "0"
				})))
			}), $("body").on("click", ".section-down-arrow", function () {
				return $("body").stop().animate({
					scrollTop: $(window).height() + 1
				}, 500), !1
			})
		}
	}
}
