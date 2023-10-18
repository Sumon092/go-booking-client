
import { Link } from 'react-router-dom';

import LoginImage from '../assets/images/Login.png';
import { SignInForm } from '../component/SignInForm';


export default function SignIn() {
  return (
    <>
     <div className="relative max-h-screen">
        <Link
          to="/register"
          className="absolute right-4 top-4 md:right-8 md:top-8"
        >
          Register
        </Link>
        <div className="grid grid-cols-2">
          <div className="col-span-1 w-full">
            <img className="w-full" src={LoginImage} alt="" />
          </div>
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Login to your account
                </h1>
              </div>
              <SignInForm/>
            </div>
          
        </div>
      </div>
    </>
  );
}
