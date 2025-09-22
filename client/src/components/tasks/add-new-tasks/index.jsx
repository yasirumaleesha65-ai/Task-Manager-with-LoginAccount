import CommonDialog from "@/components/common-dialog";
import { addNewTaskFormControls } from "@/config";
import { TaskManagetContext } from "@/context";
import { addNewTaskApi } from "@/services";
import { useContext } from "react";

function AddNewTask({
  showDialog,
  setShowDialog,
  handleSubmit,
  taskFormData,
  currentEditedItem,
  setCurrentEditedItem,
}) {
  const { user } = useContext(TaskManagetContext);

  return (
    <CommonDialog
      formControls={addNewTaskFormControls}
      showDialog={showDialog}
      onOpenChange={() => {
        setShowDialog(false);
        currentEditedItem ? taskFormData.reset() : null;
        setCurrentEditedItem(null);
      }}
      title={currentEditedItem ? "Edit task" : "Post new task"}
      btnText={currentEditedItem ? "Edit" : "Add"}
      handleSubmit={handleSubmit}
      formData={taskFormData}
    />
  );
}

export default AddNewTask;
