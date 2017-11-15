function initShuffle() {
	void 0 === a ? console.error("Shuffle parameters is undefined.") :
		(chafflefnc(), $(window).on("popstate", function (i, t) {
			$("body div:last-child div:nth-child(3)").bind("DOMSubtreeModified", function () {
				chafflefnc(), $(this).off("DOMSubtreeModified")
			})
		}), $("body").on("click", "a", function () {
			$("body div:last-child div:nth-child(3)").bind("DOMSubtreeModified", function () {
				chafflefnc(), $(this).off("DOMSubtreeModified")
			})
		}))
}

function chafflefnc(){
  $.getScript('https://cdn.rawgit.com/blivesta/chaffle/master/chaffle.min.js', function () {
      var elements = document.querySelectorAll('[data-chaffle]');
      Array.prototype.forEach.call(elements, function (el) {
        var chaffle = new Chaffle(el)
        el.addEventListener('mouseover', function () {
          chaffle.init();
        });
      });
  });    
}
