if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    position => {
      console.log('Latitude:', position.coords.latitude);
      console.log('Longitude:', position.coords.longitude);
    },
    error => {
      console.error('Error:', error.message);
    }
  );
} else {
  console.log('Geolocation is not supported.');
}
