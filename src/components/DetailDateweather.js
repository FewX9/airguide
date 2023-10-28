export default function DetailDateweather({ children }) {
    return (
        <>
            <div className="flex flex-col space-y-6 w-full max-w-screen-sm bg-white p-10 mt-10 rounded-xl ring-8 ring-white ring-opacity-40">
                <div className="flex justify-between items-center">
                    <div className="weather-container">
                        <h1 className="text-2xl">สภาพอากาศวันนี้</h1>
                        <div className="temperature mb-8">
                            <span className="text-5xl ">34°</span>
                        </div>
                        <div className="grid grid-cols-2 gap-x-12 gap-y-5">
                            <div className="high-low">
                                <span className="icon">🌡</span> สูง / ต่ำ --/26°
                            </div>
                            <div className="wind">
                                <span className="icon">🌬</span> ลม 0 กม./ชม.
                            </div>
                            <div className="humidity">
                                <span className="icon">💧</span> ความชื้น 81%
                            </div>
                            <div className="dew-point">
                                <span className="icon">💧ํ</span> จุดน้ำค้าง 25°
                            </div>
                            <div className="pressure">
                                <span className="icon">🌡</span> ความดัน 1012.2 มิลลิบาร์
                            </div>
                            <div className="uv-index">
                                <span className="icon">☀️</span> ดัชนี UV 0 ของ 11
                            </div>
                            <div className="visibility">
                                <span className="icon">👁</span> ทัศนวิสัย 8.05 กม.
                            </div>
                            <div className="moon-phase">
                                <span className="icon">🌙</span> ข้างขึ้นข้างแรม จันทร์เพ็ญ
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}