"use client"
import { useRouter } from "next/navigation"
import { LinkButton } from "./Buttons/LinkButton"
import { MdOutlineAddChart } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
const NavBar2 = () => {

    const router = useRouter()
    return (
        <div className="flex border-b border-gray-300 justify-between items-center px-4 py-2 mx-5">
            <div>
                <h1 className="text-2xl font-bold">
                    <span className="text-orange-500 underline underline-offset-2">Auto</span>
                    Mate Pro
                </h1> 

            </div>
            <div className="flex space-x-2">
            <LinkButton onClick={() => {}}>
                    <div className="flex px-2 space-x-1">
                        <IoMdHelpCircleOutline className="text-2xl" />
                        <h2>Help</h2>
                    </div>
                </LinkButton>
                <LinkButton onClick={() => {}}>
                    <div className="flex space-x-1 px-2">
                        <MdOutlineAddChart className="text-2xl" />
                        <h2>Explore apps</h2>
                    </div>
                </LinkButton>
                <LinkButton
                varient="outline"
                 onClick={() => { }}>
                    Contact Sales
                </LinkButton>
                <LinkButton onClick={() => {
                    router.push("/signin")
                }}>Login
                </LinkButton>
            </div>

        </div>
    )
}
export default NavBar2