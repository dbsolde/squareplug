/**
    plugin: Typing Animation
    version: 01
    website: Squareplugs.com
    description: Typing animation for Squareplugs
    *credits to typed.js
*/
function initTypingAnimation(strings,typeSpeed,backSpeed,backDelay) {
    void 0 === strings ? console.error("Typing Animation parameters is undefined.") : 
    (typingAnimationFn(strings,typeSpeed,backSpeed,backDelay), $(window).on("popstate", function (i, t) {
        $("body div:last-child div:nth-child(3)").bind("DOMSubtreeModified", function () {
            typingAnimationFn(strings,typeSpeed,backSpeed,backDelay), $(this).off("DOMSubtreeModified")
        })
    }), $("body").on("click", "a", function () {
        $("body div:last-child div:nth-child(3)").bind("DOMSubtreeModified", function () {
            typingAnimationFn(strings,typeSpeed,backSpeed,backDelay), $(this).off("DOMSubtreeModified")
        })
    }))
}

function typingAnimationFn(strings,typeSpeed,backSpeed,backDelay){
    $.getScript('https://cdnjs.cloudflare.com/ajax/libs/typed.js/1.1.1/typed.min.js', function () {       
        $('#animate-strings').typed({
		strings: strings,
		typeSpeed: typeSpeed,
		backDelay: backDelay,
            	backSpeed: backSpeed,
            	loop: true
	});
    });
}
