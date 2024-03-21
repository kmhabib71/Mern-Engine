import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isValidJSON = (str) => {
      try {
        JSON.parse(str);
        return true;
      } catch (error) {
        return false;
      }
    };

    const checkAuthStatus = async () => {
      try {
        console.log("Checking auth status...");
        const response = await axios.get(
          "http://localhost:5000/api/auth/status",
          {
            withCredentials: true, // Include credentials
          }
        );
        console.log("Response: ", response.data);
        const contentType = response.headers["content-type"];
        console.log("Content-Type:", contentType);
        // Trim the response data to remove leading/trailing whitespace
        // Convert response data to string and then trim it
        const trimmedData =
          typeof response.data === "string"
            ? response.data.trim()
            : response.data;

        // Check if the response data is a valid JSON string
        if (response.data.isAuthenticated) {
          setIsAuthenticated(true);
          setIsAuthorized(response.data.user);
        } else {
          console.log("User not authenticated");
        }
      } catch (error) {
        console.log("Error checking auth status: ", error);
        if (error.response) {
          console.log("Server responded with status: ", error.response.status);
          console.log("Response data: ", error.response.data);
        }
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated || !isAuthorized) {
    return <Navigate to="/signin" state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
