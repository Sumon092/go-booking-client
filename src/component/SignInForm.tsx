import { Input } from "antd";
import { useState } from "react";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { useNavigate } from "react-router-dom";
import { loginFailure, loginSuccess } from "../redux/features/auth/authSlice";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

export function SignInForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await login({ data: { email, password } });

      if ("data" in response) {
        const { data } = response.data;
        localStorage.setItem("accessToken", data);
        dispatch(loginSuccess(response.data));
        toast.success("Login Successful");
        navigate("/");
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      dispatch(loginFailure());
      toast.error("Login Failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      <div>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                id="password"
                placeholder="your password"
                type="password"
                autoCapitalize="none"
                autoComplete="password"
                disabled={isLoading}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Input
              type="submit"
              value="Login"
              className="bg-blue-400 font-bold text-white"
            />
          </div>
        </form>
      </div>
    </>
  );
}
