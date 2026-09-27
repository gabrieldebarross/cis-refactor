import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

interface MobileMenuButtonProps {
    isOpen: boolean,
    onClick: () => void
}

export default function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
    return (
        <button
            className="sm:hidden hover:cursor-pointer text-blue-800"
            onClick={onClick}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
            {isOpen ? (<IoCloseSharp className="text-3xl" />)
                : (<MdOutlineMenu className="text-3xl" />)
            }
        </button>
    )
}