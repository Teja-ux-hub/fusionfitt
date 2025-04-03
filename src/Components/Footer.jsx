import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from './logo.png';


export default function Footer() {
    return (
        <footer className="bg-black border-y text-white">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 text-white">
                <div className="md:flex md:justify-between text-white">
                    <div className="mb-6 md:mb-0 text-white">
                        <Link to="/" className="flex items-center">
                            <img
                                src={logo}
                                className="mr-3 h-28"
                                alt="Logo"
                                
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 text-white">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Resources</h2>
                            <ul className="text-white font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Follow us</h2>
                            <ul className="text-white font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://www.instagram.com/meh_teja/"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Instagram
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Legal</h2>
                            <ul className="text-white font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-white sm:text-center">
                       
                        <a href="" className="hover:underline">
                            Fusion fit
                        </a>
                        . All Rights Reserved.
                    </span>
                    
                </div>
            </div>
        </footer>
    );
}
