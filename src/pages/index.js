import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import TempBox from '@/components/temp_box';
import DateWeather from '@/components/DateWeather';
import Recommend from '@/components/Recommend';
import Advert from "@/components/Advert";

export default function Home() {
  const [aosInitialized, setAOSInitialized] = useState(false);

  useEffect(() => {
    if (!aosInitialized) {
      const timeoutId = setTimeout(() => {
        AOS.init({});
        setAOSInitialized(true);
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [aosInitialized]);

  return (
    <div className='grid grid-cols-5'>
      <div className='col-span-3 col-start-2'>
        <div className='grid grid-cols-6 pt-10'>
          <div className='col-span-4 flex flex-col items-center w-100'>
            <TempBox> </TempBox>
            <DateWeather> </DateWeather>
            <Advert/>
          </div>
          <div className='col-span-2 flex flex-col items-center w-100'>
            <Recommend/>
          </div>
        </div>
      </div>
    </div>
  )
}
