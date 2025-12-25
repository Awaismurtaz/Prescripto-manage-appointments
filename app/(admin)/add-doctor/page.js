"use client";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-input-2";

const schema = yup.object().shape({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  phone: yup.string().required("Phone number is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  speciality: yup.string().required("Speciality is required"),
  education: yup.string().required("Education is required"),
  address: yup.string().required("Address is required"),
  experience: yup.string().required("Experience is required"),
  fee: yup.string().required("Fee is required"),
  bio: yup.string(),

  profile_image: yup
    .mixed()
    .required("Profile image is required")
    .test("fileExists", "Please upload a file", (value) => {
      return value && value.length > 0;
    })
    .test("fileType", "Only image files are allowed", (value) => {
      return value && value[0] && value[0].type.startsWith("image/");
    }),
});


const AddDoctor = () => {
  const [preview, setPreview] = useState(null);
  const [imageFile, setImageFile]=useState()
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });


    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setImageFile(file);
      if (file) {
        setPreview(URL.createObjectURL(file));
      }
    };

 const onSubmit = async (data) => {
   try {
     const formData = new FormData();
     formData.append("first_name", data.first_name);
     formData.append("last_name", data.last_name);
     formData.append("email", data.email);
     formData.append("speciality", data.speciality);
     formData.append("education", data.education);
     formData.append("address", data.address);
     formData.append("experience", data.experience);
     formData.append("fee", data.fee);
     formData.append("phone", data.phone);
     formData.append("bio", data.bio);

     if (data.profile_image && data.profile_image[0]) {
       formData.append("profile_image", data.profile_image[0]);
     }

     const response = await axios.post(
       `${process.env.NEXT_PUBLIC_API_BASE_URL}/doctors`,
       formData,
     );

     toast.success(response?.data?.message);
   } catch (error) {
     toast.error(error.response?.data?.message);
   } finally {
     setPreview(null);
     reset();
   }
 };


  return (
    <div>
      <div className="inner_content pt-4 ">
        <div className="top-admin-apoint">
          <p>Add Doctor</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="doctor-form">
          {/* Image Upload Section */}
          <div>
            <div className="doc-img d-flex align-items-center">
              {preview ? (
                <img
                  src={preview}
                  alt="Selected doctor"
                  style={{
                    width: 100,
                    height: 100,
                    objectFit: "cover",
                    borderRadius: 50,
                  }}
                />
              ) : (
                <img src="img/upload_area.svg" alt="upload area" />
              )}

              <div className="ms-1">
                <label className="pic-do " htmlFor="doctorImage">
                  Upload doctor
                  <br className="d-none d-md-block" />
                  Picture
                </label>

                <Controller
                  name="profile_image"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="file"
                      accept="image/*"
                      id="doctorImage"
                      style={{ display: "none" }}
                      onChange={(e) => {
                        field.onChange(e.target.files);
                        handleImageChange(e);
                      }}
                    />
                  )}
                />
              </div>
            </div>

            {errors.profile_image && (
              <span className="text-danger small">
                {errors.profile_image.message}
              </span>
            )}
          </div>

          {/* First Name & Last Name */}
          <div className="row g-3 mt-4" style={{ color: "#7B7B7B" }}>
            <div className="col-md-6 col-lg-6 col-sm-12">
              <label htmlFor="doctorFirstName" className="form-label">
                First Name
              </label>
              <input
                id="doctorFirstName"
                type="text"
                className="form-control area-alet"
                placeholder="First Name"
                aria-label="First Name"
                {...register("first_name")}
              />
              {errors.first_name && (
                <span className="text-danger small">
                  {errors.first_name.message}
                </span>
              )}
            </div>

            <div className="col-md-6 col-lg-6 col-sm-12">
              <label htmlFor="doctorLastName" className="form-label">
                Last Name
              </label>
              <input
                id="doctorLastName"
                type="text"
                className="form-control area-alet"
                placeholder="Last Name"
                aria-label="Last Name"
                {...register("last_name")}
              />
              {errors.last_name && (
                <span className="text-danger small">
                  {errors.last_name.message}
                </span>
              )}
            </div>

            <div className="col-md-12 col-lg-12 col-sm-12">
              <Controller
                name="phone"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <PhoneInput
                    country={"pk"}
                    value={field.value}
                    onChange={field.onChange}
                    inputStyle={{ width: "100%" }}
                    specialLabel="Phone"
                  />
                )}
              />
              {errors.phone && (
                <p className=" text-danger small">Phone is required</p>
              )}
            </div>
          </div>

          {/* Speciality & Education */}
          <div className="row g-3 mt-3" style={{ color: "#7B7B7B" }}>
            <div className="col-md-6 col-lg-6 col-sm-12">
              <label htmlFor="speciality" className="form-label">
                Speciality
              </label>
              <select
                id="speciality"
                className="form-select area-alet"
                aria-label="Speciality"
                defaultValue="General physician"
                name="speciality"
                {...register("speciality")}
              >
                <option value="General physician">General physician</option>
                <option value="Gynologist">Gynologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Pediatricians">Pediatricians</option>
              </select>
              {errors.speciality && (
                <span className="text-danger small">
                  {errors.speciality.message}
                </span>
              )}
            </div>

            <div className="col-md-6 col-lg-6 col-sm-12">
              <label htmlFor="education" className="form-label">
                Education
              </label>
              <input
                id="education"
                type="text"
                className="form-control area-alet"
                placeholder="Education"
                aria-label="Education"
                {...register("education")}
              />
              {errors.education && (
                <span className="text-danger small">
                  {errors.education.message}
                </span>
              )}
            </div>
          </div>

          {/* Email & Password */}
          <div className="row g-3 mt-3" style={{ color: "#7B7B7B" }}>
            <div className="col-md-6 col-lg-6 col-sm-12">
              <label htmlFor="doctorEmail" className="form-label">
                Doctor Email
              </label>
              <input
                id="doctorEmail"
                type="email"
                className="form-control area-alet"
                placeholder="Your Email"
                aria-label="Your Email"
                {...register("email")}
              />
              {errors.email && (
                <span className="text-danger small">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="col-md-6 col-lg-6 col-sm-12">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                id="address"
                type="text"
                className="form-control area-alet"
                placeholder="Address"
                aria-label="Address"
                {...register("address")}
              />
              {errors.address && (
                <span className="text-danger small">
                  {errors.address.message}
                </span>
              )}
            </div>
          </div>

          {/* Experience & Fees */}
          <div className="row g-3 mt-3" style={{ color: "#7B7B7B" }}>
            <div className="col-md-6 col-lg-6 col-sm-12">
              <label htmlFor="experience" className="form-label">
                Experience
              </label>
              <select
                id="experience"
                className="form-select"
                aria-label="Experience"
                defaultValue=""
                {...register("experience")}
              >
                <option value="" disabled>
                  Experience
                </option>
                <option value="1">1 year Experience</option>
                <option value="2">2 years Experience</option>
                <option value="3">3 years Experience</option>
                <option value="4">4 years Experience</option>
                <option value="5">5 years Experience</option>
              </select>
              {errors.experience && (
                <span className="text-danger small">
                  {errors.experience.message}
                </span>
              )}
            </div>

            <div className="col-md-6 col-lg-6 col-sm-12">
              <label htmlFor="fees" className="form-label">
                Fees
              </label>
              <input
                id="fees"
                type="text"
                className="form-control"
                placeholder="Your Fees"
                aria-label="Fees"
                {...register("fee")}
              />
              {errors.fee && (
                <span className="text-danger small">{errors.fee.message}</span>
              )}
            </div>
          </div>

          {/* About Me */}
          <div className="mt-4" style={{ color: "#7B7B7B", fontSize: 16 }}>
            <label htmlFor="bio" className="form-label">
              About Me
            </label>
            <textarea
              className="form-control"
              placeholder="Write about yourself"
              id="bio"
              style={{ height: 100 }}
              {...register("bio")}
            />
            {errors.bio && (
              <span className="text-danger small">
                {errors.bio.message}
              </span>
            )}
          </div>

          {/* Submit */}
          <button
            className="btn form-btn py-2 mt-4 w-auto rounded-5"
            type="submit"
            disabled={!isDirty || !isValid}
          >
            Add Doctor
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
