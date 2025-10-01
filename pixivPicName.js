// ==UserScript==
// @name         Pixiv Pic Name
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.pixiv.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==

(() => {
  // pixiv 「enden」 愛城華恋 101181889 - 1
  const main = () => {
    const path = window.location.pathname;
    const artId = path.split("/").filter(x => x !== "")[1]
    const userName = document.querySelector("a[href^=\"/users/\"] div").title;
    const picName = document.querySelector("h1").innerHTML;
    const picNumEle = document.querySelector("div[role='presentation'] .gtm-manga-viewer-preview-modal-open span");
    const picNum = picNumEle ? picNumEle.innerHTML.split("/")[0] : null;


    const text = `pixiv 「${userName}」 ${picName} ${artId}${picNum ? ` - ${picNum}` : ""}`
    navigator.clipboard.writeText(text);
  };

  document.addEventListener("keydown", e => {
    if (e.key == "q" && e.ctrlKey)
      main();
  })
})()
