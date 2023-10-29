
export default function Navbar(children) {
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
      <header class="bg-white mb-5">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div class="hidden lg:flex lg:gap-x-12">
          </div>
          <div class="hidden lg:flex lg:gap-x-12">
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900">วันนี้</a>
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900">รายชั่วโมง</a>
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900">10 วัน</a>
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900">รายเดือน</a>
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900">สุดสัปดาห์</a>
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900">เรดาร์</a>
            <div class="relative">
              <button type="button" class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" aria-expanded="false">
                พยากรณ์เพิ่มเติม
                <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>

              </button>

              <div class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div class="p-2">
                  <div class="group relative flex items-center gap-x-6 rounded-lg text-sm leading-6 hover:bg-gray-50">
                    <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                      </svg>

                    </div>
                    <div class="flex-auto">
                      <a href="#" class="block font-semibold text-gray-900">
                        ตัวติดตามอาการแพ้
                        <span class="absolute inset-4"></span>
                      </a>
                    </div>
                  </div>
                  <div class="group relative flex items-center gap-x-6 rounded-lg text-sm leading-6 hover:bg-gray-50">
                    <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                      </svg>
                    </div>
                    <div class="flex-auto">
                      <a href="#" class="block font-semibold text-gray-900">
                        พยากรณ์คุณภาพของอากาศ
                        <span class="absolute inset-0"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="hidden lg:flex lg:gap-x-12">
          </div>
        </nav>
      </header>
    </>
  )
}
