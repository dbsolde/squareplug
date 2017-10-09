/**
	plugin: Animated Form
	version: 01
	website: Squareplugs.com
	description: Animate form
*/

function animateForm(a) {
	void 0 === a ? console.error("Slider Tab parameters is undefined.") :
		(initForm(a), $(window).on("popstate", function (i, t) {
			$("body div:last-child div:nth-child(3)").bind("DOMSubtreeModified", function () {
				initForm(a), $(this).off("DOMSubtreeModified")
			})
		}), $("body").on("click", "a", function () {
			$("body div:last-child div:nth-child(3)").bind("DOMSubtreeModified", function () {
				initForm(a), $(this).off("DOMSubtreeModified")
			})
		}))
}

function initForm(a){
   var input = $(a);
        $('.form-item.required :input.field-element').prop('required',true);
    $(input).focusin(function() {
        var inputId = $(this).attr('id');
        $(this).addClass('focused');
        $('label[for="'+inputId+'"]').addClass('focused');
    });
  	$(input).focusout(function() {
        var inputId = $(this).attr('id');
        $(this).removeClass('focused');
        $('label[for="'+inputId+'"]').removeClass('focused');
        checkForInput(this,inputId);
    });
}

function checkForInput(element,inputId) { 
  const $label = $('label[for="'+inputId+'"]');
  if ($(element).val().length > 0) {
    $(element).addClass('focused');
    $label.addClass('focused');
  } else {
    $(element).removeClass('focused');
    $label.removeClass('focused');
  }
}
