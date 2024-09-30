import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { faBootstrap, faCss3, faHtml5, faJs, faLaravel, faPhp, faReact } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
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
                    <h3 className='font-bold text-2xl'>FRONTEND</h3>
                    <div className='divider'></div>

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-8">

                        <div className="w-full items-center">
                            <div className="grid grid-cols-2 gap-2">
                                <div className='flex items-center justify-center'>
                                    <FontAwesomeIcon icon={faHtml5} size="3x" />

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
                                    <FontAwesomeIcon icon={faCss3} size="3x" />

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
                                    <FontAwesomeIcon icon={faJs} size="3x" />

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
                                    <FontAwesomeIcon icon={faReact} size="3x" />
                                </div>
                                <div>
                                    <h3 className='font-bold'>ReactJs</h3>
                                    <p>Intermediate</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full items-center">
                            <div className="grid grid-cols-2 gap-2">
                                <div className='flex items-center justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-nextjs">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993" />
                                        <path d="M15 12v-3" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className='font-bold'>NextJs</h3>
                                    <p>Intermediate</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full items-center">
                            <div className="grid grid-cols-2 gap-2">
                                <div className='flex items-center justify-center'>
                                    <FontAwesomeIcon icon={faBootstrap} size="3x" />
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-tailwind">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" />
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
                    <h3 className='font-bold text-2xl'>BACKEND</h3>
                    <div className='divider'></div>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-8">

                        <div className="w-full items-center">
                            <div className="grid grid-cols-2 gap-2">
                                <div className='flex items-center justify-center'>
                                    <FontAwesomeIcon icon={faPhp} size="3x" />
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-mysql">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M13 21c-1.427 -1.026 -3.59 -3.854 -4 -6c-.486 .77 -1.501 2 -2 2c-1.499 -.888 -.574 -3.973 0 -6c-1.596 -1.433 -2.468 -2.458 -2.5 -4c-3.35 -3.44 -.444 -5.27 2.5 -3h1c8.482 .5 6.421 8.07 9 11.5c2.295 .522 3.665 2.254 5 3.5c-2.086 -.2 -2.784 -.344 -3.5 0c.478 1.64 2.123 2.2 3.5 3" />
                                        <path d="M9 7h.01" />
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
                                    <FontAwesomeIcon icon={faLaravel} size="3x" />
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
                                    <FontAwesomeIcon icon={faGithub} size="3x" />
                                </div>
                                <div>
                                    <h3 className='font-bold'>Git/Github</h3>
                                    <p>Intermediate</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full items-center">
                            <div className="grid grid-cols-2 gap-2">
                                <div className='flex items-center justify-center'>
                                    <FontAwesomeIcon icon={faDatabase} size="3x" />
                                </div>
                                <div>
                                    <h3 className='font-bold'>Postgres</h3>
                                    <p>Basic</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full items-center">
                            <div className="grid grid-cols-2 gap-2">
                                <div className='flex items-center justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-supabase">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M4 14h8v7l8 -11h-8v-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className='font-bold'>Supabase</h3>
                                    <p>Basic</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full items-center">
                            <div className="grid grid-cols-2 gap-2">
                                <div className='flex items-center justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-vercel">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M3 19h18l-9 -15z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className='font-bold'>Vercel</h3>
                                    <p>Basic</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full items-center">
                            <div className="grid grid-cols-2 gap-2">
                                <div className='flex items-center justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-prisma">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M4.186 16.202l3.615 5.313c.265 .39 .754 .57 1.215 .447l10.166 -2.718a1.086 1.086 0 0 0 .713 -1.511l-7.505 -15.483a.448 .448 0 0 0 -.787 -.033l-7.453 12.838a1.07 1.07 0 0 0 .037 1.147z" />
                                        <path d="M8.5 22l3.5 -20" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className='font-bold'>Prisma</h3>
                                    <p>Basic</p>
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