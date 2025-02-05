document.addEventListener('DOMContentLoaded', function () {
  const btnEnable = document.getElementById('enable-btn')
  const btnDisable = document.getElementById('disable-btn')

  const initializePlugin = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: () => {
          const keepOnlineStatus =
            window.localStorage.getItem('keepOnline') === 'true'
          chrome.runtime.sendMessage({
            action: 'updateButtonStatus',
            status: keepOnlineStatus,
          })
        },
      })
      chrome.tabs.sendMessage(tabs[0].id, { action: 'autoRunViaLastStatus' })
    })
  }

  initializePlugin()

  btnEnable.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'enableKeepOnline' })
    })
  })

  btnDisable.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'disableKeepOnline' })
    })
  })

  chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
      if (request.action === 'updateButtonStatus') {
        const keepOnlineStatus = request.status
        if (keepOnlineStatus) {
          btnEnable.classList.add('hide-btn')
          btnDisable.classList.remove('hide-btn')
        } else {
          btnEnable.classList.remove('hide-btn')
          btnDisable.classList.add('hide-btn')
        }
      }
    }
  )
})

// Use this block when running auto refresh
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete') {
    chrome.tabs.sendMessage(tabId, { action: 'autoRunViaLastStatus' })
  }
})
