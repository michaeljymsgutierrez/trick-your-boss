function triggerKeepOnline() {
  let count = 1

  setInterval(function () {
    if (count % 2 === 0) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    count++
  }, count * 1000)
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'enableKeepOnline') triggerKeepOnline()
})
