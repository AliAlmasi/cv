"use strict";
const mainTitle = document.title;
window.addEventListener("beforeprint", () => (document.title = "AliAlmasi"));
window.addEventListener("afterprint", () => (document.title = mainTitle));
