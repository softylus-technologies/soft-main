import React from "react";

function ApplyForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form className="max-w-sm mx-auto">
      <div className="mb-3">
        <label
          for="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Name
        </label>
        <input
          type="name"
          name="name"
          id="name"
          onChange={handleInputChange}
          value={formData.name}
          className="shadow-sm bg-transparent border border-gray-200 text-white text-sm rounded-lg block w-full p-2.5 "
          placeholder="Name"
          required
        />
      </div>
      <div className="mb-3">
        <label
          for="phone"
          className="block mb-2 text-sm font-medium text-gray-900  dark:text-white"
        >
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          className="shadow-sm bg-transparent border border-gray-200 text-white text-sm rounded-lg block w-full p-2.5 "
          placeholder="Phone Number"
          onChange={handleInputChange}
          value={formData.phone}
          required
        />
      </div>
      <div className="mb-3">
        <label
          for="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="shadow-sm bg-transparent border border-gray-200 text-white text-sm rounded-lg block w-full p-2.5 "
          placeholder="emailaddress@email.com"
          onChange={handleInputChange}
          value={formData.email}
          required
        />
      </div>
      <div className="mb-3">
        <label
          for="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Message
        </label>
        <textarea
          type="message"
          id="message"
          name="message"
          onChange={handleInputChange}
          value={formData.message}
          rows={3}
          className="shadow-sm bg-transparent border border-gray-200 text-white text-sm rounded-lg block w-full p-2.5 "
          placeholder="message"
          required
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Register new account
      </button>
    </form>
  );
}

export default ApplyForm;
