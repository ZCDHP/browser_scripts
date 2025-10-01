// ==UserScript==
// @name         Twitter Pic Name
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://twitter.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==

(() => {
  /// twitter 「@hikari_sface」 1692374652805390668-4
  const main = () => {
    const path = window.location.pathname;
    const parts = path.split("/").filter(x => x !== "");

    const userId = parts[0];
    const twitterId = parts[2];
    const picNum = parts[4];

    const picName = `twitter 「@${userId}」 ${twitterId}${/\d/.test(picNum) ? `-${picNum}` : ""}`;

    navigator.clipboard.writeText(picName);
  }

  document.addEventListener("keydown", e => {
    if (e.key == "q" && e.ctrlKey)
      main();
  })
})()
