document.addEventListener('DOMContentLoaded', function () {
  const btnUp = document.getElementById('btn-up')
  const btnDown = document.getElementById('btn-down')

  btnUp.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'scrollUp' })
    })
  })

  btnDown.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'scrollDown' })
    })
  })
})
