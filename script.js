"use strict";
window.addEventListener("load", () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth"
	});
});

document
	.querySelector("#print")
	.addEventListener("click", () => window.print());

const mainTitle = document.title;
window.addEventListener("beforeprint", () => (document.title = "AliAlmasi"));
window.addEventListener("afterprint", () => (document.title = mainTitle));
