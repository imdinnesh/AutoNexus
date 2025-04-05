import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import type { signupType } from "@/types/authSchema";

const signup = async (data: signupType)=>{
  try {
    const response = await axios.post(
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
  } 
  catch (err: any) {
    const message =
    err.response.data.message||"Something went wrong";
    throw new Error(message);
  }
};

export const useSignup = () =>
  useMutation({
    mutationFn: signup,
  });
