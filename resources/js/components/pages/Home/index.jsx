import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import NewIdeas from "../../img/new_ideas.svg";
import WindTurbine from "../../img/wind_turbine.svg";
import LandingImage from "../../img/landing_img.jpg";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
    const Image1 =
        "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    const Image2 =
        "https://images.pexels.com/photos/127160/pexels-photo-127160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    const Image3 =
        "https://images.pexels.com/photos/37730/sunset-boat-sea-ship-37730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    const Image4 =
        "https://images.pexels.com/photos/8592911/pexels-photo-8592911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

    const navigate = useNavigate();
    const productRef = React.createRef();
    const [galleryImage, setGalleryImage] = useState(Image1);

    const navigateToStore = () => {
        navigate.push("/store-is-coming-soon");
    };

    useEffect(() => {
        if (props?.location?.hash == "#blueeconomy-battery-pack") {
            productRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    return (
        <>
            <NavBar layout={`main`} productRef={productRef} />

            <section className="bg-blue-900 relative">
                <div
                    className="border-b pt-32 bg-blue-900 bg-fixed w-full sm:h-[700px] h-[700px] md:h-[700px] lg:h-[700px] xl:h-[500px]"
                    style={{
                        backgroundImage: `url(${WindTurbine})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: 0.09,
                    }}
                ></div>
                <div className="absolute top-0 left-0 flex flex-wrap justify-center w-full pt-20 h-[700px] sm:h-[700px] md:h-[700px] lg:h-[700px] xl:h-[500px]">
                    <div className="flex flex-col px-10 my-auto">
                        <h1 className="my-2 sm:text-4xl md:text-4xl text-3xl font-bold leading-tight text-gray-50">
                            Blue Economy
                        </h1>
                        <p className="leading-normal text-xl text-left text-gray-100">
                            Sustainable use of ocean resources for
                        </p>
                        <p className="leading-normal text-xl text-left text-gray-100">
                            economic growth, improved livelihoods, and jobs
                        </p>
                        <p className="leading-normal text-xl text-left text-gray-100">
                            while preserving the health of ocean ecosystem.
                        </p>
                        <button
                            className="hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg w-64"
                            onClick={navigateToStore}
                        >
                            Visit The Blue Store
                        </button>
                    </div>
                    <div className=" my-auto">
                        <img
                            className="z-50 object-cover w-full"
                            style={{ height: "350px" }}
                            src={NewIdeas}
                        />
                    </div>
                </div>
            </section>

            <div ref={productRef}></div>

            <section className="bg-white py-20">
                <div className="container max-w-5xl mx-auto m-8">
                    <h1 className="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">
                        Lorem ipsum dolor sit amet
                    </h1>
                    <div className="w-full mb-4">
                        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                    <div className="flex flex-wrap py-5">
                        <div className="w-5/6 sm:w-1/2 p-6 flex flex-col justify-center">
                            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                Fusce non massa nec felis
                            </h3>
                            <p className="text-gray-600 text-xl">
                                In laoreet semper tortor eget commodo. Sed
                                posuere blandit urna, in sodales mi tincidunt
                                in. Sed fermentum venenatis augue ac mollis.
                                Mauris nec mollis dolor, pharetra tempor nulla.
                            </p>
                        </div>
                        <div className="w-full sm:w-1/2 p-6">
                            <img
                                className="w-full md:w-4/5 z-50 rounded-3xl shadow-lg"
                                src={
                                    "https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                }
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                        <div className="w-full sm:w-1/2 p-6 mt-6">
                            <img
                                className="w-full md:w-4/5 z-50 rounded-3xl shadow-lg"
                                src={
                                    "https://images.pexels.com/photos/66258/staniel-cay-swimming-pig-seagull-fish-66258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                }
                            />
                        </div>
                        <div className="w-5/6 sm:w-1/2 p-6 flex flex-col justify-center">
                            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                Proin aliquam ante nulla
                            </h3>
                            <p className="text-gray-600 text-xl">
                                In laoreet semper tortor eget commodo. Sed
                                posuere blandit urna, in sodales mi tincidunt
                                in. Sed fermentum venenatis augue ac mollis.
                                Mauris nec mollis dolor, pharetra tempor nulla.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-blue-900 relative">
                <div
                    className="border-b pt-32 bg-blue-600 bg-fixed h-[500px]"
                    style={{
                        backgroundImage: `url(https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: 0.09,
                    }}
                ></div>
                <div className="absolute top-0 left-0 flex flex-wrap justify-center w-full h-[500px]">
                    <div className="grid grid-cols-2 gap-2 my-auto">
                        <img
                            className={`cursor-pointer z-50 rounded-3xl shadow-lg object-cover h-20 w-40 md:h-20 md:w-40 lg:h-24 lg:w-48 xl:h-32 xl:w-64 ${
                                galleryImage == Image1 &&
                                "border-4 border-white"
                            }`}
                            src={Image1}
                            onClick={() => setGalleryImage(Image1)}
                        />
                        <img
                            className={`cursor-pointer z-50 rounded-3xl shadow-lg object-cover h-20 w-40 md:h-20 md:w-40 lg:h-24 lg:w-48 xl:h-32 xl:w-64 ${
                                galleryImage == Image2 &&
                                "border-4 border-white"
                            }`}
                            src={Image2}
                            onClick={() => setGalleryImage(Image2)}
                        />
                        <img
                            className={`cursor-pointer z-50 rounded-3xl shadow-lg object-cover h-20 w-40 md:h-20 md:w-40 lg:h-24 lg:w-48 xl:h-32 xl:w-64 ${
                                galleryImage == Image3 &&
                                "border-4 border-white"
                            }`}
                            src={Image3}
                            onClick={() => setGalleryImage(Image3)}
                        />
                        <img
                            className={`cursor-pointer z-50 rounded-3xl shadow-lg object-cover h-20 w-40 md:h-20 md:w-40 lg:h-24 lg:w-48 xl:h-32 xl:w-64 ${
                                galleryImage == Image4 &&
                                "border-4 border-white"
                            }`}
                            src={Image4}
                            onClick={() => setGalleryImage(Image4)}
                        />
                    </div>
                    <div className="flex flex-col px-10 my-auto">
                        {galleryImage && (
                            <img
                                className="z-50 rounded-3xl w-full shadow-lg border-4 border-white object-cover h-64 md:h-[300px] lg:h-[300px] xl:h-[350px]"
                                src={galleryImage}
                            />
                        )}
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 py-8">
                <div className="container max-w-5xl mx-auto m-8">
                    <h1 className="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">
                        Blue Awards
                    </h1>
                    <div className="w-full mb-4">
                        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                    <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                        <div className="w-full sm:w-1/2 p-6 mt-6">
                            <img
                                className="w-full md:w-4/5 z-50 rounded-3xl shadow-lg"
                                src={
                                    "https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                }
                            />
                        </div>
                        <div className="w-5/6 sm:w-1/2 p-6 flex flex-col justify-center">
                            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                Interdum et malesuada fames ac ante ipsum primis
                                in faucibus. Fusce et rhoncus ex.
                            </h3>
                            <p className="text-gray-600 text-xl">
                                December 9, 2020
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-8">
                <div className="container max-w-5xl mx-auto">
                    <h1 className="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">
                        Partners
                    </h1>
                    <div className="w-full mb-4">
                        <div className="h-1 mx-auto gradient w-32 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                    <div className="flex flex-wrap justify-center py-5">
                        <div className="p-6 mx-5">
                            <img
                                className="w-40"
                                src={
                                    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png"
                                }
                            />
                        </div>
                        <div className="p-6 mx-5">
                            <img
                                className="w-40"
                                src={
                                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZQqB1bKDNdZmWHszpsiyFYSPXcpmv6XBB0Q&usqp=CAU"
                                }
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-blue-900 relative">
                <div
                    className="border-b pt-32 bg-blue-900 bg-fixed w-full"
                    style={{
                        backgroundImage: `url(${LandingImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: 0.09,
                        height: "350px",
                    }}
                ></div>
                <div className="absolute top-0 left-0 w-full mx-auto text-center py-6 flex flex-col justify-center content-center h-full">
                    <h1 className="w-full my-2 text-3xl font-bold text-center text-white">
                        Proin non arcu tortor
                    </h1>
                    <div className="w-full mb-4">
                        <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                    <h3 className="my-4 text-2xl leading-tight">
                        Maecenas in mi sit amet tortor iaculis elementum ut vel
                        magna.
                    </h3>
                    <button
                        className="mx-auto w-56 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
                        onClick={navigateToStore}
                    >
                        Click Here
                    </button>
                </div>
            </section>
        </>
    );
};

export default Home;
