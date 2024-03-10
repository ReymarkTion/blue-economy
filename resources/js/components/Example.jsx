import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

const Home = React.lazy(() => import("./pages/Home"));
const Blogs = React.lazy(() => import("./pages/Blogs"));

function Example() {
    return (
        <div
            className={`leading-normal tracking-normal text-white gradient font-sans`}
        >
            <React.Suspense fallback={<span>Loading...</span>}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/blogs" element={<Blogs />} />
                    </Routes>
                </BrowserRouter>
            </React.Suspense>

            <Footer />
        </div>
    );
}

export default Example;

if (document.getElementById("example")) {
    const Index = ReactDOM.createRoot(document.getElementById("example"));

    Index.render(
        <React.StrictMode>
            <Example />
        </React.StrictMode>
    );
}
