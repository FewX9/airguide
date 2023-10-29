import Image from 'next/image'
import { Inter } from 'next/font/google'
import TempBox from '@/components/temp_box'
import DateWeather from '@/components/DateWeather'
import DetailDateweather from '@/components/DetailDateweather'
import Advert from '@/components/Advert'
// import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    {/* <Navbar/> */}
    <TempBox>
    </TempBox>
    <DateWeather>
    </DateWeather>
    <DetailDateweather>
    </DetailDateweather>
    <Advert>
    </Advert>
    </>
  )
}
