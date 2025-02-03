import { login, signup } from './actions'
import Button from '@/components/button';

export default function LoginPage() {
  return (
    <div className='@container'>
      <div className='flex flex-col'>
        <label>Sign in to zen.</label>
        <form className='flex flex-col'>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" required />
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" required />
          <Button formAction={login}>Log in</Button>
          <Button formAction={signup}>Sign up</Button>
        </form>
      </div>
    </div>
  )
}