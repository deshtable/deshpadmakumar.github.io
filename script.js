var header = document.getElementById('header');
var blurb = document.getElementById('blurb');
console.log("hello")
function fadeOutOnScroll(element) {
	if (!element) {
		return;
	}

	var distanceToTop = element.getBoundingClientRect().top;
  var elementHeight = element.offsetHeight;
	var opacity = 1;

	if (window.pageYOffset > 0) {
		opacity = 1 - (window.pageYOffset*0.002);
	}

	if (opacity >= 0) {
		if (opacity <.4){
			opacity = 0;
		}
		element.style.opacity = opacity;
	}
}

function scrollHandler() {
	fadeOutOnScroll(header);
	fadeOutOnScroll(blurb);
}


window.addEventListener('scroll', scrollHandler);
