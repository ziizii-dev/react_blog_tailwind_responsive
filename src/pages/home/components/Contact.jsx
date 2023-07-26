import { Avatar, Typography } from "@material-tailwind/react";
import React from "react";
import PhoneIcon from "../../../app/assets/images/Phone.svg";
import MailIcon from "../../../app/assets/images/mail.svg";
import LocationIcon from "../../../app/assets/images/Location.svg";
import Map from "../../../app/assets/images/samplemap.jpeg";
import { Input, Textarea, Button } from "@material-tailwind/react";
import Footer from "@/components/layout/Footer";

const Contact = () => {
    return (
        <>
            <div className="lg:mx-20 lg:mt-10 sm:mt-0  sm:me-8 sm:ms-20 xs:ms-26 xs:me-4 xs:ps-2">
                <div
                    className="lg:flex lg:flex-row lg:justify-between  lg:w-full 
            md:flex md:flex-row md:justify-between md:w-full md:gap-10 
            xs:justify-between xs:content-center xs:ps-8
              "
                >
                    <div className="lg:w-6/12 md:w-6/12 lg:gap-40 md:gap-4 ">
                        <div
                            className=" lg:flex lg:flex-col lg:gap-5  lg:w-[470px]
                    md:flex md:flex-col md:gap-4   
                    "
                        >
                            <div className="lg:ms-16 md:ms-2">
                                <div>
                                    <Typography
                                        variant="h5"
                                        color="gray"
                                        className="font-bold text-2xl"
                                    >
                                        Healthy Hub
                                    </Typography>
                                </div>
                                <div className="flex flex-row gap-5 items-center mt-3">
                                    <Avatar
                                        variant="square"
                                        size="xs"
                                        src={PhoneIcon}
                                    ></Avatar>
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="text-sm"
                                    >
                                        09 123456789
                                    </Typography>
                                </div>
                                <div className="flex flex-row gap-5 items-center mt-2">
                                    <Avatar
                                        variant="square"
                                        size="xs"
                                        src={MailIcon}
                                    ></Avatar>
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="text-sm"
                                    >
                                        telemedicine@healthhubmm.com
                                    </Typography>
                                </div>
                                <div className="flex flex-row gap-5 items-center mt-2 mb-3">
                                    <Avatar
                                        variant="square"
                                        size="xs"
                                        src={LocationIcon}
                                    ></Avatar>
                                    <Typography variant="small" color="gray">
                                        <p className="text-sm">
                                            105,TheitPan Street,SinMin
                                            Ward,Ahlone, Yangon,Myanmar
                                        </p>
                                    </Typography>
                                </div>
                                <div>
                                    <Typography>
                                        <img
                                            src={Map}
                                            className="lg:w-[350px] lg:h-[200px] mt-2  "
                                        />
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*........... left side start */}
                    <div className="lg:w-6/12 md:w-6/12 md:gap-4 xs:pe-4 ">
                        <div
                            className=" lg:flex lg:flex-col lg:gap-5  lg:w-[470px]
                    md:flex md:flex-col md:gap-4 
                    "
                        >
                            <div>
                                <Typography
                                    variant="h5"
                                    color="gray"
                                    className="font-bold text-2xl"
                                >
                                    Contact Form
                                </Typography>
                            </div>
                            <div>
                                <div className="w-72 mb-4 rounded-lg sm:mt-4">
                                    <Input
                                        type="text"
                                        placeholder="Name"
                                        className="focus:!border-t-gray-500 focus:!border-gray-500 ring-4 ring-transparent focus:ring-gray-500/20 !border !border-gray-gray-70 bg-white shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-200 text-blue-gray-500"
                                        labelProps={{
                                            className: "hidden",
                                        }}
                                        containerProps={{
                                            className:
                                                "lg:min-w-[400px] lg:min-h-[50px] ",
                                        }}
                                    />
                                </div>
                                <div className="w-72 mb-6 rounded-sm">
                                    <Input
                                        type="email"
                                        placeholder="Email"
                                        className="focus:!border-t-gray-900 focus:!border-gray-500 ring-4 ring-transparent focus:ring-gray-500/20 !border !border-gray-gray-70 bg-white shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-200 text-blue-gray-500"
                                        labelProps={{
                                            className: "hidden",
                                        }}
                                        containerProps={{
                                            className:
                                                "lg:min-w-[400px] lg:min-h-[50px]",
                                        }}
                                    />
                                </div>
                                <div className="w-72">
                                    <Textarea
                                        type="email"
                                        placeholder="Write the message you want to communicate"
                                        className="focus:!border-t-gray-600 focus:!border-gray-500 ring-4 ring-transparent focus:ring-gray-500/20 !border !border-gray-gray-70 bg-white shadow-lg shadow-gray-gray-900/5 placeholder:text-gray-gray-200 text-gray-gray-500"
                                        labelProps={{
                                            className: "hidden",
                                        }}
                                        containerProps={{
                                            className: "lg:min-w-[400px]",
                                        }}
                                    />
                                </div>
                                <div className="w-72 mt-3">
                                    <Button
                                        fullWidth
                                        className="bg-green-500 rounded-full lg:min-w-[400px] lg:min-h-[50px] text-lg hover:bg-green-700"
                                    >
                                        {" "}
                                        Submit{" "}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div>
            <Footer/>
        </div> */}
        </>
    );
};

export default Contact;
