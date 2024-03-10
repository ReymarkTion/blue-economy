import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = ({ layout, productRef }) => {
    const navigate = useNavigate();
    const [noLogoBg, setNoLogoBg] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const mainLayoutListener = () => {
        let scrollpos = window.scrollY;
        let header = document.getElementById("header");
        let navcontent = document.getElementById("nav-content");
        // let navaction = document.getElementById("navAction");
        let brandname = document.getElementById("brandname");
        let menuNames = document.getElementById("menu-names");
        let toToggle = document.querySelectorAll(".toggleColour");

        if (layout != "main") {
            setupNavNotMain(header, toToggle, menuNames, navcontent);

            return;
        }

        document.addEventListener("scroll", function () {
            /*Apply classes for slide in bar*/
            scrollpos = window.scrollY;

            if (scrollpos > 10) {
                header.classList.add("bg-white");
                // navaction.classList.remove("bg-white");
                // navaction.classList.add("gradient");
                // navaction.classList.remove("text-gray-800");
                // navaction.classList.add("text-white");

                //Use to switch toggleColour colours
                for (var i = 0; i < toToggle.length; i++) {
                    toToggle[i].classList.add("text-gray-800");
                    toToggle[i].classList.remove("text-white");
                }

                let items = menuNames.getElementsByTagName("li");

                for (var i = 0; i < items.length; ++i) {
                    items[i]
                        .getElementsByTagName("a")[0]
                        .classList.add("text-gray-800");
                    items[i]
                        .getElementsByTagName("a")[0]
                        .classList.remove("text-gray-300");
                }

                header.classList.add("shadow");
                navcontent.classList.remove("bg-gray-100");
                navcontent.classList.add("bg-white");

                setNoLogoBg(true);
            } else {
                header.classList.remove("bg-white");
                // navaction.classList.remove("gradient");
                // navaction.classList.add("bg-white");
                // navaction.classList.remove("text-white");
                // navaction.classList.add("text-gray-800");

                // Use to switch toggleColour colours
                for (var i = 0; i < toToggle.length; i++) {
                    toToggle[i].classList.add("text-white");
                    toToggle[i].classList.remove("text-gray-800");
                }

                let items = menuNames.getElementsByTagName("li");

                for (var i = 0; i < items.length; ++i) {
                    items[i]
                        .getElementsByTagName("a")[0]
                        .classList.remove("text-gray-800");
                    items[i]
                        .getElementsByTagName("a")[0]
                        .classList.add("text-gray-300");
                }

                header.classList.remove("shadow");
                navcontent.classList.remove("bg-white");
                navcontent.classList.add("bg-gray-100");

                setNoLogoBg(false);
            }
        });
    };

    const setupNavNotMain = (header, toToggle, menuNames, navcontent) => {
        header.classList.add("bg-white");
        // navaction.classList.remove("bg-white");
        // navaction.classList.add("gradient");
        // navaction.classList.remove("text-gray-800");
        // navaction.classList.add("text-white");

        //Use to switch toggleColour colours
        for (var i = 0; i < toToggle.length; i++) {
            toToggle[i].classList.add("text-gray-800");
            toToggle[i].classList.remove("text-white");
        }

        let items = menuNames.getElementsByTagName("li");

        for (var i = 0; i < items.length; ++i) {
            items[i]
                .getElementsByTagName("a")[0]
                .classList.add("text-gray-800");
            items[i]
                .getElementsByTagName("a")[0]
                .classList.remove("text-gray-300");
        }

        header.classList.add("shadow");
        navcontent.classList.remove("bg-gray-100");
        navcontent.classList.add("bg-white");

        setNoLogoBg(true);
    };

    useEffect(() => {
        mainLayoutListener();
    });

    const navigateToProducts = () => {
        setIsOpen(false);

        if (productRef) {
            return productRef.current.scrollIntoView({ behavior: "smooth" });
        }

        navigate.push("/#blueeconomy-battery-pack");
    };

    const navigateToTab = (link) => {
        setIsOpen(false);
        window.scrollTo(0, 0);

        navigate.push(link);
    };

    return (
        <nav
            id="header"
            className="fixed w-full z-30 top-0 text-white"
            style={{ zIndex: 200 }}
        >
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="pl-4 flex items-center">
                    <a
                        className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                        href="/"
                    >
                        Testing
                    </a>
                </div>

                <div className="block lg:hidden pr-4">
                    <button
                        id="nav-toggle"
                        className={`flex items-center p-1 hover:text-white-900 ${
                            noLogoBg ? "text-blue-800" : "text-white-800"
                        }`}
                        onClick={() => setIsOpen(true)}
                    >
                        <svg
                            className="fill-current h-6 w-6"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>

                <div
                    id="nav-content"
                    className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 lg:bg-transparent p-4 lg:p-0 z-20"
                >
                    <ul
                        id="menu-names"
                        className="list-reset lg:flex justify-end flex-1 items-center"
                    >
                        <li className="mr-3">
                            <a
                                className="inline-block py-2 px-4 text-gray-300 font-bold no-underline text-sm"
                                href="/"
                            >
                                HOME
                            </a>
                        </li>
                        <li className="mr-3">
                            <a
                                className="inline-block text-gray-300 no-underline font-bold hover:text-underline py-2 px-4 text-sm cursor-pointer"
                                onClick={navigateToProducts}
                            >
                                PRODUCT
                            </a>
                        </li>
                        <li className="mr-3">
                            <a
                                className="inline-block text-gray-300 no-underline font-bold hover:text-underline py-2 px-4 text-sm"
                                href="/blogs"
                            >
                                BLOG
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />

            <div
                className="z-10 fixed inset-0 transition-opacity"
                style={!isOpen ? { display: "None" } : { display: "block" }}
            >
                <div className="z-10 fixed inset-0 transition-opacity">
                    <div
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-black opacity-50"
                        tabIndex="0"
                    ></div>
                </div>
            </div>

            <aside
                className={`transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <span className="flex w-full items-center p-4 border-b">
                    {/* <img
                        src={NewIdeas}
                        alt="Logo"
                        className="h-auto w-32 mx-auto"
                    /> */}
                </span>

                <span
                    className="flex items-center p-1 hover:bg-blue-100"
                    onClick={() => navigateToTab("/")}
                >
                    <a className="inline-block text-gray-700 no-underline font-bold hover:text-underline py-2 px-4 text-sm">
                        HOME
                    </a>
                </span>

                <span
                    className="flex items-center p-1 hover:bg-blue-100"
                    onClick={() => navigateToProducts()}
                >
                    <a className="inline-block text-gray-700 no-underline font-bold hover:text-underline py-2 px-4 text-sm cursor-pointer">
                        PRODUCT
                    </a>
                </span>

                <span
                    className="flex items-center p-1 hover:bg-blue-100"
                    onClick={() => navigateToTab("/blogs")}
                >
                    <a className="inline-block text-gray-700 no-underline font-bold hover:text-underline py-2 px-4 text-sm">
                        BLOG
                    </a>
                </span>

                <span
                    className="flex items-center p-1 hover:bg-blue-100"
                    onClick={() => navigateToTab("/contact")}
                >
                    <a className="inline-block text-gray-700 no-underline font-bold hover:text-underline py-2 px-4 text-sm">
                        CONTACT US
                    </a>
                </span>

                <span
                    className="flex items-center p-1 hover:bg-blue-100"
                    onClick={() => navigateToTab("/about")}
                >
                    <a className="inline-block text-gray-700 no-underline font-bold hover:text-underline py-2 px-4 text-sm">
                        ABOUT
                    </a>
                </span>

                <div className="fixed bottom-0 w-full"></div>
            </aside>
        </nav>
    );
};

export default NavBar;
