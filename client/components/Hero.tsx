"use client"
import { FaArrowRight } from "react-icons/fa6";
import { PrimaryButton } from "./Buttons/PrimaryButton";
import { SecondaryButton } from "./Buttons/SecondaryButton";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
const Hero = () => {
    return (
        <div className="flex justify-between h-[600px] items-center mx-20 mt-[50px]">
            <div className="w-1/2 px-2 py-1" >
                <button className="rounded-2xl bg-slate-200 px-3 py-2 flex space-x-2 items-center w-2/4">
                    <span className="border-2 rounded-full px-2 py-1 text-center text-sm">
                        New
                    </span>
                    <h2 className="text-sm">
                        Explore our Enterprise section
                    </h2>
                    <FaArrowRight className="text-xl" />
                </button>
                <div className="text-7xl font-bold mt-2">
                    <h2  >
                        Automate
                    </h2>
                    <h2 >
                        Without limits
                    </h2>
                </div>
                <p className="text-2xl font-extralight mt-4 w-3/4">
                    Turn chaos into smooth operations by automating workflows yourself—no developers,
                    no IT tickets, no delays. The only limit is your imagination.
                </p>
                <div className="flex space-x-4 mt-4">
                    <PrimaryButton onClick={() => { }} size="large">
                        Start free with email
                    </PrimaryButton>
                    <SecondaryButton onClick={() => { }}>
                        <div className="flex items-center space-x-1">
                            <FcGoogle className="text-md" />
                            <h2>
                                Start free with Google
                            </h2>

                        </div>

                    </SecondaryButton>
                </div>
            </div>

            <div className="w-1/2 flex justify-center items-center">
                <Image src="https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1726210651/Homepage%20%E2%80%94%20Sept%202024/homepage-hero_vvpkmi.png"
                alt="Automation workflow with apps and paths"
                width={550}
                height={550}
                />   

            </div>
        </div>
    )

}

export default Hero;