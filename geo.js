
navigator.geolocation.getCurrentPosition(geoSuccess, geoError);


function geoSuccess(position){
  console.log("geoSuccess");
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;

  var output = document.getElementById('output');
  output.innerText = `lat: ${lat}  lon: ${lon}`;
}
function geoError(failure){
  console.log("code: " + failure.code);
  console.log("message: " + failure.message);

  var output = document.getElementById('output');
  output.innerText = `failure code: ${failure.code}  failure message: ${failure.message}`;
}
