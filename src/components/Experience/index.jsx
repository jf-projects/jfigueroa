import './index.scss';

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
AOS.init();

const Experience = () => {
    return <>
        <div className="min-h-screen flex flex-col items-center justify-start">
            <div className='mb-32 text-center'>
                <p className="text-sm">Explore my</p>
                <h1 className="text-4xl font-bold ">Experience</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div className="card w-full divide-gray-800 border-solid border-2 p-4 items-center pt-12 pb-12 rounded-3xl gap-2"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                >
                    <h3 className='font-bold'>FRONTEND</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-8">

                        <div className="w-full items-center">
                            <div className="grid grid-cols-2 gap-2">
                                <div className='flex items-center justify-center'>
                                    <svg width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m9 11 3 3L22 4" />
                                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className='font-bold'>HTML</h3>
                                    <p>Experienced</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full items-center">
                            <div className="grid grid-cols-2 gap-2">
                                <div className='flex items-center justify-center'>
                                    <svg width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m9 11 3 3L22 4" />
                                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className='font-bold'>CSS</h3>
                                    <p>Experienced</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full items-center">
                            <div className="grid grid-cols-2 gap-2">
                                <div className='flex items-center justify-center'>
                                    <svg width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m9 11 3 3L22 4" />
                                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className='font-bold'>Javascript</h3>
                                    <p>Experienced</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full items-center">
                            <div className="grid grid-cols-2 gap-2">
                                <div className='flex items-center justify-center'>
                                    <svg width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m9 11 3 3L22 4" />
                                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className='font-bold'>ReactJs</h3>
                                    <p>Basic</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full items-center">
                            <div className="grid grid-cols-2 gap-2">
                                <div className='flex items-center justify-center'>
                                    <svg width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m9 11 3 3L22 4" />
                                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className='font-bold'>Bootstrap</h3>
                                    <p>Experienced</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full items-center">
                            <div className="grid grid-cols-2 gap-2">
                                <div className='flex items-center justify-center'>
                                    <svg width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m9 11 3 3L22 4" />
                                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className='font-bold'>Tailwind</h3>
                                    <p>Intermediate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="card w-full divide-gray-800 border-solid border-2 p-4 items-center pt-12 pb-12 rounded-3xl gap-2"
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                >
                    <h3 className='font-bold'>BACKEND</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-8">

                        <div className="w-full items-center">
                            <div className="grid grid-cols-2 gap-2">
                                <div className='flex items-center justify-center'>
                                    <svg width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m9 11 3 3L22 4" />
                                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className='font-bold'>PHP</h3>
                                    <p>Experienced</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full items-center">
                            <div className="grid grid-cols-2 gap-2">
                                <div className='flex items-center justify-center'>
                                    <svg width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m9 11 3 3L22 4" />
                                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className='font-bold'>Mysql</h3>
                                    <p>Experienced</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full items-center">
                            <div className="grid grid-cols-2 gap-2">
                                <div className='flex items-center justify-center'>
                                    <svg width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m9 11 3 3L22 4" />
                                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className='font-bold'>Laravel</h3>
                                    <p>Experienced</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full items-center">
                            <div className="grid grid-cols-2 gap-2">
                                <div className='flex items-center justify-center'>
                                    <svg width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m9 11 3 3L22 4" />
                                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className='font-bold'>NODEjs</h3>
                                    <p>Basic</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full items-center">
                            <div className="grid grid-cols-2 gap-2">
                                <div className='flex items-center justify-center'>
                                    <svg width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m9 11 3 3L22 4" />
                                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className='font-bold'>Git/Github</h3>
                                    <p>Intermediate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Experience;