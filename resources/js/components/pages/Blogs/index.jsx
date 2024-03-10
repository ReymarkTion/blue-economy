import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import BlogPost from "../../img/blog_post.svg";
import { getBlogPagination } from "../../helpers/api";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

const Blogs = ({}) => {
    const navigate = useNavigate();
    const [blogList, setBlogList] = useState([]);
    const [loadingBlogs, setLoadingBlogs] = useState(false);
    const [hideShowMore, setHideShowMore] = useState(false);
    const [offset, setOffSet] = useState(0);
    const offSetIncrement = 3;

    useEffect(() => {
        setLoadingBlogs(true);
        getBlogPagination(offset, (response) => {
            if (response.status == "success") {
                setLoadingBlogs(false);
                setBlogList([...blogList, ...response.blogs]);
                setOffSet(offset + offSetIncrement);

                if (response.blogs.length == 0) {
                    setHideShowMore(true);
                }
            }
        });
    }, []);

    const getBlogs = (event) => {
        setLoadingBlogs(true);
        getBlogPagination(offset, (response) => {
            if (response.status == "success") {
                setLoadingBlogs(false);
                setBlogList([...blogList, ...response.blogs]);
                setOffSet(offset + offSetIncrement);

                if (response.blogs.length == 0) {
                    setHideShowMore(true);
                }
            }
        });
    };

    return (
        <>
            <NavBar layout={`blogs`} />

            <section className="bg-white border-b pt-16">
                <div className="container max-w-5xl mx-auto m-8">
                    <div className="flex flex-wrap">
                        <div className="w-5/6 sm:w-1/2 p-6 flex flex-col justify-center">
                            {/* <Fade left> */}
                            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                Support Us
                            </h3>
                            <p className="text-gray-600 text-xl">
                                Join us in our venture of proving cost-effective
                                renewable energy for the Blue Economy.
                                <a href="">Contact us today</a>
                            </p>
                            {/* </Fade> */}
                        </div>
                        <div
                            className="w-full sm:w-1/2 p-6"
                            style={{ height: "400px" }}
                        >
                            {/* <Pulse> */}
                            <img
                                className="w-full md:w-4/5 z-50 h-96"
                                src={BlogPost}
                            />
                            {/* </Pulse> */}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 border-b py-8">
                <div className="container max-w-5xl mx-auto m-8">
                    <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                        Our Blog
                    </h1>
                    <div className="w-full mb-4">
                        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                </div>
                <div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gaps-3 bg-gray-100 justify-center">
                        {blogList.map((blog, index) => (
                            <div
                                onClick={() => navigate(`blogs/${blog.link}`)}
                                className="flex-1 text-gray-700 hover:shadow-xl cursor-pointer mx-auto my-5"
                                style={{ width: "350px" }}
                                key={index}
                            >
                                <div className="flex flex-col bg-white">
                                    <div className="h-64">
                                        <img
                                            className="bg-cover bg-center w-full"
                                            src={blog.cover_photo}
                                        />
                                    </div>
                                    <div className="text-gray-700 px-5 py-3">
                                        <p className="text-lg text-gray-800 text-left font-bold">
                                            {blog.title}
                                        </p>
                                    </div>
                                    {/* <div className="text-gray-700 px-5 py-3">
                                            <p className="text-base text-gray-800 font-norma text-left truncate">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </p>
                                        </div> */}
                                    <div className="text-gray-700 px-5 pb-3">
                                        <p className="text-base text-blue-800 text-left font-medium truncate">
                                            {format(
                                                new Date(blog.date_posted),
                                                "MMMM dd, yyyy"
                                            ).toString()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center">
                    {!loadingBlogs && !hideShowMore && (
                        <button
                            type="button"
                            className="text-white my-2 bg-blue-700 py-1 px-4 rounded-full"
                            onClick={getBlogs}
                        >
                            show more
                        </button>
                    )}
                    {loadingBlogs && (
                        <div className="flex justify-center py-3">
                            <span className="spinner"></span>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default Blogs;
