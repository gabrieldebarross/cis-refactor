import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

import Link from "next/link";


export default function HeaderOptions() {
    return (
        <header
            className="text-[2dvw] sm:text-md md:text-sm bg-blue-800 py-2 px-10 flex flex-col justify-center lg:flex-row items-center md:justify-between gap-2 font-normal text-white"
        >
        <div
            className="text-[2dvw] sm:text-md md:text-sm flex items-center justify-center gap-4"
        >
            <p className="flex items-center justify-center gap-2 hover:text-blue-200 transition-all duration-300 ease-in-out"><span><FaMapMarkerAlt /></span> Rua Mamborê, 1542 - Campo Mourão</p>
            <span>|</span>
            <p className="flex items-center justify-center gap-2 hover:text-blue-200 transition-all duration-300 ease-in-out"><span><IoCall /></span>{"(44)"} 3017-0321</p>
        </div>
        <div
            className="flex items-center justify-end gap-4"
        >
            <Link
                href="/"
                className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-current
                after:transition-all after:duration-300 hover:after:w-full"
            >
                Pesquisa de Satisfação
            </Link>


            <Link
                href={"/"}
                className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-current
                after:transition-all after:duration-300 hover:after:w-full"
            >
                Acesso à Informação
            </Link>
            <Link
                href={"/"}
                className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-current
                after:transition-all after:duration-300 hover:after:w-full"
            >
                E-SIC
            </Link>
            <Link
                href="/"
                className="
                hidden
                xl:flex items-center justify-center gap-2
                border border-white
                px-4 py-2
                rounded-3xl
                text-white
                transition-all duration-300 ease-in-out
                hover:bg-white
                hover:text-blue-800
                hover:border-black
                hover:shadow-lg
                whitespace-nowrap"
            >
                <span>Acesso Empresas</span>
            </Link>

            <Link
                href="/"
                className="
                hidden 
                xl:flex items-center justify-center gap-2
                border border-white
                px-4 py-2
                rounded-3xl
                text-white
                transition-all duration-300 ease-in-out
                hover:bg-white
                hover:text-blue-800
                hover:border-black
                hover:shadow-lg
                whitespace-nowrap"
            >
                <span>Acesso Municípios</span>
            </Link>
        </div>

        </header>
    )
}