import SignIn from "@/components/auth/sign-in";
import SignUp from "@/components/auth/sign-up";
import CommonButton from "@/components/common-button";
import { useState } from "react";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex flex-col flex-auto h-full min-h-screen">
      <div className="flex flex-col items-center justify-center bg-white">
        <h3 className="text-3xl font-bold">Welcome</h3>
        <div className="mt-4">{isLogin ? <SignIn /> : <SignUp />}</div>
        <div className="mt-5">
          <CommonButton
            onClick={() => {
              setIsLogin(!isLogin);
            }}
            type={"button"}
            buttonText={isLogin ? "Switch to sign up" : "Switch to sign in"}
          />
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
