import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import type { signInType } from "@/types/authSchema";

type SigninResponse = {
  message: string;
  token: string;
};

const signin = async (data: signInType): Promise<SigninResponse> => {
  try {
    const response = await axios.post<SigninResponse>(
      "http://localhost:8000/api/v1/user/signin",
      {
        username: data.email,
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

export const useSignin = () =>
  useMutation<SigninResponse, Error,signInType >({
    mutationFn: signin,
  });
