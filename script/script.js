$(".logo").animate({top: "0"});





var countdiv = document.querySelector(".count");

var count = 0;

var stats = setInterval(function(){
        countdiv.innerHTML = count;
        count+=10;
        if(count > 2340){
            clearInterval(stats);
        }
},5)

function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:5,
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }

