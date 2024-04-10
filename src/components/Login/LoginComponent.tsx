import { Button, TextField } from "@mui/material";
import { ThirdPartyLogin } from "./ThirdPartyLogin/ThirdPartyLogin";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import variables from "../../../variables.json";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

const notify_success = (success_message: string) => toast.success(success_message);
const notify_error = (error_message: string) => toast.error(error_message);
const notify_custom = (custom_message: string) => toast.custom(custom_message);

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const forgot_password = (event:any) => {
    notify_custom("We have sent you a link to reset your password, please have a look");
  }

  const loginButtonEventHandler = async () => {
    console.log("The email is: ", email);
    console.log("The password is: ", password);

    if (
      email !== undefined &&
      password !== undefined &&
      email !== "" &&
      password !== ""
    ) {
      let response:any = {};
      try {
        response = await axios.post(`${variables.baseUrl}/user/get-user`, { 
          email: email, 
          password: password 
        });
        console.log("The response is: ", response);
        if(response.data.status === "success"){
          notify_success(response.data.message)
        }
        localStorage.setItem('access_token', response.data.access_token);
        navigate('/');
      } catch(err){
        if(err instanceof AxiosError){
          console.log(err.response?.data);
          notify_error(err.response?.data.message);
        } else {
          console.log(err);
        }
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-[100vh] dark:bg-[#222] bg-white dark:text-white">
      <div className="login wrap w-[30%] h-[60%] max-sm:w-[90%] max-md:w-[60%] max-lg:w-[50%] max-xl:w-[40%] max-sm:h-[70%] bg-[#2c2c2c] p-[47px] max-sm:p-[15px] max-md:p-[20px] max-lg:p-[25px] max-xl:p-[40px] pb-[25px] rounded-[70px] items-center font-bold flex flex-col justify-around">
        <h1 className="text-center text-[40px] max-sm:text-[25px] text-[#0369a1]">Sign In</h1>
        <div className="w-[90%] h-[50%] max-sm:h-[80%] max-md:h-[75%] ml-auto mr-auto p-[15px] flex flex-col justify-around items-end">
          <TextField
            id="email-id"
            label="Email"
            color="primary"
            variant="standard"
            className="w-full p-[8px] mb-[50px]"
            onChange={handleChangeEmail}
            value={email}
          />
          <TextField
            id="password"
            label="Password"
            variant="standard"
            type="password"
            className="w-full p-[8px] mb-[15px]"
            onChange={handleChangePassword}
            value={password}
          />
          <a className="text-[12px] cursor-pointer text-[#0369a1]" href="#" onClick={forgot_password}>
            Forgot Password?
          </a>
        </div>
        <div className="w-[90%] h-[20%] ml-auto mr-auto flex flex-col items-center justify-center">
          <Button
            sx={{
              background: "#008cff",
              borderRadius: 50,
              color: "#ccc",
              backgroundColor: '#0369a1',
              ":hover": { backgroundColor: "#0369a1" },
            }}
            className="w-[60%]"
            variant="contained"
            onClick={loginButtonEventHandler}
          >
            Sign In
          </Button>
        </div>
        <div className="w-full h-[30%] flex flex-col items-center justify-around">
          <p className="text-[10px] text-center text-[#71717a]">
            Or Sign in with
          </p>
          <ThirdPartyLogin />
        </div>
      </div>
    </div>
  );
}
