"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import toast from "react-hot-toast";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
});

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const router = useRouter();

  const onSubmit = async (data) => {
    try {
     await axios.post("/api/auth/forgot-password",data);

      toast.success("Password reset link sent to your email");
      router.push("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <section className="d-flex align-items-center justify-content-center min-vh-100">
      <div className="account">
        <div className="account-top">Forgot Password</div>
        <p className="account-sub">
          Enter your email and we’ll send you a reset password link.
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control a-f"
            {...register("email")}
          />

          {errors.email && (
            <p className="text-danger small">{errors.email.message}</p>
          )}

          <button
            className="btn form-btn py-2"
            type="submit"
            disabled={!isDirty || !isValid}
          >
            Send Reset Link
          </button>
        </form>

        <p className="account-end mt-3 text-center">
          Don’t have an account?
          <Link href="/signup" className="text-decoration-none">
            Register here
          </Link>
        </p>
      </div>
    </section>
  );
};

export default ForgotPassword;
