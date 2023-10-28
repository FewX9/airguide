import Image from 'next/image'
import { Inter } from 'next/font/google'
import TempBox from '@/components/temp_box'
import DateWeather from '@/components/DateWeather'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <TempBox>
    </TempBox>
    <DateWeather>
    </DateWeather>
    </>
  )
}
