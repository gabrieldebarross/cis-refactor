import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { LuLandmark } from "react-icons/lu";
import { institucional } from "@/data/navigation"

interface MobileNavigationProps {
    isOpenMenu: boolean,
    isOpenDropDown: boolean,
    onToggleDropDown: () => void
}

export default function MobileNavigation({ isOpenMenu, isOpenDropDown, onToggleDropDown}: MobileNavigationProps) {
    return (
        <nav className={` 
                    sm:hidden shadow-[inset_0_5px_5px_-5px_rgba(0,0,0,0.2)]
                    absolute left-0 top-full w-full 
                    z-50 px-10 bg-white text-black
                    transition-all duration-300 ease-in-out
                    ${isOpenMenu ? "visible opacity-100"
                : "invisible opacity-0"
            }
                `}>
            <div>
                <button
                    type="button"
                    onClick={onToggleDropDown}
                    aria-haspopup="true"
                    aria-expanded={isOpenDropDown}
                    className="flex w-full items-center justify-between py-4 cursor-pointer font-normal"
                >
                    <div className="flex items-center justify-center gap-3">
                        <LuLandmark className="text-lg" />
                        <span>
                            Institucional
                        </span>
                    </div>
                    <span
                        className={`
                                transition-transform duration-300 
                                ${isOpenDropDown ? "rotate-180" : "rotate-0"} 
                            `}
                    >
                        <FaChevronDown />
                    </span>
                </button>
                <div
                    className={`
                            overflow-hidden transition-all duration-300 ease-linear
                            ${isOpenDropDown ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
                        }
                        `}
                >
                    <div
                        className="flex flex-col gap-1 pb-4 font-normal"
                    >
                        {institucional.map((item) => {
                            return <Link
                                key={item.title}
                                href={item.href}
                                className="py-2 pl-7"
                            >
                                {item.title}
                            </Link>
                        })}
                    </div>
                </div>
            </div>
        </nav>
    )
}