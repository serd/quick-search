/*
---------------------
Copyright © klivk.com
---------------------
*/
$(document).ready(function(){


$(document).keydown(function(e) {
	
	//83='s' and 87='w' 
	if(e.which===83 || e.which===87 || e.which===65 || e.which===84) {
		if(e.altKey && e.ctrlKey && e.shiftKey==false) {
			var myString=window.getSelection().toString();
			
			
			var myRequest=new Array();
			
			myRequest[0]=encodeURIComponent(myString);
			
			switch (e.which) {
				case 83:
					myRequest[1]='google';
				break;
				case 87:
					myRequest[1]='wikipedia';
				break;
				case 65:
					myRequest[1]='amazon';
				break;
				case 84:
					myRequest[1]='twitter';
				break;
			}
			
			
			
			
			chrome.extension.sendRequest(
				{myRequest: myRequest}
				,function(response) {
					console.log(response.farewell);
		
				}
			);
			console.log(myString);
			return false;
		}
	}
});





	
		




});