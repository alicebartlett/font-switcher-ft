chrome.storage.sync.get({
  style: 'style_1'
}, function(items) {
  bodies = document.getElementsByTagName("body");
  bodies[0].className = items.style;
});
