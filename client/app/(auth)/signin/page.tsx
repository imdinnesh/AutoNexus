"use client";
import { AuthButton } from "@/components/Buttons/AuthButton";
import { ExploreButton } from "@/components/Buttons/ExploreButton";
import { GoogleButton } from "@/components/Buttons/GoogleButton";
import { Input } from "@/components/Input";
import { Separator } from "@/components/Separator";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { signInSchema } from "@/types/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export default function SignIn() {
    type signinType = z.infer<typeof signInSchema>;

    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
    } = useForm<signinType>({
        resolver: zodResolver(signInSchema),
        mode: "onChange", // validate while typing
    });


    const onSubmit = async (data: signinType) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(data.email);
    };

    return (
        <div className="flex h-[600px] items-center justify-center px-20">
            <div className="w-1/2 px-20">
                <h1 className="text-3xl font-bold text-gray-900">
                    Automate across your teams
                </h1>
                <p className="py-4 text-md">
                    Zapier Enterprise empowers everyone in your business to securely
                    automate their work in minutes, not months—no coding required.
                </p>
                <ExploreButton onClick={() => { }}>
                    Explore Zapier Enterprise
                </ExploreButton>
            </div>
            <div className="max-w-1/2 px-20 border-l-2 border-gray-300">
                <div className="w-md">
                    <GoogleButton onClick={() => { }}>Sign in with Google</GoogleButton>
                </div>
                <Separator text="OR" />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        varient="login"
                        label="Email"
                        size="large"
                        placeholder="Email"
                        type="email"
                        {...register("email")}
                        {...(errors.email && { error: errors.email.message })}
                    />
                    <Input
                        label="Password"
                        size="large"
                        placeholder="Password"
                        type="password"
                        {...register("password")}
                        {...(errors.password && { error: errors.password.message })}
                    />
                    <AuthButton
                        isDisabled={!isValid || isSubmitting}
                        isLoading={isSubmitting}
                        varient="login"
                        size="large"
                    >
                        Continue
                    </AuthButton>

                </form>
                <p className="text-sm text-gray-500 mt-2 px-4 py-2">
                    Don't have a Zapier account yet?{" "}
                    <span
                        onClick={() => {
                            router.push("/signup");
                        }}
                        className="text-violet-600 underline cursor-pointer "
                    >
                        Sign up
                    </span>
                </p>
            </div>
        </div>
    );
}
