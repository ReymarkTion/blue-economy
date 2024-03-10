import React from "react";
import "./main.css";

function Footer() {
    return (
        <>
            {/* <!--Footer--> */}
            <footer className="bg-white">
                <div className="container mx-auto  px-8">
                    <div className="w-full flex flex-col md:flex-row py-6">
                        <div className="flex-1">
                            <a
                                className="text-orange-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                                href="/"
                            >
                                <a
                                    className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                                    href="/"
                                >
                                    Testing
                                </a>
                            </a>
                            <p className="text-gray-800 font-extrabold text-xl py-2">
                                Blue Economy
                            </p>
                            <p className="text-gray-500 text-base sm:mb-10">
                                Interdum et malesuada
                            </p>
                        </div>

                        <div className="flex-1">
                            <p className="uppercase text-gray-800 font-extrabold md:mb-6">
                                Explore
                            </p>
                            <ul className="list-reset mb-6">
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a
                                        href="/"
                                        className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a
                                        href="/#blueeconomy-battery-pack"
                                        className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                                    >
                                        Product
                                    </a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a
                                        href="/contact"
                                        className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a
                                        href="/about"
                                        className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                                    >
                                        About
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <p className="uppercase text-gray-800 font-extrabold md:mb-6">
                                SOCIAL
                            </p>
                            <ul className="list-reset mb-6">
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a
                                        href="https://facebook.com"
                                        target="_blank"
                                        className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                                    >
                                        Facebook
                                    </a>
                                </li>
                                {/* <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">Linkedin</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">Twitter</a>
                                </li> */}
                            </ul>
                        </div>
                        <div className="flex-1">
                            <p className="uppercase text-gray-800 font-extrabold md:mb-6">
                                NEED HELP?
                            </p>
                            <ul className="list-reset mb-6">
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a
                                        href="/blogs"
                                        className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                                    >
                                        Official Blog
                                    </a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a
                                        href="/page-is-under-construction"
                                        className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                                    >
                                        Customer Service
                                    </a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a
                                        href="/page-is-under-construction"
                                        className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                                    >
                                        Sales
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-center bg-gray-800 py-10">
                    <p className="text-sm text-gray-300">
                        Copyright &copy; 2020. All Rights Reserved.
                    </p>
                    {/* <a href="#" className="text-sm text-blue-300">Privacy Policy</a> <span className="text-sm text-gray-300">|</span> <a href="#" className="text-sm text-blue-300">Terms of Use</a> */}
                </div>
            </footer>
        </>
    );
}
export default Footer;
