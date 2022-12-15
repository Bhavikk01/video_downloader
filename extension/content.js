const init = () => {
  console.log("script injected");
  const ClassName = document.getElementsByClassName(
    "style-scope ytd-watch-metadata"
  )[0];
  var h1 = ClassName.querySelectorAll("h1");
  console.log(h1[0].innerText);

  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    if (request.message === "start") {
      sendResponse({ title: h1[0].innerText });
    }
  });
};
const bool = null;
if (!bool) {
  init();
}
