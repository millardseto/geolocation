
navigator.geolocation.getCurrentPosition(geoSuccess, geoError);


function geoSuccess(position){
  console.log("geoSuccess");
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
}
function geoError(failure){
  console.log("code: " + failure.code);
  console.log("message: " + failure.message);
}
