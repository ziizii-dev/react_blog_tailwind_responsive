import { useState, useEffect } from "react";
import {
    MobileNav,
    Typography,
    Button,
    IconButton,
    Avatar,
    Chip,
} from "@material-tailwind/react";
import Logo from "../../app/assets/images/Healthy_Hub_Logo.png";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
    const [openNav, setOpenNav] = useState(false);
    const location = useLocation();
    const pathName = location.pathname;
    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col  lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-20">
            {pathName === "/" ? (
                <Chip
                    variant="gradient"
                    value={
                        <Typography
                            variant="small"
                            className="font-bold text-[16px]"
                        >
                            Home
                        </Typography>
                    }
                    color="green"
                    className="rounded-full px-12 py-4"
                />
            ) : (
                <Link to={"/"}>
                    <Typography
                        as="li"
                        variant="paragraph"
                        color="blue"
                        className=" font-bold text-xl"
                    >
                        Home
                    </Typography>
                </Link>
            )}

            {pathName === "/blog" ? (
                <Chip
                    variant="gradient"
                    color="green"
                    value={
                        <Typography
                            variant="small"
                            className="font-bold text-[16px]"
                        >
                            Health Ariticles
                        </Typography>
                    }
                    className="rounded-full px-12 py-4"
                />
            ) : (
                <Link to={"/blog"}>
                    <Typography
                        as="li"
                        variant="paragraph"
                        color="blue"
                        className="font-bold text-xl"
                    >
                        Health Articles
                    </Typography>
                </Link>
            )}
            {pathName === "/contact" ? (
                <Chip
                    variant="gradient"
                    value={
                        <Typography
                            variant="small"
                            className="font-bold text-[16px]"
                        >
                            Contact
                        </Typography>
                    }
                    color="green"
                    className="rounded-full px-12 py-4"
                />
            ) : (
                <Link to={"/contact"}>
                    <Typography
                        as="li"
                        variant="paragraph"
                        color="blue"
                        className=" font-bold text-xl"
                    >
                        Contact
                    </Typography>
                </Link>
            )}
            <Typography
                as="li"
                variant="paragraph"
                color="blue"
                className=" font-bold text-xl"
            >
                About Us
            </Typography>
        </ul>
    );

    return (
        <div className="mx-auto max-w-full py-2 px-4 lg:px-8 lg:py-4 bg-gray-100">
            <div className=" max-w-full flex items-center justify-between">
                <div>
                    <Avatar
                        variant="square"
                        size="lg"
                        src={Logo}
                        className="cursor-pointer"
                    />
                </div>
                <div className="flex gap-10 items-center">
                    <div className="hidden lg:inline-block">{navList}</div>
                    <Button
                        variant="outlined"
                        className="hidden lg:inline-block bg-white rounded-full px-12"
                        color="green"
                    >
                        <Typography
                            variant="paragraph"
                            className="font-bold text-[16px]"
                        >
                            Get App
                        </Typography>
                    </Button>
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                <div className="container mx-auto">
                    {navList}
                    <Button
                        variant="gradient"
                        fullWidth
                        className="mb-2"
                        color="green"
                    >
                        <Typography variant="small" className="font-bold">
                            Get App
                        </Typography>
                    </Button>
                </div>
            </MobileNav>
        </div>
    );
}
