"use client";
import { AuthButton } from "@/components/Buttons/AuthButton";
import { ExploreButton } from "@/components/Buttons/ExploreButton";
import { GoogleButton } from "@/components/Buttons/GoogleButton";
import { Input } from "@/components/Input";
import { Separator } from "@/components/Separator";
import { useRouter } from "next/navigation";
export default function SignIn() {

    const router=useRouter();


    return (
        <div className="flex h-[600px] items-center justify-center px-20">
            <div className="w-1/2 px-20">
                <h1 className="text-3xl font-bold text-gray-900">
                    Automate across your teams
                </h1>
                <p className="py-4 text-md">
                    Zapier Enterprise empowers everyone in your business to securely automate their work in minutes, not months—no coding required.
                </p>
                <ExploreButton
                    onClick={() => { }}>
                    Explore Zapier Enterprise
                </ExploreButton>
            </div>
            <div className="max-w-1/2 px-20 border-l-2 border-gray-300">
                <div className="w-md" >

                    <GoogleButton 

                    onClick={() => { }}>
                        Sign in with Google
                    </GoogleButton>
                </div>
                <Separator text="OR"/>

                <Input 
                varient="login"
                label="Email" 
                size="large"
                placeholder="Email"
                onChange={() => { }} type="email" />
                <AuthButton
                    onClick={() => { }}
                    varient="login"
                    size="large"
                >
                    Continue
                </AuthButton>
                <p className="text-sm text-gray-500 mt-2 px-4 py-2">
                Don't have a Zapier account yet? <span
                onClick={() => { 
                    router.push("/signup")
                }}
                 className="text-violet-600 underline cursor-pointer ">Sign up</span>
                </p>

            </div>
        </div>
    )
}