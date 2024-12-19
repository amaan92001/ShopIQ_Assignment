"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../public/ShopIQ_Logo.webp";
import menu_icon from "../../public/menu.svg";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Navbar() {
    const router = useRouter();
    const [menu, setMenu] = useState(false);

    return (
        <nav className="flex justify-center md:justify-between p-3 items-center w-full px-10 m-auto relative bg-slate-800 shadow-lg">
            <Image
                className="w-[120px] md:w-[150px]"
                src={logo}
                alt="logo"
                onClick={() => router.push("/")}
            />
            <div className="hidden md:flex gap-16 text-slate-100 text-md">
                <Link className="hover:text-themePrimary" href="/">
                    Home
                </Link>
                <Link className="hover:text-themePrimary" href="/products">
                Categories
                </Link>
                <Link className="hover:text-themePrimary" href="/about">
                    About
                </Link>
                <Link className="hover:text-themePrimary" href="/contact">
                    Contact
                </Link>
            </div>
            <Image
                className="absolute right-1 md:hidden"
                src={menu_icon}
                alt="menu"
                width={30}
                onClick={() => setMenu(!menu)}
            />
            {menu && (
                <div
                    className="w-[150px] right-1 top-11 border border-themePrimary rounded-md shadow-sm md:hidden flex flex-col absolute gap-2 bg-white p-3 z-10"
                    onClick={() => setMenu(false)}
                >
                    <Link className="hover:text-themePrimary" href="/">
                        Home
                    </Link>
                    <Link className="hover:text-themePrimary" href="/products">
                        Products
                    </Link>
                    <Link className="hover:text-themePrimary" href="/about">
                        About
                    </Link>
                    <Link className="hover:text-themePrimary" href="/contact">
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
