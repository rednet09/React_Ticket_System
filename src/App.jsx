import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import UserDashBoard from "./Components/UserDashboard";
import ProtectedRoutes from "./Services/ProtectedRoutes";
function App() {
  return (
    <>
      <div className="h-screen bg-black flex justify-center items-center">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<ProtectedRoutes />}>
              <Route path="/userDashboard" element={<UserDashBoard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
