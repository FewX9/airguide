export default function Advert({ children }) {
    return (
        <>
            <div className="flex flex-col space-y-6 w-full max-w-screen-sm bg-white p-10 mt-10 rounded-xl ring-8 ring-white ring-opacity-40">
                <h1 className="text-2xl">ผู้สนับสนุน</h1>
                <div className="flex justify-between items-center overflow-x-auto snap-x">

                    <div className="w-100 scroll-ml-6 mr-5 snap-start">
                        <div className="relative py-3 w-96 rounded-2xl" id="widget">
                            <img src="https://images.unsplash.com/photo-1608788524926-41b5181b89a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=3150&amp;q=80"
                                className="rounded-2xl" />
                            <div className="absolute bottom-0 left-0 right-0 glassmorphism-25 h-16 flex p-3 px-5 space-y-2 rounded-b-3xl opacity-95 flex justify-between items-center">
                                <div className="flex space-x-3 text-white font-medium items-center">
                                    <img src="https://images.unsplash.com/profile-1580909319031-f23261ca6127image?dpr=2&amp;auto=format&amp;fit=crop&amp;w=20&amp;h=20&amp;q=60&amp;crop=faces&amp;bg=fff"
                                        className="transform scale-100 hover:scale-105 rounded-full ring-2 ring-offset-white ring-white" />
                                    <div>
                                        <div>Engin Akyurt</div>
                                        <div className="text-sm flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="mr-1 -ml-1"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                            </svg>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-100 scroll-ml-6 mr-5 snap-start">
                        <div className="relative py-3 w-96 rounded-2xl" id="widget">
                            <img src="https://images.unsplash.com/photo-1608788524926-41b5181b89a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=3150&amp;q=80"
                                className="rounded-2xl" />
                            <div className="absolute bottom-0 left-0 right-0 glassmorphism-25 h-16 flex p-3 px-5 space-y-2 rounded-b-3xl opacity-95 flex justify-between items-center">
                                <div className="flex space-x-3 text-white font-medium items-center">
                                    <img src="https://images.unsplash.com/profile-1580909319031-f23261ca6127image?dpr=2&amp;auto=format&amp;fit=crop&amp;w=20&amp;h=20&amp;q=60&amp;crop=faces&amp;bg=fff"
                                        className="transform scale-100 hover:scale-105 rounded-full ring-2 ring-offset-white ring-white" />
                                    <div>
                                        <div>Engin Akyurt</div>
                                        <div className="text-sm flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="mr-1 -ml-1"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                            </svg>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}