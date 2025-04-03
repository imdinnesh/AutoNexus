"use client"
import { CgAsterisk } from "react-icons/cg";
import { Feature } from "@/components/Feature";
import { Input } from "@/components/Input";
import NavBar2 from "@/components/Navbar2";
import { Separator } from "@/components/Separator";
import { GoogleButton } from "@/components/Buttons/GoogleButton";
export default function SignUp() {
    return (
        <div>
            <NavBar2 />

            <div className="flex items-center h-[600px] mx-32 justify-around">

                <div className="w-1/2 px-20 py-2">
                    <p className="text-4xl font-bold">
                        Join millions worldwide who automate their work using Zapier.
                    </p>
                    <div className="py-4">
                        <Feature label="Easy setup, no coding required" />
                        <Feature label="Free forever for core features" />
                        <Feature label="4-day trial of premium features & apps" />
                    </div>

                </div>
                <div className="py-4 border-2 border-gray-300 rounded-lg px-3">
                    <GoogleButton onClick={() => { }} />
                    <Separator text="OR" />
                    <div className="flex items-center">
                        <CgAsterisk className="text-red-500 inline-block" />
                        <p>indicates a required field.</p>
                    </div>
                    <Input label="Work Email" type="email" onClick={() => { }} size="large" />
                    <div className="flex justify-between">
                        <Input label="First name" type="text" onClick={() => { }} size="small" />
                        <Input label="Last name" type="text" onClick={() => { }} size="small" />
                    </div>
                    <p className="text-sm font-light">By signing up, you agree to Zapier's terms of service and privacy policy.</p>
                    <button className="border-2 border-gray-300 rounded-2xl p-2 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold mt-4 cursor-pointer">
                        Get started for free
                    </button>
                    <div className="flex justify-center items-center space-x-2 py-4">
                        <h2>
                            Already have an account? <span className="text-blue-500">Log in</span>
                        </h2>
                    </div>
                </div>

            </div>

        </div>
    )
}