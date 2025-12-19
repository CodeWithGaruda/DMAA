import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AuthProvider } from "./auth/AuthContext";
import SignIn from "./auth/signin";
import Home from "./pages/home";
import PrivateRoute from "./routes/PrivateRoute";
import Unauthorized from "./pages/utils/Unauthorized";
import Layout from "./components/Layout";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          <Route
            element={
              <PrivateRoute allowedRoles={["USER", "MEMBER", "ADMIN"]} />
            }
          >
            <Route element={<Layout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/Contact-us" element={<ContactUs />} />
            </Route>
          </Route>

          {/* <Route
            path="/home"
            element={
              <PrivateRoute allowedRoles={["USER", "MEMBER", "ADMIN"]}>
                <Home />
              </PrivateRoute>
            }
          /> */}

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
