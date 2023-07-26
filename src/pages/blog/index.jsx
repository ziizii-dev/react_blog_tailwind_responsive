import React from "react";
import {
    Input,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
} from "@material-tailwind/react";
import { BsSearch } from "react-icons/bs";

const Blog = () => {
    let Diseases = [
        {
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
            disease: "Current illness",
            type: "Influenza",
            date: "July 20,2023",
            desc: "  Lorem ipsum dolor sit, amet consectetur adipisicing laudantium distinctio. ",
        },
        {
            image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            disease: "Runny nose",
            type: "Headache",
            date: "July 22,2023",
            desc: " Lorem ipsum dolor sit, amet consectetur adipisicing laudantium distinctio.",
        },
        {
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
            disease: "Insonmia",
            type: "General Health",
            date: "July 23,2023",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing laudantium distinctio.",
        },
    ];
    return (
        <div
            className="mx-auto max-w-screen-2xl mt-24 lg:ps-2 lg:pe-2 sm:ps-10 sm:pe-10 sm:place-items-center
        xs:ps-4 xs:pe-4
        "
        >
            <div className="relative flex w-full lg:max-w-[20rem] md:max-w-[18rem] sm:max-w-[26rem] xs:max-w-[20rem]  md:left-10 lg:mx-2 md:mx-2 sm:mx-20  ">
                <Input label="Search" color="green" className="" />

                <Button
                    size="sm"
                    color="green"
                    className="!absolute  top-0 bottom-0 right-0  border-radius-10 rounded hover:bg-green-700"
                >
                    <BsSearch className="text-[19px]" />
                </Button>
            </div>
            {/*.......... Card Start......... */}
            <div className="">
                <ul
                    className="lg:grid  md:grid lg:grid-cols-3 md:grid-cols-2 lg:gap-5 mt-4
        md:ps-10 md:pe-10 sm:grid-cols-1 lg:mx-2 md:mx-2 sm:mx-20
        "
                >
                    {Diseases.map((data) => (
                        <li
                            key={data.title}
                            className="md:mr-4 text-xl font-bold mt-8 mb-8"
                        >
                            <div>
                                <div className="">
                                    {/* ......1st card */}
                                    <div className="">
                                        <div className="lg:max-w-[38rem] md:max-w-[28rem] sm:max-w-[26rem] mt-8 overflow-hidden ">
                                            <CardHeader
                                                floated={false}
                                                shadow={false}
                                                className="m-0 rounded-none"
                                            >
                                                <div
                                                    className="lg:flex lg:justify-between md:flex md:justify-between 
                                                    text-2xl  ps-2 pe-2 mb-4 lg:text-[20px] md:text-[16px] sm:text-[14px]  sm:flex sm:justify-between xs:flex xs:justify-between "
                                                >
                                                    <div>{data.disease} </div>{" "}
                                                    <div>{data.type}</div>
                                                </div>
                                                <img
                                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                                                    alt="ui/ux review check"
                                                    className=" lg:h-[263px] lg:w-[450px] "
                                                />
                                            </CardHeader>

                                            <Typography className="mt-2 font-normal lg:justify-items-center text-gray-700 lg:text-[20px] md:text-[16px]   ">
                                                <p>{data.desc}</p>
                                            </Typography>

                                            <div className="flex items-center justify-between text-green-400 mt-0">
                                                <Typography className="font-normal">
                                                    {data.date}{" "}
                                                </Typography>
                                                <Typography className="font-normal">
                                                    {data.type}
                                                </Typography>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                {/* </div> */}
            </div>

            {/* ///////// */}

            {/* /////////// */}
        </div>
    );
};

export default Blog;
