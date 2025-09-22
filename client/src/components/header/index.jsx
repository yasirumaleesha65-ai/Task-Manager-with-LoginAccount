import { TaskManagetContext } from "@/context";
import { callLogoutApi } from "@/services";
import { LogOut } from "lucide-react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const { user, setUser } = useContext(TaskManagetContext);
  const navigate = useNavigate();

  async function OnClickLogout() {
    const response = await callLogoutApi();
    if (response?.success) {
      setUser(null);
      navigate("/auth");
    }
  }

  return (
    <header className="flex items-center justify-between flex-auto max-h-16 ">
      <div className="flex">
        <h2 className="text-2xl font-extrabold ">Task Manager</h2>
      </div>
      <div className="flex items-center gap-5 mr-4 text-2xl">
        <Link className="text-black" to={"/tasks/list"}>
          Task List
        </Link>
        <Link className="text-black" to={"/tasks/scrum-board"}>
          Scrum board
        </Link>
      </div>
      <div className="flex items-center ">
        <LogOut
          onClick={OnClickLogout}
          color="black"
          className="cursor-pointer "
        />
      </div>
    </header>
  );
}

export default Header;
