function enableKeepOnline() {
  window.localStorage.setItem('keepOnline', 'true')
}

function disableKeepOnline() {
  window.localStorage.setItem('keepOnline', 'false')
}

function autoRunViaLastStatus() {
  console.log('Running auto-run-via-last-status')
  if (window.localStorage.getItem('keepOnline') === 'true') {
    // setInterval(function () {
    //   window.location.reload()
    // }, 3000)
  }
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'autoRunViaLastStatus') autoRunViaLastStatus()
  if (request.action === 'enableKeepOnline') enableKeepOnline()
  if (request.action === 'disableKeepOnline') disableKeepOnline()
})
