"use strict";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const doctitle = document.title;
const titleReset = async () => {
	await sleep(100);
	document.title = doctitle;
};
Mousetrap.bind(["command+p", "ctrl+p"], (e) => {
	e.preventDefault();
	document.title = "AliAlmasi";
	window.print();
	titleReset();
});
// document.addEventListener("click", (e) => {
// 	e.preventDefault();
// 	document.title = "AliAlmasi";
// 	window.print();
// 	titleReset();
// });
