import Image from 'next/image'
import { Inter } from 'next/font/google'
import TempBox from '@/component/temp_box'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const jsonData = { key1: 'value1', key2: 'value2' };
  const jsonString = JSON.stringify(jsonData);

  return (
    <>
    <TempBox>
      {jsonString}
    </TempBox>
    </>
  )
}
