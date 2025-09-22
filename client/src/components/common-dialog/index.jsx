import CommonForm from "../common-form";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";

function CommonDialog({
  showDialog,
  onOpenChange,
  title,
  btnText,
  formControls,
  formData,
  handleSubmit,
}) {
  return (
    <Dialog open={showDialog} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-screen-sm h-[450px] overflow-auto">
        <DialogTitle>{title}</DialogTitle>
        <div>
          <CommonForm
            formControls={formControls}
            btnText={btnText}
            form={formData}
            handleSubmit={handleSubmit}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CommonDialog;
