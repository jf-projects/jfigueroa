import React from 'react';
import { useState } from 'react';
import './index.scss';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = React.useState('dark');
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    // initially set the theme and "listen" for changes to apply them to the HTML tag
    React.useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <>
            <div className="navbar fixed bg-base-100 top-0 z-50 w-full sm:w-8/12">
                <div className="flex-1">
                    <a className="text-xl" href='#home-section'>JFIGUEROA</a>
                </div>
                <div className="hidden md:flex flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href='#home-section'>Home</a></li>
                        <li><a href='#personal-section'>Personal Journey</a></li>
                        <li><a href='#project-section'>Projects</a></li>
                        <label className="grid cursor-pointer place-items-center">
                            <input
                                onClick={toggleTheme}
                                type="checkbox"
                                value="synthwave"
                                className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
                                checked={theme === 'dark'}
                            />
                            <svg
                                className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5" />
                                <path
                                    d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                            </svg>
                            <svg
                                className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        </label>
                    </ul>
                </div>

                <div className="md:hidden relative">
                    <button onClick={() => setIsOpen(!isOpen)} className="btn btn-square btn-ghost">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>

                    {/* Dropdown Menu for Small Screens */}
                    <ul
                        tabIndex={0}
                        className={`menu menu-sm dropdown-content absolute right-0 top-full  rounded-box z-50 w-52 p-2 shadow bg-base-100 ${isOpen ? 'block' : 'hidden'}`}
                    >
                        <li><a href='#home-section'>Home</a></li>
                        <li><a href='#personal-section'>Personal Journey</a></li>
                        <li><a href='#project-section'>Projects</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;



