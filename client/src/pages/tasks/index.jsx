import CommonButton from "@/components/common-button";
import AddNewTask from "@/components/tasks/add-new-tasks";
import SingleTaskItem from "@/components/tasks/task-Item";
import { Skeleton } from "@/components/ui/skeleton";
import { TaskManagetContext } from "@/context";
import {
  addNewTaskApi,
  deleteTaskApi,
  getAllTasksApi,
  updateTaskApi,
} from "@/services";
import { Fragment, useContext, useEffect, useState } from "react";

function TasksPage() {
  const [showDialog, setShowDialog] = useState(false);
  const {
    setLoading,
    setTasksList,
    tasksList,
    loading,
    user,
    taskFormData,
    currentEditedItem,
    setCurrentEditedItem,
  } = useContext(TaskManagetContext);

  async function fetchListOfTasks() {
    setLoading(true);
    const response = await getAllTasksApi(user?._id);
    // console.log(response, "tasksList");
    if (response.success) {
      setTasksList(response?.tasksList);
      setLoading(false);
    }
  }

  async function handleSubmit(getData) {
    // console.log(user._id, "userId");
    const response =
      currentEditedItem !== null
        ? await updateTaskApi({
            ...getData,
            _id: currentEditedItem,
            userId: user?._id,
          })
        : await addNewTaskApi({
            ...getData,
            userId: user?._id,
            //   title: "god",
            //   description: "pray",
            //   status: "todo",
            //   priority: "high",
            //   userId: "11111111",
          });
    // console.log(response);
    if (response) {
      setShowDialog(false);
      taskFormData.reset();
      fetchListOfTasks();
      setCurrentEditedItem(null);
    }
  }

  async function handleDelete(taskId) {
    const response = await deleteTaskApi(taskId);
    if (response.success) {
      fetchListOfTasks();
    }
  }

  useEffect(() => {
    if (user !== null) {
      fetchListOfTasks();
    }
  }, [user]);

  if (loading) {
    return (
      <Skeleton
        className={"w-full h-[550px] rounded-[6px] bg-black opacity-50"}
      />
    );
  }

  return (
    <Fragment>
      <div className="mb-5">
        <CommonButton
          onClick={() => setShowDialog(true)}
          buttonText={"Add new Task"}
        />
      </div>
      <div className="flex flex-col mt-5">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tasksList.length > 0 ? (
            tasksList.map((taskItem) => (
              <SingleTaskItem
                setShowDialog={setShowDialog}
                handleDelete={handleDelete}
                taskItem={taskItem}
                setCurrentEditedItem={setCurrentEditedItem}
                taskFormData={taskFormData}
              />
            ))
          ) : (
            <h3>There is no tasks .. Please Add..</h3>
          )}
        </div>
        <div>
          <AddNewTask
            showDialog={showDialog}
            setShowDialog={setShowDialog}
            handleSubmit={handleSubmit}
            taskFormData={taskFormData}
            currentEditedItem={currentEditedItem}
            setCurrentEditedItem={setCurrentEditedItem}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default TasksPage;
