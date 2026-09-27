'use client'

import Link from "next/link";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

import Image from "next/image";
import MobileMenuButton from "./MobileMenuButton";
import MobileNavigation from "./MobileNavigation";

export default function Header() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [dropDownOpen, setDropDownOpen] = useState(false);

    return (
        <header className="bg-white relative px-10 py-5 flex items-center justify-between">
            <Link
                className="order-1"
                href={"/"}
            >
                <Image src="/logo.png" width={180} height={50} alt="Logo Cis-Comcam" />
            </Link>

            <MobileMenuButton  
                isOpen={menuIsOpen}
                onClick={() => setMenuIsOpen(e => !e)}
            />

            <MobileNavigation 
                isOpenMenu={menuIsOpen}
                isOpenDropDown={dropDownOpen}
                onToggleDropDown={() => setDropDownOpen(e => !e)}
            />

            <button
                className="sm:hidden hover:cursor-pointer order-2 text-xl text-blue-800"
            >
                <IoSearch />
            </button>
        </header>
    )
}