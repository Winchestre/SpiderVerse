import { SigninForm, AuthCard } from "@/components/Auth"
import logomark from '../../assets/logomark.png';


const Login = () => {
  return (
    <AuthCard title="Welcome Back👋" subtitle="Please login here" logo={logomark}>
      <SigninForm />
    </AuthCard>
  )
}

export default Login