const Projects = () => {
    return (
        <div id="project-section" className="min-h-screen items-center justify-start p-12">

            <div className="bg-transparent h-full py-6 sm:py-8 lg:py-12" >
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                        <div className="flex items-center gap-12">
                            <h2 className="text-2xl font-bold lg:text-3xl">Projects Involved</h2>
                            <p className="hidden max-w-screen-sm md:block">
                                Check out the projects I’ve been part of.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                        <a data-aos="zoom-in-up"
                            href="https://www.alliteamuniforms.com/sports" target="_blank" rel="noreferrer"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                        >
                            <img loading="lazy"
                                src="https://allisportsgroup.com/wp-content/uploads/2021/05/alli-sports-logo.svg"
                                alt="Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Alli Sports Customizer</span>
                        </a>

                        <a data-aos="zoom-in-up"
                            href="https://www.pguniforms.com/" target="_blank" rel="noreferrer"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                        >
                            <img
                                loading="lazy"
                                alt="Magicle"
                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                src="https://7d7ce4d2fd579ab1db8f-ff847b6fa91c3461c76d26fad16823fb.ssl.cf1.rackcdn.com/22926.jpg"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Perfect Game Customizer</span>
                        </a>

                        <a data-aos="zoom-in-up"
                            href="https://customizer.prolook.com/index" target="_blank" rel="noreferrer"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                        >
                            <img
                                src="https://images.squarespace-cdn.com/content/v1/55710bd9e4b0ce0031768590/ab15a73e-8f87-40d1-b447-21930768dc34/prolook15.3.jpg"
                                loading="lazy"
                                alt="Martin Sanchez"
                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Prolook Sports Customizer</span>
                        </a>

                        <a data-aos="zoom-in-up"
                            href="https://qx7.prolook.com/login" target="_blank" rel="noreferrer"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                        >
                            <img
                                src="https://qx7.s3-us-west-2.amazonaws.com/uploaded_files/qx_full.png"
                                loading="lazy"
                                alt="Lorenzo Herrera"
                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Qx7</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
