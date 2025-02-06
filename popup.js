document.addEventListener('DOMContentLoaded', function () {
  const btnEnable = document.getElementById('enable-btn')
  const btnDisable = document.getElementById('disable-btn')

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: function () {
        chrome.runtime.sendMessage({
          action: 'updateButtonStatus',
          status: window.localStorage.getItem('keepOnline') === 'true',
        })
      },
    })
  })

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
