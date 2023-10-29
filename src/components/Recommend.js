import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Recommend() {

  return (
    <div className="w-full max-w-screen-sm bg-white p-5 rounded-xl ring-8 ring-white ring-opacity-40" data-aos="fade-down" data-aos-delay="600">
      <span className="text-2xl font-bold">
        <FontAwesomeIcon icon={faTriangleExclamation} className='text-[#ff0000]' /> คำแนะนำและแผนการป้องกัน
      </span>
      <hr />
      <ul className='mx-8 list-disc mt-3 text-xl'>
        <li>xx</li>
        <li>xx</li>
        <li>xx</li>
        <li>xx</li>
        <li>xx</li>
        <li>xx</li>
        <li>xx</li>
      </ul>
    </div>
  )
}

