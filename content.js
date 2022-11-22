// Inject script into the webpage context
var scriptElement = document.createElement('script');
scriptElement.src = chrome.extension.getURL('patch.js');
(document.head || document.documentElement).prepend(scriptElement);