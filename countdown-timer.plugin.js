/**
	plugin: Countdown Timer
	website: Squareplugs.com
	description: Countdown timer for Squarespace
*/

function initCountdownTimer(t) {
  void 0 === t ? console.error("Countdown timer parameters is undefined.") : 
	(initializeClock(t), $(window).on("popstate", function (i, t) {
		$("body div:last-child div:nth-child(3)").bind("DOMSubtreeModified", function () {
			initializeClock(t), $(this).off("DOMSubtreeModified")
		})
	}), $("body").on("click", "a", function () {
		$("body div:last-child div:nth-child(3)").bind("DOMSubtreeModified", function () {
			initializeClock(t), $(this).off("DOMSubtreeModified")
		})
	}))
}

function initializeClock(time) {
	var id = "timer";
	var clock = document.getElementById(id);
	if(clock != null){
		var daysSpan = clock.querySelector('h1.days');
		var hoursSpan = clock.querySelector('h1.hours');
		var minutesSpan = clock.querySelector('h1.minutes');
		var secondsSpan = clock.querySelector('h1.seconds');
	
	function updateClock() {
		var t = getTimeRemaining(time);
		daysSpan.innerHTML = t.days;
		hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
		minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
		secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
		if (t.total <= 0) {
			clearInterval(timeinterval);
		}
	}
	updateClock();
	var timeinterval = setInterval(updateClock, 1000);
	}
}

function getTimeRemaining(time) {
	var t = Date.parse(time) - Date.parse(new Date());
	var seconds = Math.floor((t / 1000) % 60);
	var minutes = Math.floor((t / 1000 / 60) % 60);
	var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	var days = Math.floor(t / (1000 * 60 * 60 * 24));
	return {
		'total': t,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
}
