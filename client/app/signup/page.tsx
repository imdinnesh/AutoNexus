import { Feature } from "@/components/Feature";
import NavBar2 from "@/components/Navbar2";

export default function SignUp() {
    return (
        <div>
            <NavBar2 />

            <div className="flex items-center h-[600px] mx-5">

                <div className="w-1/2 px-20 py-2">
                    <p className="text-4xl font-bold">
                    Join millions worldwide who automate their work using Zapier.
                    </p>
                    <div className="py-4">
                        <Feature label="Easy setup, no coding required"/>
                        <Feature label="Free forever for core features"/>
                        <Feature label="4-day trial of premium features & apps"/>
                    </div>

                </div>
                <div>


                </div>

            </div>

        </div>
    )
}