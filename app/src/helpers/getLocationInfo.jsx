const [location, setLocation] = useState();

function getLocationInfo(latitude, longitude) {
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${APIkey}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.status.code === 200) {
        setLocation(data.results[0].formatted);
      } else {
        console.log("Reverse geolocation request failed.");
      }
    })
    .catch((error) => console.error(error));
}
