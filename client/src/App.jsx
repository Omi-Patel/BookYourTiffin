import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Menu from "./components/menu/Menu";
import Contact from "./components/contact/Contact";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

//

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookNow from "./components/menu/BookNow";
import Dashboard from "./components/menu/Dashboard";
import CreateMenu from "./components/menu/CreateMenu";
import AllMenuForAdmin from "./components/menu/AllMenuForAdmin";

import Profile from "./components/profile/Profile";
import PaymentSuccess from "./components/menu/PaymentSuccess";
import AllUsers from "./components/profile/AllUsers";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route
          path="/booknow/:id"
          element={
            <ProtectedRoute>
              <BookNow />
            </ProtectedRoute>
          }
        />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />

        <Route
          path="/profile/:id"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRouteForAdmin>
              <Dashboard />
            </ProtectedRouteForAdmin>
          }
        />

        <Route
          path="/createmenu"
          element={
            <ProtectedRouteForAdmin>
              <CreateMenu />
            </ProtectedRouteForAdmin>
          }
        />

        <Route
          path="/allmenu"
          element={
            <ProtectedRouteForAdmin>
              <AllMenuForAdmin />
            </ProtectedRouteForAdmin>
          }
        />

        <Route
          path="/allusers"
          element={
            <ProtectedRouteForAdmin>
              <AllUsers />
            </ProtectedRouteForAdmin>
          }
        />

        <Route path="/contact" element={<Contact />} />

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Router>
  );
}

export default App;

export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (token) {
    return children;
  } else {
    return <Navigate to={"/signin"} />;
  }
};

export const ProtectedRouteForAdmin = ({ children }) => {
  const userEmail = localStorage.getItem("userEmail");
  if (userEmail === import.meta.env.VITE_ADMIN_LOGIN) {
    return children;
  } else {
    return <Navigate to={"/signin"} />;
  }
};
