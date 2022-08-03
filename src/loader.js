s = document.createElement("script");
s.src = chrome.runtime.getURL("src/youtubedl.js");

s.setAttribute("data-ext", chrome.runtime.id);

(document.head || document.documentElement).appendChild(s);