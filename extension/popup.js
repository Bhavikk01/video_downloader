window.onload = function () {
	var dButton = document.getElementById('fillButton');
	dButton.onclick = function () {
		console.log("button  clicked");
		chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
			var url = tabs[0].url;
			var message = {
				'url': url,
			};

			const req = new XMLHttpRequest();
			const baseUrl = "http://localhost:5000/upload";

			req.open("POST", baseUrl, true);
			req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
			req.send(JSON.stringify(message));
			req.onload  = function() {
				var jsonResponse = req.response;
				chrome.runtime.sendMessage(jsonResponse);
			 };



		});
	};
}