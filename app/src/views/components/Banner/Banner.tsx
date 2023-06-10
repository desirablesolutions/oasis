export default function Banner() {
    return (
        <section className="z-10 py-3">
            <div className="container px-4 mx-auto">
                <div className="relative px-8 pt-12 overflow-hidden lg:py-18 md:px-18 rounded-2xl">
                    <img
                        className="absolute top-0 left-0 object-cover w-full h-full"
                        src="trizzle-assets/images/banner-background.png"
                        alt=""
                    />
                    <div className="relative max-w-sm mx-auto mb-16 lg:mx-0 lg:mb-0">
                        <h3 className="mb-3 text-3xl font-bold text-white">
                            Ideal banner asset for your dashboard project
                        </h3>
                        <p className="mb-6 font-medium text-blue-200">
                            Go global with our UI Resources and solutions
                        </p>
                        <a
                            className="inline-block w-full px-6 py-3 font-semibold leading-6 text-center transition duration-200 bg-gray-500 rounded-lg sm:w-auto md:px-18 text-blue-50 hover:bg-gray-600"
                            href="#"
                        >
                            Get Started
                        </a>
                    </div>
                    <img
                        className="absolute bottom-0 right-0 hidden lg:block lg:max-w-lg xl:max-w-2xl xl:mr-18"
                        src="trizzle-assets/images/banner-placeholder-dashboard.png"
                        alt=""
                    />
                    <img
                        className="relative block mx-auto lg:hidden"
                        src="trizzle-assets/images/banner-placeholder-dashboard.png"
                        alt=""
                    />
                </div>
            </div>
        </section>

    )
}