"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import toast from "react-hot-toast";
import { getSession, signIn } from "next-auth/react";
const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required(),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const router = useRouter();

  const onSubmit = async (data) => {
    const result = await signIn("credentials", {
      redirect: false,
      password: data.password,
      email: data.email,
    });

    if (result.error) {
      toast.error("invalid email and password");
      return;
    }
    toast.success("User login successfully");
    // get session
    const session = await getSession();

    if (session?.user?.role === "doctor") {
      router.push("/dashboard");
    } else if (session?.user?.role === "patient") {
      router.push("/my-appointments");
    } else if (session?.user?.role === "admin") {
      router.push("/dashboard");
    }
  };

  return (
    <section className="d-flex align-items-center justify-content-center min-vh-100">
      <div className="account">
        <div className="account-top">Login</div>
        <p className="account-sub">Please login to book an appointment</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control a-f"
            name="email"
            {...register("email")}
          />

          {errors.email && (
            <p className=" text-danger small">{errors.email.message}</p>
          )}

          <label htmlFor="password" className="form-label ">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control a-f"
            name="password"
            {...register("password")}
          />
          {errors.password && (
            <p className=" text-danger small">{errors.password.message}</p>
          )}
          <p className="mt-2 mb-4">
            <Link href="/forgot-password" className="text-decoration-none">
              Forgot Password
            </Link>
          </p>

          <button
            className="btn form-btn py-2"
            type="submit"
            disabled={!isDirty || !isValid}
          >
            Login
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

export default Login;
