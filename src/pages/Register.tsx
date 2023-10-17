import { Link } from "react-router-dom";
import SignUpImage from "../assets/images/signup.png";
import { RegisterForm } from "../component/RegisterForm";

export default function Register() {
  return (
    <>
      <div className="relative max-h-screen">
        <Link
          to="/sign-in"
          className="absolute right-4 top-4 md:right-8 md:top-8"
        >
          SignIn
        </Link>
        <div className="grid grid-cols-2">
          <div className="col-span-1 w-full">
            <img className="w-full" src={SignUpImage} alt="" />
          </div>
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Create an account
                </h1>
                <p className="text-sm text-muted-foreground">
                  Enter your email below to create your account
                </p>
              </div>
              <RegisterForm className={""} />
              <p className="px-8 text-center text-sm text-muted-foreground">
                By clicking continue, you agree to our{" "}
                <Link
                  to="/terms"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          
        </div>
      </div>
    </>
  );
}
