//Onclick to get value of input and store in variable

$('#submit-button').on('click', function(
  var userInput = $('#user-input').val();
  console.log(userInput);
));


var searchTerm = "";
var searchLocation = "";

$.ajax({
    url: `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=${searchLocation}`,
    method: "GET",
    headers: {
        "Authorization": "Bearer AmvxFoRRCm1gPrumi5fAr7uEGkpOAeDoFKKAjJ_zhHo4uB4-RFb2GLyvQ-CBbVvdi7syTFO5y2WIgTYOqfWdaUp6duFzLRfCGh5-0o6Blh3AQlKgvy-jGqvLui8HX3Yx"
    }
}).then(function (response) {
    console.log(response);
});

//Google Maps API
//Andrew's Key: AIzaSyB-advEZHzPU9oDy_THa6VyYKawF7ndVtQ
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });
}
//End of Google Maps API