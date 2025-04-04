"use client";
import { AuthButton } from "@/components/Buttons/AuthButton";
import { ExploreButton } from "@/components/Buttons/ExploreButton";
import { GoogleButton } from "@/components/Buttons/GoogleButton";
import { Input } from "@/components/Input";
import { Separator } from "@/components/Separator";
export default function SignIn() {
    return (
        <div className="flex">
            <div className="w-1/2">
                <h1>
                    Automate across your teams
                </h1>
                <p>
                    Zapier Enterprise empowers everyone in your business to securely automate their work in minutes, not months—no coding required.
                </p>
                <ExploreButton
                    onClick={() => { }}>
                    Explore Zapier Enterprise
                </ExploreButton>
            </div>
            <div className="max-w-1/2">
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
                onChange={() => { }} type="email" />
                <AuthButton
                    onClick={() => { }}
                    varient="login"
                    size="large"
                >
                    Continue
                </AuthButton>

            </div>
        </div>
    )
}