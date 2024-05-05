import { useNavigate } from "react-router-dom";

const userDashboard = () => {
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));
  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/");
  };
  return (
    <>
      <section className="flex justify-center items-center text-white">
        <button onClick={handleLogout}>Logout</button>
        <div className="text-center px-20">
          <h1 className="">Welcome {userName.name}</h1>
          <button className="bg-blue-200 hover:bg-blue-400 text-black font-bold py-3 px-6 rounded-full shadow-lg shadow-neutral-950 hover:text-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
            Create Ticket
          </button>
        </div>
      </section>
    </>
  );
};

export default userDashboard;
