// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import SignIn from "./pages/Auth/SignIn";
// import Register from "./pages/Auth/Register";
// import AdminPanel from "./pages/Admin/AdminPage";
// import HomePage from "./pages/Home/HomePage";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/admin/*" element={<AdminPanel />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/Auth/SignIn";
import Register from "./pages/Auth/Register";
import AdminPanel from "./pages/Admin/AdminPage";
import HomePage from "./pages/Home/HomePage";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import PasswordResetPage from "./pages/Auth/PasswordResetPage";
import NewPasswordPage from "./pages/Auth/NewPasswordPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password-reset" element={<PasswordResetPage />} />
        <Route path="/set-password" element={<NewPasswordPage />} />
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <AdminPanel />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
