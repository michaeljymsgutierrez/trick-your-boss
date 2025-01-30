document.addEventListener('DOMContentLoaded', function () {
  const btnUp = document.getElementById('btn-up')
  const btnDown = document.getElementById('btn-down')
  const btnEnable = document.getElementById('enable-btn')

  btnEnable.addEventListener('click', function () {
    let count = 1
    setInterval(function () {
      if (count % 2 === 0) {
        btnDown.click()
      } else {
        btnUp.click()
      }
      count++
    }, count * 1000)
  })

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
