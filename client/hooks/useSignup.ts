import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import type { signupType } from "@/types/authSchema";

type SignupResponse = {
  message: string;
};

const signup = async (data: signupType): Promise<SignupResponse> => {
  try {
    const response = await axios.post<SignupResponse>(
      "http://localhost:8000/api/v1/user/signup",
      {
        username: data.email,
        name: data.name,
        password: data.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (err: any) {
    // Safely extract error message
    const message =
      err?.response?.data?.message ??
      "Something went wrong. Please try again later.";

    throw new Error(message);
  }
};

export const useSignup = () =>
  useMutation<SignupResponse, Error, signupType>({
    mutationFn: signup,
  });
