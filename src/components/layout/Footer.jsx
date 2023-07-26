import React from "react";
import {
    MobileNav,
    Typography,
    Button,
    IconButton,
    Avatar,
} from "@material-tailwind/react";
import Logo from "../../app/assets/images/Healthy_Hub_Logo.png";

const Footer = () => {
    return (
        <div className="lg:mx-auto lg:max-w-full lg:py-2 lg:px-4  bg-gray-100">
            <div className="flex items-center lg:gap-80 sm:gap-30 md:gap70  ">
                <div>
                    <Avatar
                        variant="square"
                        size="lg"
                        src={Logo}
                        className="cursor-pointer"
                    />
                </div>
                <div className="lg:text-4xl lg:text-cyan-700 lg:font-bold xs:text-2xl">
                    Footer
                </div>
            </div>
        </div>
    );
};

export default Footer;
