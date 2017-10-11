/**
	plugin: Animated Form
	version: 01
	website: Squareplugs.com
	description: Animate form
*/

function animateForm() {
    initForm();
    $(window).on("popstate", function (event, state) {
        $('body div:last-child div:nth-child(3)').bind("DOMSubtreeModified", function(){
            initForm();
            $(this).off("DOMSubtreeModified");
        });
    });
    $('body').on('click', 'a', function() {
        $('body div:last-child div:nth-child(3)').bind("DOMSubtreeModified", function(){
            initForm();
            $(this).off("DOMSubtreeModified");
        });
    });
}

function initForm() {
var input = $('input.field-element,textarea.field-element');
$('.form-item.required :input.field-element').prop('required', true);
$('input[name="fname"],input[name="lname"]').parent().contents().filter(function () {
	return this.nodeType != 1;
}).wrap("<div class='bottom-label'></div>");
// Name (first and last)
$('input[name="fname"],input[name="lname"]').focusin(function () {
	$(this).next('.bottom-label').addClass('animate');
});
$('input[name="fname"],input[name="lname"]').focusout(function () {
	$(this).next('.bottom-label').removeClass('animate');
	checkForInputCustom(this);
});
// Phone
$('.phone :input').parent().contents().filter(function () {
	return this.nodeType != 1;
}).wrap("<div class='bottom-label-phone'></div>");

$('.phone :input').focusin(function () {
	$(this).next('.bottom-label-phone').addClass('animate');
});
$('.phone :input').focusout(function () {
	$(this).next('.bottom-label-phone').removeClass('animate');
	checkForInputCustom(this);
});
// Input and Textarea
$(input).focusin(function () {
	var inputId = $(this).attr('id');
	$(this).addClass('focused');
	$('label[for="' + inputId + '"]').addClass('focused');
});
$(input).focusout(function () {
	var inputId = $(this).attr('id');
	$(this).removeClass('focused');
	$('label[for="' + inputId + '"]').removeClass('focused');
	checkForInput(this, inputId);
});
}

function checkForInput(c, b) {
	var a = $('label[for="' + b + '"]');
	if ($(c).val().length > 0) {
		$(c).addClass("focused");
		a.addClass("focused")
	} else {
		$(c).removeClass("focused");
		a.removeClass("focused")
	}
};

function checkForInputCustom(a) {
 if ($(a).val().length > 0) {
 	$(a).addClass('focused');
    $(a).next('.bottom-label').addClass('animate');
   $(a).next('.bottom-label-phone').addClass('animate');
 }else{
    $(a).removeClass('focused');
    $(a).next('.bottom-label').removeClass('animate');
   $(a).next('.bottom-label-phone').removeClass('animate');
 }
}
