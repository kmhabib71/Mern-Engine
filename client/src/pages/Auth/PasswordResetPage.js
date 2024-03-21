import React, { useState } from "react";

const PasswordResetPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = () => {
    // TODO: Implement password reset logic here
    // You can use the 'email' state variable to get the user's email address

    // Example code to display a success message
    setMessage("Password reset email sent!");
  };

  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <p>
          ** We will do this part later since it requires own custome domain
          with mail server and for production applications, it's recommended to
          use a dedicated email sending service like SendGrid or Mailgun.{" "}
        </p>
        <h2 className="text-2xl font-bold mb-4">Password Reset</h2>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
        />
        <button
          onClick={handleResetPassword}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Reset Password
        </button>
        <p className="text-green-500 mt-4">{message}</p>
      </div>
    </div>
  );
};

export default PasswordResetPage;
