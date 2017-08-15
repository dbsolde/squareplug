/**
* @plugin: Vertical Timeline
* @version: 0.1
* @website: Squareplugs.com
* @description: Vertical Timeline Plugin for Squarespace
*/

jQuery(function () {
	new Waypoint.Inview({
		element: $('.tl:odd')[0],
		enter: function (direction) {
			$('.tl:odd').addClass('rotateInDownRight');
		},
		exited: function (direction) {
			$('.tl').removeClass('rotateInDownRight');
		}
	})

	new Waypoint.Inview({
		element: $('.tl:even')[0],
		enter: function (direction) {
			$('.tl:even').addClass('rotateInDownLeft')
		},
		exited: function (direction) {
			$('.tl:even').removeClass('rotateInDownLeft');
		}
	});

	new Waypoint.Inview({
		element: $('.tl-3')[0],
		enter: function (direction) {
			$('.tl-3').addClass('rotateInDownLeft')
		},
		exited: function (direction) {
			$('.tl-3').removeClass('rotateInDownLeft');
		}
	});

	new Waypoint.Inview({
		element: $('.tl-4')[0],
		enter: function (direction) {
			$('.tl-4').addClass('rotateInDownRight')
		},
		exited: function (direction) {
			$('.tl-4').removeClass('rotateInDownRight');
		}
	});
});
