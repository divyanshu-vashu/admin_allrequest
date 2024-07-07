import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import LoginForm from "./components/LoginForm";
import { About, Contact, Hero, Navbar, Works, StarsCanvas } from "./components";
import LoginPage from "./product1";
import ProductPage from "./pages/Product.jsx";
import CareerPage from "./pages/Career.jsx";
import CareerDetails from "./pages/CareerDetails.jsx";
import "./index.css";
import Defxv from "./components/Defxv";
import Footer from "./components/Footer";
import TextToSpeech from "./components/TextToSpeech.jsx";
import Ms from "./components/Ms.jsx";
import UserDetails from "./components/UserDetail.jsx";
import Access from "./components/Access.jsx";
import Naccess from "./components/Naccess.jsx";
import Allrequest from "./components/Allrequest.jsx"
import ForgetPassword from "./components/ForgetPassword.jsx";
import Founder from "./components/Founder.jsx";
import AdminLogin from "./components/AdminLogin.jsx";


function App() {
	const user = localStorage.getItem("token");
	const admin = localStorage.getItem("AdminEmail");
	var temp=!import.meta.env.VITE_REACT_APP_VAR1;
	if (admin===import.meta.env.VITE_REACT_APP_EMAIL)
		{
			temp=import.meta.env.VITE_REACT_APP_VAR2;
		}
	return (
    <BrowserRouter>
		<Routes>
		<Route path="/" element={<AdminLogin />} />
		<Route path="/admin-login" element={<AdminLogin />} />
		{temp && <Route path="/admin/all-request" element={<Allrequest />} />}
		<Route path="/admin/all-request" element={<Navigate replace to="/admin-login" />} />

		</Routes>
    </BrowserRouter>
	);
}

  
export default App;