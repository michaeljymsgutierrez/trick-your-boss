function autoRunViaLastStatus() {
  console.log('Running auto-run-via-last-status')
  if (window.localStorage.getItem('keepOnline') === 'true') {
    setTimeout(function () {
      window.location.reload()
    }, 30 * 1000)
  }
}

function enableKeepOnline() {
  window.localStorage.setItem('keepOnline', 'true')
  window.location.reload()
}

function disableKeepOnline() {
  window.localStorage.setItem('keepOnline', 'false')
  window.location.reload()
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  window.localStorage.setItem('tabId', sender.id)

  if (request.action === 'autoRunViaLastStatus') autoRunViaLastStatus()
  if (request.action === 'enableKeepOnline') enableKeepOnline()
  if (request.action === 'disableKeepOnline') disableKeepOnline()
})
