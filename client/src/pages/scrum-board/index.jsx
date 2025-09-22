import CommonCard from "@/components/common-card";
import { scrumBoardOptions } from "@/config";
import { TaskManagetContext } from "@/context";
import { getAllTasksApi, updateTaskApi } from "@/services";
import { Fragment, useContext, useEffect } from "react";

function ScrumBoardPage() {
  const { setTasksList, tasksList, user } = useContext(TaskManagetContext);
  async function fetchListOfTasks() {
    const response = await getAllTasksApi(user?._id);
    // console.log(response, "tasksList");
    if (response.success) {
      setTasksList(response?.tasksList);
    }
  }
  async function updateTaskByStatus(currentTask) {
    await updateTaskApi(currentTask);
    await fetchListOfTasks();
  }
  function onDragStart(event, id) {
    event.dataTransfer.setData("id", id);
    // console.log(event.dataTransfer);
  }
  function onDrop(event, getCurrentStatus) {
    const getDraggedtaskId = event.dataTransfer.getData("id");
    let findCurrentTask = tasksList.find(
      (item) => item._id.toString() === getDraggedtaskId
    );
    findCurrentTask = {
      ...findCurrentTask,
      status: getCurrentStatus,
    };

    updateTaskByStatus(findCurrentTask);
  }

  function renderToDoByStatus() {
    const taskStatuses = {
      todo: [],
      inProgress: [],
      blocked: [],
      review: [],
      done: [],
    };
    tasksList.forEach((taskItems) => {
      taskStatuses[taskItems.status].push(
        <div
          onDragStart={
            taskItems.status !== "done"
              ? (event) => onDragStart(event, taskItems._id)
              : null
          }
          draggable={taskItems?.status !== "done" ? true : null}
        >
          <CommonCard
            extraTextStyles={
              taskItems?.status === "done" ? "line-through" : null
            }
            title={taskItems?.title}
            description={
              scrumBoardOptions.find(
                (boardOption) => boardOption.id === taskItems?.status
              ).label
            }
          />
        </div>
      );
    });
    return taskStatuses;
  }

  useEffect(() => {
    if (user !== null) {
      fetchListOfTasks();
    }
  }, [user]);

  return (
    <Fragment>
      <div className="grid h-full grid-cols-5 gap-2">
        {scrumBoardOptions.map((item) => (
          <div
            className="overflow-auto border border-black rounded"
            key={item.id}
            onDrop={(event) => onDrop(event, item.id)}
            onDragOver={(event) => event.preventDefault()}
          >
            <div className="px-1 py-3 mb-3 text-center bg-black border-none">
              <h3 className="text-2xl font-extrabold text-white ">
                {item.label}
              </h3>
            </div>
            <div className="p-3">{renderToDoByStatus()[item.id]}</div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default ScrumBoardPage;
