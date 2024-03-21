import React from "react";

const NewPasswordPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500">
      <div className="bg-white p-8 rounded shadow-lg">
        <div className="flex flex-col space-y-4">
          <input
            type="password"
            placeholder="New Password"
            className="border border-gray-300 rounded-md p-2"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="border border-gray-300 rounded-md p-2"
          />
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPasswordPage;
