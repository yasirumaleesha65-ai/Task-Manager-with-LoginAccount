import { callUserAuth } from "@/services";
import { createContext, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

export const TaskManagetContext = createContext(null);

function TaskManagerProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const taskFormData = useForm({
    defaultValues: {
      title: "",
      description: "",
      status: "",
      priority: "",
    },
  });
  const [loading, setLoading] = useState(false);
  const [tasksList, setTasksList] = useState([]);
  const [currentEditedItem, setCurrentEditedItem] = useState(null);

  useEffect(() => {
    const verifyUserCookie = async () => {
      const data = await callUserAuth();

      if (data?.userInfo) {
        setUser(data?.userInfo);
      }

      return data?.success
        ? navigate(
            location.pathname === "/auth" || location.pathname === "/"
              ? "/tasks/list"
              : `${location.pathname}`
          )
        : navigate("/auth");
    };

    verifyUserCookie();
  }, [navigate, location.pathname, setUser]);

  return (
    <TaskManagetContext.Provider
      value={{
        user,
        setUser,
        taskFormData,
        setLoading,
        setTasksList,
        tasksList,
        loading,
        currentEditedItem,
        setCurrentEditedItem,
      }}
    >
      {children}
    </TaskManagetContext.Provider>
  );
}

export default TaskManagerProvider;
