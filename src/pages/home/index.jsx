import { Typography } from "@material-tailwind/react";
import React from "react";
import Phone from "../../app/assets/images/Mockup.png";
import Contact from "./components/Contact";
import Footer from "../../components/layout/Footer";
import Blog from "../blog";
const Home = () => {
    return (
        <>
            <div className="mx-10 mb-10 sm:mx-6 ">
                <div
                    className="lg:flex md:flex lg:flex-row md:flex-row items-center justify-between w-full 
            sm:w-full "
                >
                    <div className="lg:w-6/12 md:w-6/12 w-full">
                        <Typography className="lg:text-2xl lg:text-gray-700 xs:text-xl xs:text-gray-700 xs:mt-2">
                            Welcome
                        </Typography>
                        <Typography
                            className="lg:text-5xl lg:text-cyan-700 lg:font-bold lg:mt-4 lg:mb-4 
                    md:text-3xl md:text-cyan-700 md:font-bold
                    sm:text-cyan-700 sm:font-bold sm:text-4xl
                     xs:text-cyan-700 xs:font-bold xs:text
                    "
                        >
                            Healthy Hub
                        </Typography>
                        <Typography
                            className="lg:text-2xl lg:text-green-700 lg:font-bold
                    md:text-green-700 md:font-bold md:text-2xl 
                    sm:text-green-700 sm:font-bold sm:text-xl
                    xs:text-xl xs:text-green-700 xs:font-bold
                    "
                        >
                            Best telemedicine app for you
                        </Typography>
                        <Typography
                            className="mt-10 lg:text-3xl lg:text-gray-700 md:text-2xl md:text-gray-700
                    sm:text-base sm:text-gray-700  
                 
                    "
                        >
                            The healthcare system is changing.As technology
                            advances and new ways of delivering healthcare
                            become moreprevalent,the need forinterpreters
                            becomes more critical than ever before. The majority
                            of telehealth services are conducted through video
                            conferencing and remote access.
                        </Typography>
                    </div>
                    <div className="lg:w-6/12 md:w-6/12">
                        <div>
                            <img
                                src={Phone}
                                className="
                        "
                            ></img>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Contact />
            </div>

            <div>
                <Blog />
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
};

export default Home;
