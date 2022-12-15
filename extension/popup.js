window.onload = function () {
  var dButton = document.getElementById("fillButton");
  dButton.onclick = function () {
    console.log("button  clicked");
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var url = tabs[0].url;
      var message = {
        url: url,
      };
	  const title = document.getElementById("file_name").innerText;
      window.open(`http://localhost:5000/?url=${url} &title=${encodeURI(title)} `, "_blank");
    });
  };

  chrome.tabs.getSelected(null, function (tab) {
    if (tab && tab.status == "complete") {
      chrome.tabs.executeScript(tab.id, { file: "content.js" }, function () {
        popup();
        chrome.tabs.executeScript(
          tab.id,
          { code: "var right_clicked = false;" },
          function () {
            chrome.tabs.executeScript(tab.id, { file: "jq.js" });
          }
        );
      });
    }
  });
};

function popup() {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { message: "start" }, (res) => {
      document.getElementById("file_name").innerHTML = res.title;
    });
  });
}
