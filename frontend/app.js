function initMap() {
    const center = { lat: 37.7749, lng: -122.4194 }; // Default center
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: center,
    });
  
    // Fetch donors from backend
    fetch('http://localhost:3000/api/donors/San Francisco')
      .then((response) => response.json())
      .then((data) => {
        data.forEach((donor) => {
          const marker = new google.maps.Marker({
            position: { lat: parseFloat(donor.lat), lng: parseFloat(donor.lng) },
            map: map,
            title: `${donor.name} (${donor.blood_type})`,
          });
        });
      })
      .catch((error) => console.error('Error fetching donors:', error));
  }
  
  initMap();
  