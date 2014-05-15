$(document).ready(function(){

    $('.window').windows({
        snapping: false,
        snapSpeed: 500,
        snapInterval: 1100,
        onScroll: function(scrollPos){
        	if($('.window:eq(0)').ratioVisible() < 1){
        		$('.window').addClass('active');
        	}else
        		$('.window').removeClass('active');
        	
            console.log($('.window:eq(0)').ratioVisible());
        },
        onSnapComplete: function($el){
            // after window ($el) snaps into place
        },
        onWindowEnter: function($el){
            // when new window ($el) enters viewport
        }
    })
    initialize();
});

      function initialize() {
        var mapCanvas = document.getElementById('map_canvas');
        var mapOptions = {
          center: new google.maps.LatLng(-33.4438, -70.65750459999998),
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          disableDefaultUI: true
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
      }