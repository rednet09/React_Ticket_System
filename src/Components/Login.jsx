import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleLogin = (e) => {
    console.log("handle submit");
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loggedUser.email &&
      input.password === loggedUser.password
    ) {
      navigate("/userDashboard");
      localStorage.setItem("loggedin", true);
    } else {
      alert("Please check your credentials");
    }
  };
  return (
    <>
      <form onSubmit={handleLogin}>
        <div className="w-80 flex justify-center content-center rounded-2xl bg-slate-900">
          <div className="flex flex-col gap-2 p-8 bg-slate-900">
            <p className="text-center text-3xl text-gray-300 mb-4">Login</p>
            <input
              name="email"
              value={input.email}
              onChange={(e) => {
                setInput({
                  ...input,
                  email: e.target.value,
                });
              }}
              className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800 text-white"
              type="email"
              placeholder="Email Address"
            />
            <input
              name="password"
              value={input.password}
              onChange={(e) => {
                setInput({
                  ...input,
                  password: e.target.value,
                });
              }}
              className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800 text-white"
              type="password"
              placeholder="Password"
            />
            <button
              type="submit"
              className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95"
            >
              Login
            </button>
          </div>
        </div>
        <p className="text-white text-center">
          Don't Have an account ?{" "}
          <button
            onClick={() => {
              navigate("/register");
            }}
            className=""
          >
            Register Here
          </button>
        </p>
      </form>
    </>
  );
};

export default Login;
