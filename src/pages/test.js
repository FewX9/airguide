// pages/index.js

import { useState, useEffect } from 'react';

function HomePage() {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // ฟังก์ชันที่ใช้ในการดึงตำแหน่งปัจจุบัน
    const fetchUserLocation = async () => {
      try {
        // ใช้ Geolocation API ดึงตำแหน่งปัจจุบันของผู้ใช้
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lon: longitude });
        });
      } catch (error) {
        console.error('Error fetching user location:', error.message);
      }
    };

    // เรียกใช้ฟังก์ชันเมื่อคอมโพเนนต์ถูกโหลด
    fetchUserLocation();
  }, []);

  return (
    <div>
      <h1>User Location</h1>
      {userLocation ? (
        <div>
          <p>Latitude: {userLocation.lat}</p>
          <p>Longitude: {userLocation.lon}</p>
        </div>
      ) : (
        <p>Loading user location...</p>
      )}
    </div>
  );
}

export default HomePage;
