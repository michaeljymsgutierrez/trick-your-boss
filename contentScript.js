/*
 * Enables the keepOnline option
 */
function enableKeepOnline() {
  window.localStorage.setItem('keepOnline', 'true')
  window.location.reload()
}

/*
 * Disables the keepOnline option
 */
function disableKeepOnline() {
  window.localStorage.setItem('keepOnline', 'false')
  window.location.reload()
}

/*
 * Initializes the watcher
 */
function initializeWatcher() {
  console.log('watcher: activated')

  if (window.localStorage.getItem('keepOnline') === 'true') {
    setTimeout(function () {
      if (window.localStorage.getItem('tabId')) {
        console.log('watcher: reloading')
        window.location.reload()
      }
    }, 30 * 1000)
  }
}

/*
 * Listens for messages from the popup
 */
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  window.localStorage.setItem('tabId', sender.id)

  if (request.action === 'enableKeepOnline') enableKeepOnline()
  if (request.action === 'disableKeepOnline') disableKeepOnline()
})

initializeWatcher()
