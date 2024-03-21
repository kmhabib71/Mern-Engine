import axios from "axios";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
function SignIn() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null); // Add this line

  const navigate = useNavigate();
  const API_URL = "http://localhost:5000/api/auth/";
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL + "signin", user, {
        withCredentials: true,
      });
      if (response.status === 200) {
        console.log("Success! Response: ", response.data);
        // handle successful registration
        navigate("/admin/dashboard");
      }
    } catch (error) {
      if (error.response) {
        console.log("Error Message from register: ", error.response);
        setErrorMessage(error.response.data.message);
      }
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-400 to-red-500">
      <form
        onSubmit={handleSignIn}
        className="w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h3 className="mb-4 text-xl font-bold text-center text-red-500">
          Sign In
        </h3>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type={showPassword ? "text" : "password"}
            name="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <div className="flex items-center ">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={(e) => setShowPassword(e.target.checked)}
            />
            <label
              htmlFor="show-password"
              className="text-xs text-gray-600 ml-1">
              Show Password
            </label>
          </div>
          <div className="flex items-center justify-between mt-5">
            <a
              href="/password-reset"
              className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker">
              Forgot Password?
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Sign In
          </button>
          <p className="text-sm text-red-500 hover:text-red-700">
            Not registered?{" "}
            <a href="/register" className="font-bold">
              Register
            </a>
          </p>
        </div>
        <div className="mt-6">
          <a href="http://localhost:5000/auth/google">
            <div className=" flex items-center justify-center border border-gray-400 text-gray font-bold py-2 px-4 rounded  w-full cursor-pointer">
              <FcGoogle className="mr-2 h-6 w-6" /> Sign in with Google
            </div>
          </a>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
