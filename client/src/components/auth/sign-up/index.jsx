import CommonForm from "@/components/common-form";
import { signUpFormCrontrolls } from "@/config";
import { useToast } from "@/hooks/use-toast";
import { callRegisterUserApi } from "@/services";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const formData = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const { toast } = useToast();

  async function handleSubmit(getData) {
    const data = await callRegisterUserApi(getData);
    if (data?.success) {
      toast({
        title: "User registration successfull",
        description: "Welcome",
      });
      navigate("/tasks/list");
    } else {
      toast({
        title: "Error",
        description: "Registration Unsuccessfull...",
      });
    }
  }

  return (
    <CommonForm
      formControls={signUpFormCrontrolls}
      btnText={"Sign up"}
      form={formData}
      handleSubmit={handleSubmit}
    />
  );
}

export default SignUp;
