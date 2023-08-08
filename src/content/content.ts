export {}
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'open_content') {
      const container = document.createElement('div');
      container.id = 'my-content-container';
      document.body.appendChild(container);
      container.innerHTML = '<iframe src="content.html"></iframe>';
    }
  });
  