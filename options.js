// Saves options to chrome.storage
function save_options() {
  var style_choice = document.querySelector('input[name="style"]:checked').value;

  chrome.storage.sync.set({
    style: style_choice
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    style: 'none'
  }, function(items) {
    document.getElementById(items.style).checked = "checked";
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
