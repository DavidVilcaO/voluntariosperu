(function($){
    'use strict';
	
	$.get("https://api.mlab.com/api/1/databases/santuario/collections/houses?apiKey=Jba31XhHbIXY1RBkADhfk_0XBuiKF9BT", function( data ) {
	 
		//Home Page map
		var styleArray = [
		  {
			"featureType": "water",
			"elementType": "geometry.fill",
			"stylers": [
			  {
				"color": "#65ac4c"
			  }
			]
		  }
		];

		var mapOptions = {
		  center: new google.maps.LatLng(-6.016374,-75.142793),
		  zoom: 5,
		  styles: styleArray,
		  scrollwheel: false,
		  backgroundColor: 'transparent',
			mapTypeControl: false,          
		  mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document.getElementById("home-map"),
		  mapOptions);        
		var myLatlng = new google.maps.LatLng(-6.016374,-75.142793);  

		var icon = {
		    url: 'images/marker.png', // url
		    scaledSize: new google.maps.Size(50, 64), // scaled size
		    origin: new google.maps.Point(0,0), // origin
		    anchor: new google.maps.Point(0, 0) // anchor
		};

		for(var i=0; i < data.length; i++){
			var marker = new google.maps.Marker({
			  position: new google.maps.LatLng(data[i].lat,data[i].lng),
			  map: map,
			  icon: icon
			});
		}
		
	});
	
})(jQuery);	  