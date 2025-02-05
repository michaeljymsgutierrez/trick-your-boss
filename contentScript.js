function toggleButtonStatus(keepOnlineStatus) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: function () {
        chrome.runtime.sendMessage({
          action: 'updateButtonStatus',
          status: keepOnlineStatus,
        })
      },
    })
  })
}

function autoRunViaLastStatus(tabId) {
  console.log(`Running auto-run-via-last-status ${tabId}`)

  if (window.localStorage.getItem('keepOnline') === 'true') {
    setTimeout(function () {
      if (window.localStorage.getItem('tabId') === tabId)
        window.location.reload()
    }, 30 * 1000)
  }
}

function enableKeepOnline() {
  toggleButtonStatus(true)
  window.localStorage.setItem('keepOnline', 'true')
  window.location.reload()
}

function disableKeepOnline() {
  toggleButtonStatus(false)
  window.localStorage.setItem('keepOnline', 'false')
  window.location.reload()
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  window.localStorage.setItem('tabId', sender.id)

  if (request.action === 'autoRunViaLastStatus') autoRunViaLastStatus(sender.id)
  if (request.action === 'enableKeepOnline') enableKeepOnline()
  if (request.action === 'disableKeepOnline') disableKeepOnline()
})
