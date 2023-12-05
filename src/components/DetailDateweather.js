import { useEffect, useState } from "react";

export default function DetailDateweather({ children }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=15.0&lon=100.0&lang=th&appid=ae1d0e8f7ca4f5a7ed4e67ff6a57f542&units=metric`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <>
      <div className="flex flex-col space-y-6 w-full max-w-screen-sm bg-white p-10 mt-10 rounded-xl ring-8 ring-white ring-opacity-40" data-aos="fade-right" data-aos-delay="300">
        <div className="flex justify-between items-center">
          <div className="weather-container">
            <h1 className="text-2xl">สภาพอากาศวันนี้</h1>
            <div className="temperature mb-8">
              <span className="text-5xl">
                {weatherData ? `${Math.round(weatherData.main.temp)}°` : "--"}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-5">
              <div className="high-low">
                <span className="icon">🌡</span> สูง / ต่ำ{" "}
                {weatherData
                  ? `${Math.round(weatherData.main.temp_max)}°/${Math.round(
                      weatherData.main.temp_min
                    )}°`
                  : "--/--"}
              </div>
              <div className="wind">
                <span className="icon">🌬</span> ลม{" "}
                {weatherData
                  ? `${Math.round(weatherData.wind.speed)} กม./ชม.`
                  : "--"}
              </div>
              <div className="humidity">
                <span className="icon">💧</span> ความชื้น{" "}
                {weatherData ? `${weatherData.main.humidity}%` : "--"}
              </div>
              <div className="dew-point">
                <span className="icon">💧ํ</span> จุดน้ำค้าง{" "}
                {weatherData
                  ? `${Math.round(weatherData.main.temp_kf)}°`
                  : "--"}
              </div>
              <div className="pressure">
                <span className="icon">🌡</span> ความดัน{" "}
                {weatherData
                  ? `${Math.round(weatherData.main.pressure)} มิลลิบาร์`
                  : "--"}
              </div>
              <div className="uv-index">
                <span className="icon">☀️</span> ดัชนี UV{" "}
                {weatherData ? `0 ของ 11` : "--"}
              </div>
              <div className="visibility">
                <span className="icon">👁</span> ทัศนวิสัย{" "}
                {weatherData
                  ? `${Math.round(weatherData.visibility) / 1000} กม.`
                  : "--"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
