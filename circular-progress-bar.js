/**
* @plugin: Progress Bar
* @version: 0.1
* @website: Squareplugs.com
* @description: Progress Bar Plugin for Squarespace
* @author: Zeddicus Zu'l Zorander <jimenez.phillip.felicidario@gmail.com>
*/
$.getScript('https://cdn.rawgit.com/dbsolde/squareplug/767a7326/jquery.easypiechart.min.js,https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js', function() {
eval(function (p, a, c, k, e, d) {
	e = function (c) {
		return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
	};
	if (!''.replace(/^/, String)) {
		while (c--) {
			d[e(c)] = k[c] || e(c)
		}
		k = [function (e) {
			return d[e]
		}];
		e = function () {
			return '\\w+'
		};
		c = 1
	};
	while (c--) {
		if (k[c]) {
			p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
		}
	}
	return p
}('2 r(i){q 0===i?p.s("u x w."):(6(i),$(5).v(2(){6(i)}),$(5).f("n",2(o,t){$("c 9:j-8 9:k-8(3)").l("7",2(){6(i),$(4).m("7")})}),$("c").f("y","a",2(){$("c 9:j-8 9:k-8(3)").l("7",2(){6(i),$(4).m("7")})}))}2 6(i){$(".z").K(2(){h o=($(4).I("H-g"),$(4).J(".g"));F(""===o.G()){h t=$(4).B().A+$(4).C(),d=$(5).D()+$(5).b(),e=d-$(5).b()+$(5).b()/1.1;d>t&&e>t&&$(4).E(i)}})}', 47, 47, '||function||this|window|callCircularLoader|DOMSubtreeModified|child|div||height|body|||on|percent|var||last|nth|bind|off|popstate||console|void|runCircularLoader|log||Configuration|scroll|undefined|is|click|chart|top|offset|outerHeight|scrollTop|easyPieChart|if|text|data|attr|children|each'.split('|'), 0, {}))
});
