"use strict";
document
	.querySelector("#print")
	.addEventListener("click", () => window.print());

const mainTitle = document.title;
window.addEventListener("beforeprint", () => (document.title = "AliAlmasi"));
window.addEventListener("afterprint", () => (document.title = mainTitle));
