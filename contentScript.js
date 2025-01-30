chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'scrollUp') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else if (request.action === 'scrollDown') {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }
})
