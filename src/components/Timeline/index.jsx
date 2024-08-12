import './index.scss';

const Timeline = () => {
    return <div className="min-h-screen  flex flex-col items-center justify-start  mt-12">
        <div className='mb-24 text-center'>
            <p className="text-sm">My</p>
            <h1 className="text-4xl font-bold ">Personal Journey</h1>
        </div>

        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                    </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end"
                    data-aos="fade-right"
                    data-aos-easing="ease-in-sine"
                >
                    <time className="font-mono italic">2017</time>
                    <div className="text-lg font-black">BS Information Technology</div>
                    Republic Central Colleges
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                    </svg>
                </div>
                <div className="timeline-end mb-10"
                    data-aos="fade-left"
                    data-aos-easing="ease-in-sine"
                >
                    <time className="font-mono italic">2017</time>
                    <div className="text-lg font-black">Junior Software Developer</div>
                    Angeles City Local Government
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                    </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end"
                    data-aos="fade-right"
                    data-aos-easing="ease-in-sine"
                >
                    <time className="font-mono italic">2018</time>
                    <div className="text-lg font-black">IT Staff</div>
                    Republic Central Colleges
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                    </svg>
                </div>
                <div className="timeline-end mb-10"
                    data-aos="fade-left"
                    data-aos-easing="ease-in-sine"
                >
                    <time className="font-mono italic">2020</time>
                    <div className="text-lg font-black">Software Engineer</div>
                    <div className="text-sm font-black">Quickstrike Manufacturing Inc.</div>
                </div>
                <hr />
            </li>

            <li>
                <hr />
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                    </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end"
                    data-aos="fade-right"
                    data-aos-easing="ease-in-sine"
                >
                    <time className="font-mono italic">2024</time>
                    <div className="text-sm font-black">Freelance Developer</div>
                </div>
            </li>
        </ul>
    </div>

}

export default Timeline;