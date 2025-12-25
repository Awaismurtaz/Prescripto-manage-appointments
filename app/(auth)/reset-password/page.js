"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import axios from "axios";

const schema = yup.object().shape({
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

const ResetPassword = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!token) {
      toast.error("Reset token missing or invalid");
    }
  }, [token]);
  const onSubmit = async (data) => {
    if (!token) return;

    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/reset-password`,
        {
          token,
          password: data.password,
        }
      );

      const result = response.data;

      if (result.success) {
        toast.success("Password reset successfully! Redirecting to login...");
        setTimeout(() => {
          router.push("/login");
        }, 3000);
      } else {
        toast.error(result.message || "Failed to reset password");
      }
    } catch (error) {
      toast.error("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="d-flex align-items-center justify-content-center min-vh-100">
      <div className="account" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="account-top">Reset Password</div>
        <p className="account-sub">Enter your new password below</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="password" className="form-label">
            New Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control a-f"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-danger small">{errors.password.message}</p>
          )}

          <label htmlFor="confirmPassword" className="form-label mt-3">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="form-control a-f"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-danger small">
              {errors.confirmPassword.message}
            </p>
          )}

          <button
            className="btn form-btn py-2 mt-4"
            type="submit"
            disabled={!isDirty || !isValid || loading}
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ResetPassword;
