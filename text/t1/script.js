"use strict";

document.addEventListener("DOMContentLoaded", function () {
	const textBGSlides = document.querySelectorAll(".text-bg-slide");
	for (const el of textBGSlides) {
		el.addEventListener("mouseenter", function () {
			console.log("adding class");
			el.classList.add("text-bg-toggle");
		});
		el.addEventListener("mouseleave", function () {
			console.log("removing class");
			el.classList.remove("text-bg-toggle");
		});

	}

});
