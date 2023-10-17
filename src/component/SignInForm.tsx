/* eslint-disable no-unsafe-optional-chaining */
import * as React from 'react';

import { Button, Input } from 'antd';





export function SignInForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
//   const [login] = useLoginMutation();
//   const dispatch = useAppDispatch();
//   const navigate=useNavigate()

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setIsLoading(true);

    // try {
    // //   const response = await login({ data: { email, password } });
      
    //   if ('data' in response) {
    //     const { token } = response?.data?.token;
    //     localStorage.setItem('token', token);
    //     // dispatch(loginSuccess(response.data));
    //  toast.success('Login Successful');
    //     navigate('/')
    //   } else {
    //     toast.error('Login Failed'); 
    //     throw new Error('Login failed');
    //   }
    // } catch (error) {
    // //   dispatch(loginFailure());
    //   toast(
    //     'Login Failed',
    //   ); 
    // } finally {
    //   setIsLoading(false);
    // }
  };
  
  return (
    <div>
      <form onSubmit={onSubmit}>
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
          <Button className='bg-blue-400 text-white font-bold' disabled={isLoading}>
            {isLoading && <p>Loading</p>}
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}

