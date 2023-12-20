import React, { useEffect, useState } from "react";
import Logo from "./logo";

export default function Header() : React.ReactElement {
    const [isToggle, setIsToggle] = useState<boolean>(false);
    const handleChange = () => setIsToggle(!isToggle);

    useEffect(() => {
        console.log(isToggle);
    }, [isToggle])
    
    return (
        <header className="sticky w-full top-0 z-50">
            <nav className="bg-white dark:bg-gray-900 border-b-2 border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Logo />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Nördic Tapir</span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button
                            id="nav-button"
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black md:hidden"
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                            onClick={() => handleChange()}>
                            <span className="sr-only">Open main menu</span>
                            <svg 
                                height="38" 
                                viewBox="0 0 24 24" 
                                width="38" 
                                aria-label="Menu"
                                className={`nav-open md:hidden ${ isToggle ? "hidden" : ""}`}>
                                <path d="M2 19h20M2 5h20M2 12h20" fill="none" stroke-width="2" stroke="#000"></path>
                            </svg>
                            <svg 
                                viewBox="0 0 24 24" 
                                height="38" 
                                width="38" 
                                aria-label="Close" 
                                className={`nav-close ${ !isToggle ? "hidden" : ""}`}>
                                <path d="m3 3 18 18M3 21 21 3" fill="none" stroke-width="2" stroke="#000"></path>
                            </svg>
                        </button>
                    </div>
                    <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${ !isToggle ? "hidden" : ""}`} 
                        id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a
                                    href="/"
                                    className="block py-2 px-3 rounded md:bg-transparent text-gray-900 md:p-0 md:dark:text-blue-500"
                                    aria-current="page">About</a>
                            </li>
                            <li>
                                <a href="/blogs" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blogs</a>
                            </li>
                            <li>
                                <a href="/work" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Work</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}