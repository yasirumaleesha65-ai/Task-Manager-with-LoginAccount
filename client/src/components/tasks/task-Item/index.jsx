import CommonButton from "@/components/common-button";
import CommonCard from "@/components/common-card";
import { scrumBoardOptions } from "@/config";
import { TaskManagetContext } from "@/context";
import { useContext } from "react";

function SingleTaskItem({
  taskItem,
  handleDelete,
  setShowDialog,
  setCurrentEditedItem,
  taskFormData,
}) {
  return (
    <CommonCard
      title={taskItem.title}
      description={
        scrumBoardOptions.find(
          (boardOption) => boardOption.id === taskItem?.status
        ).label
      }
      footerContent={
        <div className="flex items-center justify-between w-full">
          <CommonButton
            buttonText={"Edit"}
            type={"submit"}
            disabled={false}
            onClick={() => {
              setShowDialog(true);
              setCurrentEditedItem(taskItem._id);
              taskFormData.setValue("title", taskItem.title);
              taskFormData.setValue("description", taskItem?.description);
              taskFormData.setValue("status", taskItem?.status);
              taskFormData.setValue("priority", taskItem?.priority);
            }}
          />
          <CommonButton
            buttonText={"Delete"}
            type={"submit"}
            disabled={false}
            onClick={() => handleDelete(taskItem._id)}
          />
        </div>
      }
    />
  );
}

export default SingleTaskItem;
