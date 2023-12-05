import { useEffect, useState } from "react";
import axios from "axios";

export default function TempBox({ children }) {
  const [weatherData, setWeatherData] = useState(null);
  const [hourlyData, setHourlyData] = useState([]);

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

    const fetchHourlyData = async () => {
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/forecast?lat=15.0&lon=100.0&lang=th&appid=ae1d0e8f7ca4f5a7ed4e67ff6a57f542&units=metric`
        );
        setHourlyData(response.data);
      } catch (error) {
        console.error("Error fetching hourly data:", error);
      }
    };

    fetchWeatherData();
    fetchHourlyData();
  }, []);

  const currentDate = new Date().toISOString().slice(0, 10);

  return (
    <div
      className="w-full max-w-screen-sm bg-white p-10 rounded-xl ring-8 ring-white ring-opacity-40 overflow-x-auto"
      data-aos="fade-right"
    >
      <div className="flex justify-between">
        <div className="flex flex-col">
        <h1 className="text-2xl">สภาพอากาศวันนี้</h1>
          <span className="lg:text-6xl font-bold md:text-4xl md:font-semibold sm:text-xl">
            {weatherData
              ? `${Math.round(weatherData.main.temp)}°C`
              : "Loading..."}
          </span>
          <span>อุณหภูมิสูงสุด: {weatherData
              ? `${Math.round(weatherData.main.temp_max)}°C`
              : "Loading..."} {""}
              อุณหภูมิต่ำสุด: {weatherData
                ? `${Math.round(weatherData.main.temp_min)}°C`
                : "Loading..."}</span>
          <span className="mt-1 text-gray-500 text-lg">
            ประเทศ{weatherData ? weatherData.name : "Loading..."}
          </span>
        </div>
        <svg
          className="h-24 w-24 fill-current text-yellow-400"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z" />
        </svg>
      </div>
      <div className="flex justify-between mt-12 overflow-x-auto w-full divide-x">
        {hourlyData.list && hourlyData.list.length > 0 ? (
          hourlyData.list.map((hour, index) => {
            const time = new Date(hour.dt_txt);
            const dataDate = time.toISOString().slice(0, 10);
            let timeSlot = "";

            if (dataDate === currentDate) {
              if (time.getHours() >= 6 && time.getHours() <= 12) {
                timeSlot = "เช้า";
              } else if (time.getHours() >= 13 && time.getHours() <= 18) {
                timeSlot = "บ่าย";
              } else if (time.getHours() >= 19 || time.getHours() === 0) {
                timeSlot = "ค่ำ";
              } else if (time.getHours() >= 1 && time.getHours() <= 5) {
                timeSlot = "ข้ามคืน";
              }

              if (timeSlot) {
                return (
                  <div key={index} className="flex flex-col text-center items-center p-4 w-full">
                    <span className="font-semibold text-lg">
                      {Math.round(hour.main.temp)}°C
                    </span>
                    <span className="mt-1 text-sm">
                      {time.getHours()}:00 น
                    </span>
                  </div>
                );
              }
            }
            return null;
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
