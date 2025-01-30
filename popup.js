document.addEventListener('DOMContentLoaded', function () {
  const btnEnable = document.getElementById('enable-btn')
  const btnDisable = document.getElementById('disable-btn')

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'autoRunViaLastStatus' })
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
})
