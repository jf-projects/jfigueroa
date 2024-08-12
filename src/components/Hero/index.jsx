import './index.scss';
import profileDefault from './../../Assets/image/2.png';
import profileHover from './../../Assets/image/1.png';
import cv from './../../Assets/pdf/cv.pdf';
import { useState } from 'react';

const Hero = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="hero bg-base-200 min-h-screen bg-transparent flex items-center justify-center mt-0 sm:mt-10" id='home-section'>
            <div className="hero-content flex-col lg:flex-row flex items-center gap-1">
                <div className="avatar mr-8 ring-offset-8"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <div className="md:w-80 sm:w-40 rounded-full overflow-hidden">
                        <img
                            src={hovered ? profileHover : profileDefault}
                            alt="Jayson Figueroa"
                        />
                    </div>
                </div>
                <div className="text-center p-6 rounded-lg">
                    <h5 className="text-2xl font-medium">Hello I'm</h5>
                    <h1 className="text-5xl font-bold mt-2 mb-2">JAYSON FIGUEROA</h1>
                    <h5 className='text-2xl font-medium'>WEB DEVELOPER</h5>
                    <div className='pt-3 flex justify-center gap-3'>
                        <a href={cv} download className="btn btn-outline btn-sm rounded-full">
                            Download CV
                        </a>
                        <a href='#contact-section' className="btn btn-outline btn-sm rounded-full">
                            Contact Info
                        </a>

                    </div>
                    <div className='pt-3 flex justify-center gap-3'>
                        <a href='https://github.com/jf-projects/' target='_blank' rel='noreferrer' className="btn btn-neutral  btn-circle">
                            <svg width={24} height={24} fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.25 22.5v-3.865a3.361 3.361 0 0 0-.94-2.607c3.14-.35 6.44-1.538 6.44-6.99a5.43 5.43 0 0 0-1.5-3.746 5.058 5.058 0 0 0-.09-3.765s-1.18-.35-3.91 1.478a13.397 13.397 0 0 0-7 0C6.52 1.177 5.34 1.527 5.34 1.527a5.058 5.058 0 0 0-.09 3.765 5.43 5.43 0 0 0-1.5 3.775c0 5.413 3.3 6.602 6.44 6.991a3.366 3.366 0 0 0-.94 2.577V22.5" />
                                <path d="M9.25 19.503c-5 1.498-5-2.496-7-2.996" />
                            </svg>
                        </a>
                        {/* <a href='#!' className="btn btn-neutral btn-circle" target='_blank' rel='noreferrer'>
                            <svg width={24} height={24} fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <path d="M2 9h4v12H2z" />
                                <path d="M4 2a2 2 0 1 0 0 4 2 2 0 1 0 0-4z" />
                            </svg>
                        </a> */}

                        <a href='https://www.facebook.com/jaysonxxii' className="btn btn-neutral btn-circle" target='_blank' rel='noreferrer'>
                            <svg width={24} height={24} fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
