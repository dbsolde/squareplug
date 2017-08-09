(function() {
      var tiltSettings = [
      {},
      {
        movement: {
          // The main wrapper.
          imgWrapper : {
            translation : {x: 10, y: 10, z: 30},
            rotation : {x: 0, y: -10, z: 0},
            reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
          },
          // The SVG lines element.
          lines : {
            translation : {x: 10, y: 10, z: [0,70]},
            rotation : {x: 0, y: 0, z: -2},
            reverseAnimation : {duration : 2000, easing : 'easeOutExpo'}
          },
          // The caption/text element.
          caption : {
            rotation : {x: 0, y: 0, z: 2},
            reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
          },
          // The overlay element.
          overlay : {
            translation : {x: 10, y: -10, z: 0},
            rotation : {x: 0, y: 0, z: 2},
            reverseAnimation : {duration : 2000, easing : 'easeOutExpo'}
          },
          // The shine element.
          shine : {
            translation : {x: 100, y: 100, z: 0},
            reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
          }
        }

      }];

      function init() {
        var idx = 0;
        [].slice.call(document.querySelectorAll('.tilter')).forEach(function(el, pos) { 
          idx = pos%2 === 0 ? idx+1 : idx;
          new TiltFx(el, tiltSettings[idx-1]);
        });
      }

      init();
})();
