"use client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CgAsterisk } from "react-icons/cg";
import { Feature } from "@/components/Feature";
import { Input } from "@/components/Input";
import { Separator } from "@/components/Separator";
import { GoogleButton } from "@/components/Buttons/GoogleButton";
import { Spinner } from "@/components/Spinner";

import { signupType, signUpSchema } from "@/types/authSchema";
import { useSignup } from "@/hooks/useSignup";

export default function SignUp() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<signupType>({
    resolver: zodResolver(signUpSchema),
    mode: "onChange",
  });

  const { mutate: signupUser, isPending } = useSignup();

  const onSubmit = (data: signupType) => {
    signupUser(data, {
      onSuccess: (res) => {
        toast.success(res.message);
      },
      onError: (err) => {
        toast.error(err.message);
      },
    });
  };

  return (
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
        <GoogleButton onClick={() => { }}>Signup with Google</GoogleButton>
        <Separator text="OR" />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center mb-2">
            <CgAsterisk className="text-red-500 inline-block" />
            <p className="ml-1 text-sm">indicates a required field.</p>
          </div>

          <Input
            label="Name"
            type="text"
            size="large"
            placeholder="Enter your name"
            {...register("name")}
            {...(errors.name && { error: errors.name.message })}
          />
          <Input
            label="Email"
            type="email"
            size="large"
            placeholder="Email"
            {...register("email")}
            {...(errors.email && { error: errors.email.message })}
          />
          <Input
            label="Password"
            type="password"
            size="large"
            placeholder="Enter your password"
            {...register("password")}
            {...(errors.password && { error: errors.password.message })}
          />

          <p className="text-sm font-light">
            By signing up, you agree to Zapier's terms of service and privacy policy.
          </p>

          <button
            type="submit"
            disabled={!isValid || isSubmitting || isPending}
            className={`rounded-2xl p-2 w-full text-white mt-4 bg-orange-500 hover:bg-orange-600 
              ${(!isValid || isSubmitting || isPending) ? "cursor-not-allowed" : "cursor-pointer"}`}
          >
            {isSubmitting || isPending ? (
              <div className="flex items-center justify-center space-x-2">
                <Spinner />
                <span>Loading...</span>
              </div>
            ) : (
              "Continue"
            )}
          </button>
        </form>

        <div className="flex justify-center items-center space-x-2 py-4">
          <h2>
            Already have an account?{" "}
            <span
              onClick={() => router.push("/signin")}
              className="text-blue-500 cursor-pointer underline"
            >
              Log in
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}
