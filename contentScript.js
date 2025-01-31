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
  autoRunViaLastStatus()
}

function disableKeepOnline() {
  window.localStorage.setItem('keepOnline', 'false')
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'autoRunViaLastStatus') autoRunViaLastStatus()
  if (request.action === 'enableKeepOnline') enableKeepOnline()
  if (request.action === 'disableKeepOnline') disableKeepOnline()
})
