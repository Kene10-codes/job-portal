import { FaEnvelopeOpenText, FaRocket } from 'react-icons/fa6'
const Newsletter = () => {
    return (
        <div>
            <div>
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                    {' '}
                    <FaEnvelopeOpenText />
                    Email me for jobs
                </h3>
                <p className="text-black  text-base mb-4">
                    Subscribe to our email to be getting updated job updates.
                </p>
                <div className="w-full space-y-4">
                    <form action="">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="name@emial.com"
                            className="w-full block py-2 pl-3 border focus:outline-none"
                        />
                        <input
                            type="submit"
                            value={'Subscribe'}
                            className="w-full block py-2 pl-3 border focus:outline-none bg-red-500 rounded-sm text-white cursor-pointer font-semibold"
                        />
                    </form>
                </div>
            </div>

            <div className="mt-20">
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                    {' '}
                    <FaRocket />
                    Get notified faster
                </h3>
                <p className="text-black  text-base mb-4">
                    Get notified faster on the screen.
                </p>
                <div className="w-full space-y-4">
                    <form action="">
                        <input
                            type="file"
                            name="file"
                            id="file"
                            placeholder="Upload File"
                            className="w-full block py-2 pl-3 border focus:outline-none"
                        />
                        <input
                            type="submit"
                            value={'Upload resume'}
                            className="w-full block py-2 pl-3 border focus:outline-none bg-red-500 rounded-sm text-white cursor-pointer font-semibold"
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
