/**
	plugin: Animated Form
	version: 01
	website: Squareplugs.com
	description: Animate form
*/

function animateForm(b){void 0===b?console.error("Slider Tab parameters is undefined."):(initForm(b),$(window).on("popstate",function(c,a){$("body div:last-child div:nth-child(3)").bind("DOMSubtreeModified",function(){initForm(b),$(this).off("DOMSubtreeModified")})}),$("body").on("click","a",function(){$("body div:last-child div:nth-child(3)").bind("DOMSubtreeModified",function(){initForm(b),$(this).off("DOMSubtreeModified")})}))}function initForm(b){var c=$(b);$(".form-item.required :input.field-element").prop("required",true);$(c).focusin(function(){var a=$(this).attr("id");$(this).addClass("focused");$('label[for="'+a+'"]').addClass("focused")});$(c).focusout(function(){var a=$(this).attr("id");$(this).removeClass("focused");$('label[for="'+a+'"]').removeClass("focused");checkForInput(this,a)})}function checkForInput(c,b){const a=$('label[for="'+b+'"]');if($(c).val().length>0){$(c).addClass("focused");a.addClass("focused")}else{$(c).removeClass("focused");a.removeClass("focused")}};
