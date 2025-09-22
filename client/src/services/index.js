import axios from "axios";

export const callRegisterUserApi = async (formData) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/user/register",
      formData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response?.data;
  } catch (error) {
    // Enhanced error logging
    console.error("Backend Error Details:", {
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data, // This is crucial!
      url: error.config?.url,
    });

    const errorMessage =
      error.response?.data?.message ||
      error.response?.data?.error ||
      error.message ||
      "Server error occurred";

    throw new Error(errorMessage);
  }
};

export const callLoginUserApi = async (loginData) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/user/login",
      loginData, // Make sure this is the correct data
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    // Enhanced error logging
    console.error("Login API Error Details:", {
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data, // This contains the specific error message
      requestData: loginData, // Log what you're sending
    });

    const errorMessage =
      error.response?.data?.message ||
      error.response?.data?.error ||
      error.message ||
      "Login failed";

    throw new Error(errorMessage);
  }
};

export const callUserAuth = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/user/auth", {
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const callLogoutApi = async () => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/user/logout",
      {},
      {
        withCredentials: true,
      }
    );

    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const addNewTaskApi = async (formData) => {
  const response = await axios.post(
    "http://localhost:5000/api/tasks/add-tasks",
    formData,
    {
      withCredentials: true,
    }
  );
  return response?.data;
};
export const getAllTasksApi = async (getUserId) => {
  const response = await axios.get(
    `http://localhost:5000/api/tasks/get-all-tasks/${getUserId}`,
    {
      withCredentials: true,
    }
  );
  return response?.data;
};
export const updateTaskApi = async (taskInfo) => {
  const response = await axios.put(
    "http://localhost:5000/api/tasks/update-task",
    taskInfo
  );
  return response?.data;
};
export const deleteTaskApi = async (getTaskId) => {
  const response = await axios.delete(
    `http://localhost:5000/api/tasks/delete-task/${getTaskId}`,
    {
      withCredentials: true,
    }
  );
  return response?.data;
};
