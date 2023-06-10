export default function Authenticator() {
    return (
        <section className="py-36">
            <div className="container px-4 mx-auto">
                <div className="relative max-w-lg px-6 pt-16 pb-16 mx-auto bg-gray-500 md:px-10 lg:px-16 rounded-xl">
                    <a
                        className="absolute top-0 transform -translate-x-1/2 -translate-y-1/2 left-1/2"
                        href="#"
                    >
                        <img
                            className="block"
                            src="trizzle-assets/logos/trizzle-logo-blue.svg"
                            alt=""
                        />
                    </a>
                    <div className="relative max-w-md mx-auto">
                        <div className="mb-10 text-center">
                            <h2 className="mb-2 text-2xl font-semibold text-gray-100">
                                Sign up with new account
                            </h2>
                            <p className="font-medium text-gray-300">
                                Start your journey with us
                            </p>
                        </div>
                        <form action="">
                            <div className="relative w-full px-3 py-4 mb-8 border border-gray-400 rounded-lg h-14 hover:border-white focus-within:border-green-500">
                                <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">
                                    Name
                                </span>
                                <input
                                    className="block w-full text-sm font-medium text-gray-100 bg-transparent outline-none"
                                    id="signInInput5-1"
                                    type="text"
                                />
                            </div>
                            <div className="relative w-full px-3 py-4 mb-8 border border-gray-400 rounded-lg h-14 hover:border-white focus-within:border-green-500">
                                <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">
                                    Email*
                                </span>
                                <input
                                    className="block w-full text-sm font-medium text-gray-100 bg-transparent outline-none"
                                    id="signInInput5-2"
                                    type="email"
                                />
                            </div>
                            <div className="relative w-full px-3 py-4 mb-4 border border-gray-400 rounded-lg h-14 hover:border-white focus-within:border-green-500">
                                <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">
                                    Password*
                                </span>
                                <input
                                    className="block w-full text-sm font-medium text-gray-100 bg-transparent outline-none"
                                    id="signInInput5-3"
                                    type="password"
                                />
                            </div>
                            <span className="block mb-6 text-xs font-semibold text-gray-300">
                                Must be at least 12 characters.
                            </span>
                            <button className="block w-full py-4 mb-4 font-semibold leading-6 text-white transition duration-200 bg-blue-500 rounded-lg hover:bg-blue-600">
                                Create account
                            </button>
                            <a
                                className="flex items-center justify-center w-full py-4 mb-6 font-semibold leading-6 text-white transition duration-200 bg-gray-600 rounded-lg hover:bg-gray-700"
                                href="#"
                            >
                                <div className="w-4 bg-white rounded-sm">
                                    <svg
                                        width={16}
                                        height={12}
                                        viewBox="0 0 16 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M14.5 0H14L8 4.738L2 0H1.5C0.672 0 0 0.672 0 1.5V10.5C0 11.328 0.672 12 1.5 12H2V2.646L8 7.261L14 2.645V12H14.5C15.328 12 16 11.328 16 10.5V1.5C16 0.672 15.328 0 14.5 0Z"
                                            fill="#F44336"
                                        />
                                    </svg>
                                </div>
                                <span className="ml-3">Sign In with Gmail</span>
                            </a>
                            <p className="font-medium text-center">
                                <span className="text-gray-300">Already have an acoount?</span>
                                <a className="inline-block text-blue-500 hover:underline" href="#">
                                    Sign In
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}