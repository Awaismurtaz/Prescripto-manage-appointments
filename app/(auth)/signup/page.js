"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import toast from "react-hot-toast";

const schema = yup.object().shape({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required(),
});
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const onSubmit = async (data) => {
    try {
      const payload = {
        ...data,
        role: "patient",
      };

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/register`,
        payload
      );

      console.log(response);
      toast.success(response?.data?.message);
      reset()
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <section className="d-flex align-items-center justify-content-center  min-vh-100">
      <div className="account ">
        <div className="account-top">Create Account</div>
        <p className="accont-sub">Please sign up to book appointment</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row g-2">
            <div className="col">
              <label htmlFor="" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control a-f"
                name="first_name"
                {...register("first_name")}
              />
              {errors.first_name && (
                <p className=" text-danger small">
                  {errors.first_name.message}
                </p>
              )}
            </div>
            <div className="col">
              <label htmlFor="" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control a-f"
                name="last_name"
                {...register("last_name")}
              />
              {errors.last_name && (
                <p className=" text-danger small">{errors.last_name.message}</p>
              )}
            </div>
          </div>
          <label htmlFor="" className="form-label">
            Email
          </label>
          <input
            type="Email"
            className="form-control a-f"
            name="email"
            {...register("email")}
          />
          {errors.email && (
            <p className=" text-danger small">{errors.email.message}</p>
          )}
          <label htmlFor="" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control a-f"
            name="password"
            {...register("password")}
          />
          {errors.password && (
            <p className=" text-danger small">{errors.password.message}</p>
          )}

          <button
            className="btn form-btn py-2"
            type="submit"
            disabled={!isDirty || !isValid}
          >
            Creat account
          </button>
        </form>

        <p className="account-end">
          Already have an account? <Link href="/login">Login here</Link>
        </p>
      </div>
    </section>
  );
};

export default Signup;
