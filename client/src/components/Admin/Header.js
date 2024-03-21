// Import React and useState and useEffect hooks
import axios from "axios";
import React, { useState, useEffect } from "react";

// Define a custom component for the dark mode switch
// const DarkModeSwitch = () => {
//   // Use the useState hook to store the state of the switch
//   const [darkMode, setDarkMode] = useState(false);
//   // Use the useEffect hook to update the body background color based on the switch state
//   useEffect(() => {
//     // Check the switch state
//     if (darkMode) {
//       // Change the body background color to black
//       document.body.style.backgroundColor = "black";
//     } else {
//       // Change the body background color to white
//       document.body.style.backgroundColor = "white";
//     }
//   }, [darkMode]);
//   // Define a function to handle the change event on the switch
//   const handleChange = (e) => {
//     // Set the switch state to the checkbox value
//     setDarkMode(e.target.checked);
//   };

// Return the switch element
// return (
//   <label htmlFor="dark-mode" className="flex items-center mr-4">
//     <input
//       type="checkbox"
//       id="dark-mode"
//       className="hidden"
//       onChange={handleChange}
//     />
//     <div className="w-12 h-6 bg-white rounded-full border border-gray-900 relative">
//       <div
//         className={`w-6 h-6 bg-gray-900  rounded-full absolute left-0 top-0 transform ${
//           darkMode ? "translate-x-6" : ""
//         }`}></div>
//     </div>
//   </label>
// );
// };
function Header() {
  const handleLogout = async () => {
    try {
      // Make a GET request to the logout route
      const response = await axios.get(
        "http://localhost:5000/api/auth/logout",
        { withCredentials: true }
      );
      if (response.status === 200) {
        // Handle successful logout (e.g., redirect to login page)
        console.log("Logout successful");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  return (
    // Add the dark mode switch to the header component

    <div className="bg-white w-full pl-64 pt-5 pr-2 pb-5 fixed top-0 left-0 right-0  drop-shadow-md z-10">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center justify-center ml-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-4">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <div>
            <input
              type="text"
              className=" border-gray-300 focus:outline-none focus:border-blue-500 px-4 py-2"
              placeholder="Type to Search..."
            />
          </div>
        </div>
        {/* User Profile */}
        <div className="flex items-center text-gray-900">
          {/* Notification icon */}
          <div className="pr-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </div>
          <div className="pr-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-900">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>
          </div>
          {/* Chat icon */}
          {/* <ChatIcon className="text-white h-8 w-8 mr-4 cursor-pointer" /> */}
          {/* Dark mode switch */}
          {/* <DarkModeSwitch /> */}
          <span className="text-gray-900 mr-4">Welcome, Admin!</span>
          <img
            src="/images/header/avatar-black.png"
            alt="User Avatar"
            className="h-8 w-8 rounded-full"
          />
          <button onClick={handleLogout} className="text-gray-900 mr-4">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
export default Header;
