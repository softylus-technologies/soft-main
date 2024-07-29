import React, { useState } from "react";
import "./ApplyForm.css";

function ApplyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://strapi.softylus.com/api/apply-forms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer e9279a95db02d9220f944a52d6c0288bb38c733eca16bef5ed2e634e7c53b043560a00b4793f333cec78a9f2f63b72b40288a527d1ed8fbe47a7d1a08f66a60d64762c85f43b5eeeeb50f38244490e6fe7f3e338b4263eaf18056e0f2eded7cf6b09542910930be55000e4205e764bea8933db3694e33722520774fb00e422cd",
        },
        body: JSON.stringify({ data: formData }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "", phone: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleInputChange}
          value={formData.name}
          className="shadow-sm bg-transparent border border-gray-200 text-white text-sm rounded-lg block w-full p-2.5"
          placeholder="Name"
          required
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="phone"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          className="shadow-sm bg-transparent border border-gray-200 text-white text-sm rounded-lg block w-full p-2.5"
          placeholder="Phone Number"
          onChange={handleInputChange}
          value={formData.phone}
          required
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="shadow-sm bg-transparent border border-gray-200 text-white text-sm rounded-lg block w-full p-2.5"
          placeholder="emailaddress@email.com"
          onChange={handleInputChange}
          value={formData.email}
          required
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          onChange={handleInputChange}
          value={formData.message}
          rows={3}
          className="shadow-sm bg-transparent border border-gray-200 text-white text-sm rounded-lg block w-full p-2.5"
          placeholder="message"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="no-underline inline-flex items-center justify-center px-4 py-3 text-base font-bold text-white bg-main hover:opacity-85 border-0 rounded-full focus:ring-10 w-auto"
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </button>

      {submitStatus === "success" && (
        <p className="mt-3 text-green-500">Application submitted successfully!</p>
      )}
      {submitStatus === "error" && (
        <p className="mt-3 text-red-500">Error submitting application. Please try again.</p>
      )}
    </form>
  );
}

export default ApplyForm;