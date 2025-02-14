import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the validation schema
const referSchema = z.object({
  yourName: z.string().min(2, "Your name must be at least 2 characters"),
  yourEmail: z.string().email("Invalid email format"),
  friendName: z.string().min(2, "Friend's name must be at least 2 characters"),
  friendEmail: z.string().email("Invalid email format"),
  courseName: z.string().min(3, "Course name must be at least 3 characters"),
  courseURL: z.string().url("Invalid URL format"),
});

const ReferFormModal = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(referSchema),
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (formData) => {
    setLoading(true);
    try {
      const res = await fetch("https://accredian-backend-task-w339.onrender.com/api/referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Referral sent successfully!");
        setLoading(false);
        reset();
      } else {
        reset();
        setLoading(false);
        alert(data.error || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      reset();
      alert("Failed to send referral.");
    }
    onClose();
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className=" overlay-container fixed inset-0 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg w-[800px] shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Refer a Course</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Your Name */}
          <div className="mb-4">
            <label className="block text-gray-700">Your Name</label>
            <input
              type="text"
              {...register("yourName")}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.yourName && (
              <p className="text-red-500 text-sm">{errors.yourName.message}</p>
            )}
          </div>

          {/* Your Email */}
          <div className="mb-4">
            <label className="block text-gray-700">Your Email</label>
            <input
              type="email"
              {...register("yourEmail")}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.yourEmail && (
              <p className="text-red-500 text-sm">{errors.yourEmail.message}</p>
            )}
          </div>

          {/* Friend's Name */}
          <div className="mb-4">
            <label className="block text-gray-700">Friend's Name</label>
            <input
              type="text"
              {...register("friendName")}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.friendName && (
              <p className="text-red-500 text-sm">
                {errors.friendName.message}
              </p>
            )}
          </div>

          {/* Friend's Email */}
          <div className="mb-4">
            <label className="block text-gray-700">Friend's Email</label>
            <input
              type="email"
              {...register("friendEmail")}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.friendEmail && (
              <p className="text-red-500 text-sm">
                {errors.friendEmail.message}
              </p>
            )}
          </div>

          {/* Course Name */}
          <div className="mb-4">
            <label className="block text-gray-700">Course Name</label>
            <input
              type="text"
              {...register("courseName")}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.courseName && (
              <p className="text-red-500 text-sm">
                {errors.courseName.message}
              </p>
            )}
          </div>

          {/* Course URL */}
          <div className="mb-4">
            <label className="block text-gray-700">Course URL</label>
            <input
              type="url"
              {...register("courseURL")}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.courseURL && (
              <p className="text-red-500 text-sm">{errors.courseURL.message}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
              disabled={loading}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReferFormModal;
