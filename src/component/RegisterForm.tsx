import { useState } from "react";
import {  Input } from "antd";
import toast, { Toaster } from "react-hot-toast";
import { useRegisterMutation } from "../redux/features/auth/authApi";
import { useNavigate } from "react-router-dom";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function RegisterForm({ className, ...props }: { className: any }) {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [error,setError]=useState('')
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [register] = useRegisterMutation();
  const navigate = useNavigate();

  const onSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setIsLoading(true);

    try {
    if(!name){
     setError("Name is required")
      return
    }
   
    const res=  await register({ data: { name,email, password } });
    console.log(res,'res');
      toast.success("Register successful");
      navigate("/sign-in");
      setEmail("");
      setPassword("");
      setName("");
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <Toaster/>
    <div className={(className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
          <Input
              id="name"
              placeholder="Enter your name"
              type="text"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              disabled={isLoading}
              value={name}
              onChange={(e) => setName (e.target.value)}
            />
            {error && <p className="text-red-400">{error}</p>}
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
              autoComplete="off"
              autoCorrect="off"
              disabled={isLoading}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
           
          </div>
          <Input
            className="bg-blue-400 font-bold text-white"
            disabled={isLoading}
            value="Register"
            type="submit"
          />
            
        </div>
      </form>
    </div>
    </>
    
  );
}






