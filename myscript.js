chrome.storage.sync.get({
  style: ''
}, function(items) {
  bodies = document.getElementsByTagName("body");
  bodies[0].className = items.style;
});
