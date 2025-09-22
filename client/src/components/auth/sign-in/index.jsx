import CommonForm from "@/components/common-form";
import { signInFormControlls } from "@/config";
import { callLoginUserApi } from "@/services";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const formData = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  async function handleSubmit(getData) {
    // console.log("Submitting login data:", getData);
    const data = await callLoginUserApi(getData);
    // console.log(data, "data");
    if (data?.success) {
      navigate("/tasks/list");
    }
  }

  return (
    <CommonForm
      formControls={signInFormControlls}
      btnText={"Sign in"}
      form={formData}
      handleSubmit={handleSubmit}
    />
  );
}

export default SignIn;
