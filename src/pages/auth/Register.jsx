import { SignupForm, AuthCard } from "@/components/Auth"
import logomark from '../../assets/logomark.png';

const Register = () => {
  return (
    <AuthCard title="Welcome Back👋" subtitle="Please register here" logo={logomark}>
      <SignupForm />
    </AuthCard>
  )
}

export default Register