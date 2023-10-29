import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'ตัวติดตามอาการแพ้', href: '#', icon: ChartPieIcon },
  { name: 'พยากรณ์คุณภาพของอากาศ', href: '#', icon: CursorArrowRaysIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Navbar(children) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      {/* <!-- component --> */}
      <nav class=" bg-white w-full flex relative justify-between items-center mx-auto px-8 h-20">
        {/* <!-- logo --> */}
        <div class="inline-flex">
          <a class="_o6689fn" href="/">
            <div class="hidden md:block">
              <span className=" self-center" style={{ display: "block" }}>
                <img className="object-contain w-14 h-14" src="/images/div.jpg" ></img>
              </span>
            </div>
            <div class="block md:hidden">
              <span className=" self-center" style={{ display: "block" }}>
                <img className="object-contain w-14 h-14" src="/images/div.jpg" ></img>
              </span>
            </div>
          </a>
        </div>

        {/* <!-- end logo --> */}

        {/* <!-- search bar --> */}

        <div className=" flex justify-start items-center py-7 relative">
          <input
            className="rounded-full text-center text-sm leading-none text-gray-600 px-4 py-2 w-96 border border-gray-300  outline-none"
            type="text"
            placeholder="ค้นหาเมืองหรือรหัสไปรษณีย์" />
          <svg
            className="absolute right-3 z-10 cursor-pointer"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none">
            <path
              d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
              stroke="#4B5563"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round" />
            <path
              d="M21 21L15 15"
              stroke="#4B5563"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round" />
          </svg>
        </div>

        {/* <!-- end search bar --> */}

        {/* <!-- login --> */}
        <div class="flex-initial">
          <div class="flex justify-end items-center relative">

            <div class="flex mr-4 items-center">
              <div class="block relative">
                <button type="button" class="inline-block py-2 px-3 hover:bg-gray-200 rounded-full relative ">
                  <div class="flex items-center h-5">
                    <div class="_xpkakx">
                      <svg className="mr-1" viewBox="0 0 16 16" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "16px", width: "16px", fill: "currentcolor", }}>
                        <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z">
                        </path>
                      </svg>
                    </div>TH
                  </div>
                </button>
              </div>
            </div>

            <div class="block">
              <div class="inline relative">
                <button type="button" class="h-10 inline-flex items-center relative px-2 border rounded-full hover:shadow-lg">
                  <div class="pl-1">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        fill: "none",
                        height: "16px",
                        width: "16px",
                        stroke: "currentcolor",
                        strokeWidth: "3",
                        overflow: "visible",
                      }}>
                      <g fill="none" fill-rule="nonzero">
                        <path d="m2 16h28"></path>
                        <path d="m2 24h28"></path>
                        <path d="m2 8h28"></path>
                      </g>
                    </svg>
                  </div>

                  <select className="ml-2">
                    <option>°F</option>
                    <option>°C</option>
                    <option>ผสม</option>
                  </select>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end login --> */}
      </nav>
      <div class="w-full h-10 bg-slate-300" aria-label="ตำแหน่งที่บันทึกไว้" role="region">
      </div>
      <header className="bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            

            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              วันนี้
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              รายชั่วโมง
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              10 วัน
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              รายเดือน
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              สุดสัปดาห์
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              เรดาร์
            </a>
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                พยากรณ์เพิ่มเติม
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                        </div>
                        <div className="flex-auto">
                          <a href={item.href} className="block font-semibold text-gray-900">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">

          </div>
        </nav>
      </header>
    </>
  )
}
