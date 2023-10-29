export default function Footer({ Children }) {
    return (
        <>
            <div class="pt-10">
                <footer class="bg-gray-200 pt-8">
                    <div class="container mx-auto px-4 ">
                        <div class="flex flex-wrap text-left lg:text-left">
                            <div class="w-full lg:w-6/12 px-4">
                                <h4 class="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
                                <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
                                    Find us on any of these platforms, we respond 1-2 business days.
                                </h5>
                                <div class="mt-6 lg:mb-0 mb-6">
                                    <button class="bg-white text-black shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                        🐦
                                    </button>
                                    <button class="bg-white text-black shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                        📘
                                    </button>
                                    <button class="bg-white text-black shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                        🎨
                                    </button>
                                    <button class="bg-white text-black shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                        🐱
                                    </button>
                                </div>

                            </div>
                            <div class="w-full lg:w-6/12 px-4">
                                <div class="flex flex-wrap items-top mb-6">
                                    <div class="w-full lg:w-4/12 px-4 ml-auto">
                                        <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                                        <ul class="list-unstyled">
                                            <li>
                                                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</a>
                                            </li>
                                            <li>
                                                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
                                            </li>
                                            <li>
                                                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Github</a>
                                            </li>
                                            <li>
                                                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Free Products</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="w-full lg:w-4/12 px-4">
                                        <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                                        <ul class="list-unstyled">
                                            <li>
                                                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
                                            </li>
                                            <li>
                                                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
                                            </li>
                                            <li>
                                                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
                                            </li>
                                            <li>
                                                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="my-6 border-blueGray-300" />
                    </div>
                </footer>
            </div>
        </>
    )
}