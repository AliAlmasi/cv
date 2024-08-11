"use strict";
const mainTitle = document.title;
const printFileName = "AliAlmasi";

document
	.querySelectorAll("a")
	.forEach((tag) => (tag.href = tag.href.toString().toLowerCase()));

function checkFlexGap() {
	var flex = document.createElement("div");
	flex.style.display = "flex";
	flex.style.flexDirection = "column";
	flex.style.rowGap = "1px";

	flex.appendChild(document.createElement("div"));
	flex.appendChild(document.createElement("div"));

	document.body.appendChild(flex);
	var isSupported = flex.scrollHeight === 1;
	flex.parentNode.removeChild(flex);

	if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

window.addEventListener("beforeprint", () => {
	document.title = printFileName;
	document
		.querySelectorAll("div.upper-text__infobox a")
		.forEach((tag) => (tag.style.color = "var(--secondary)"));
});

window.addEventListener("afterprint", () => {
	document.title = mainTitle;
	document
		.querySelectorAll("div.upper-text__infobox a")
		.forEach((tag) => (tag.style.color = "unset"));
});

document.addEventListener("keydown", (e) => {
	if ((e.key == "p" || e.key == "P") && e.ctrlKey) {
		e.preventDefault();
		document.querySelector("#print").click();
	}
});
