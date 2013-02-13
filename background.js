/*
---------------------
Copyright © klivk.com
---------------------
*/

chrome.extension.onRequest.addListener(
	function(request, sender, sendResponse) {
		
		var myRequest=request.myRequest;
		var searchQuery=myRequest[0];
		
		var searchURL='';
		
		switch (myRequest[1]) {
			case 'google':
				searchURL='http://google.com/search?q='+searchQuery;
			break;
			case 'wikipedia':
				searchURL='http://en.wikipedia.org/w/index.php?search='+searchQuery;
			break;
			case 'amazon':
				searchURL='http://www.amazon.com/s/field-keywords='+searchQuery;
			break;
			case 'twitter':
				searchURL='https://twitter.com/search?q='+searchQuery;
			break;
			
		}
		
		var tabActiveState=true;
		
		chrome.tabs.create({'url': searchURL, 'active': tabActiveState  });
		
		sendResponse({farewell: myRequest});
	}
);


