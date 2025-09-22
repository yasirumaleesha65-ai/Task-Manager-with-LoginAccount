import { Button } from "../ui/button";

function CommonButton({ onClick, buttonText, type, disabled }) {
  return (
    <Button
      onClick={onClick ? onClick : null}
      disabled={disabled ? disabled : false}
      type={type ? type : "submit"}
      className="px-5 font-extrabold text-white bg-black border-none rounded h-11 hover:bg-black hover:text-white"
    >
      {buttonText}
    </Button>
  );
}

export default CommonButton;
