/**
    plugin: Typing Animation
    version: 01
    website: Squareplugs.com
    description: Typing animation for Squareplugs
    *credits to typed.js
*/
function initTypingAnimation(strings) {
    void 0 === strings ? console.error("Typing Animation parameters is undefined.") : 
    (typingAnimationFn(strings), $(window).on("popstate", function (i, t) {
        $("body div:last-child div:nth-child(3)").bind("DOMSubtreeModified", function () {
            typingAnimationFn(strings), $(this).off("DOMSubtreeModified")
        })
    }), $("body").on("click", "a", function () {
        $("body div:last-child div:nth-child(3)").bind("DOMSubtreeModified", function () {
            typingAnimationFn(strings), $(this).off("DOMSubtreeModified")
        })
    }))
}

function typingAnimationFn(strings){
    $.getScript('https://cdn.rawgit.com/mattboldt/typed.js/75c41293/lib/typed.min.js', function () {
        var splitStrings = strings.split(",");
        var animateStrings = new Typed('#animate-strings', {
            strings:  splitStrings,
            backDelay: 1000, 
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        });
    });
}