import TempBox from '@/components/temp_box'
import DateWeather from '@/components/DateWeather'

export default function Home() {
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col items-center w-100 pt-10'>
        <TempBox> </TempBox>
        <DateWeather> </DateWeather>
      </div>
    </div>
  )
}
