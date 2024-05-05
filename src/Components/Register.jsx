import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="w-80 flex justify-center content-center rounded-2xl bg-slate-900">
          <div className="flex flex-col gap-2 p-8 bg-slate-900">
            <p className="text-center text-3xl text-gray-300 mb-4">Register</p>
            <input
              name="name"
              value={input.name}
              onChange={(e) => {
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                });
              }}
              className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800 text-white"
              type="text"
              placeholder="Full name"
            />
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
              Submit
            </button>
          </div>
        </div>
        <p className="text-white text-center">
          Already have an account?{" "}
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Login{" "}
          </button>
        </p>
      </form>
    </>
  );
};

export default Register;
