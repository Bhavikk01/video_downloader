chrome.runtime.onMessage.addListener((data) => {
  var message = JSON.parse(data);
  console.log(message.url);
  chrome.downloads.download(
    {
      url: message.url,
    },
    (downId) => {
      chrome.downloads.show(downId);
    }
  );
});
