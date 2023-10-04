"use strict";

document.addEventListener("DOMContentLoaded", function () {
	const textBGSlides = document.querySelectorAll(".text-bg-slide");
	for (const el of textBGSlides) {
		el.addEventListener("mouseenter", function () {
			const slideCurtains = el.querySelectorAll("span");
			if (!slideCurtains) return;
			slideCurtains.forEach((curtain, idx)=>{
				if (idx % 2) {
					curtain.classList.add("slide-down");
				} else {
					curtain.classList.add("slide-up");
				}
			});
		});

		el.addEventListener("mouseleave", function () {
			const slideCurtains = el.querySelectorAll("span");
			if (!slideCurtains) return;
			slideCurtains.forEach((curtain, idx)=>{
				curtain.classList.remove("slide-down");
				curtain.classList.remove("slide-up");
			});
		});
	}
});
