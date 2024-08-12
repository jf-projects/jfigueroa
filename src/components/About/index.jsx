import './index.scss';
import profile from './../../Assets/image/1.png';

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
AOS.init();

const About = () => {
    return (
        <div className="min-h-screen  flex flex-col items-center justify-start p-16" id='personal-section' >
            <div className='mb-32 text-center'>
                <p className="text-sm">Get to know more</p>
                <h1 className="text-4xl font-bold ">About Me</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                <div className="avatar w-full items-center"
                    data-aos="fade-right"
                    data-aos-easing="ease-in-sine"
                >
                    <div className="rounded-xl ">
                        <img src={profile} alt="Avatar" />
                    </div>
                </div>

                <div className="col-span-2"
                    data-aos="fade-left"
                    data-aos-easing="ease-in-sine"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
                        <div className="card w-full divide-gray-800 border-solid border-2 p-4 items-center pt-12 pb-12 rounded-3xl gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-12 pb-2">
                                <path d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                            </svg>

                            <h3 className='font-bold'>Experience</h3>
                            <p>4 Years</p>
                            <p>Backend Developer</p>
                        </div>
                        <div className="card w-full divide-gray-800 border-solid border-2 p-4 items-center pt-12 pb-12 rounded-3xl gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-12">
                                <path d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                            </svg>

                            <h3 className='font-bold'>Education</h3>
                            <p>B.S. Information Technology</p>
                            <p>Republic Central Colleges</p>
                        </div>
                        <div className="col-span-1 lg:col-span-2 card w-full pt-5 pb-5">
                            <p className='text-center'>
                                I'm a web developer with 5 years of experience in PHP and JavaScript. My debugging skills? Let’s just say I’ve had more conversations with error messages than with real people but at least the code listens (most of the time).
                            </p>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    );
}

export default About;
