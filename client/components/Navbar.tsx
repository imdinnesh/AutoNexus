"use client"
import { useRouter } from "next/navigation"
import { LinkButton } from "./LinkButton"
import { PrimaryButton } from "./PrimaryButton"
import { MdOutlineAddChart } from "react-icons/md";
const NavBar = () => {

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
                    <div className="flex space-x-1 px-2">
                        <MdOutlineAddChart className="text-2xl ml-5" />
                        <h2>Explore apps</h2>
                    </div>
                </LinkButton>
                <LinkButton onClick={() => { }}>
                    Contact Sales
                </LinkButton>
                <LinkButton onClick={() => {
                    router.push("/login")
                }}>Login
                </LinkButton>
                <PrimaryButton onClick={() => {
                    router.push("/signup")
                }}>
                    Sign Up
                </PrimaryButton>
            </div>

        </div>
    )
}
export default NavBar