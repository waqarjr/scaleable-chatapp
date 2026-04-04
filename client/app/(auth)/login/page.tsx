import { Eye, EyeOff, MessageSquare, User , Mail , Loader2 ,Lock} from "lucide-react";
// import { Link } from "next/link";
import AuthImagePattern from "@/components/AuthImagePattern";
import Signup from "@/components/authForm/Signup";

export default function Login() {
    return (
  
<div className="h-screen bg-accent flex-center ">
  <div className="grid grid-cols-2 w-full items-start ">
    
    <div className="flex flex-col items-center justify-center p-6 sm:p-12 " >
        <div className="w-full max-w-md space-y-8  p-3 group">
          {/* LoGO */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 ">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MessageSquare className="size-6 text-secondary" />
              </div>
              <h1 className="text-2xl font-bold mt-2 text-secondary">Create Account</h1>
              <p className="text-base-content/60 text-gray-600 ">Get started with your free account</p>
            </div>
          </div>
          <Signup />
          {/* sign in */}
          <div className="text-center" >
            <p className="text-base-content/60 text-gray-600 " >
              Already have an account? &nbsp;
                <span className="text-secondary hover:underline cursor-pointer " >Sign in</span>
            </p>
          </div>
        </div>
      </div>

    <div className=" mx-auto">
      <AuthImagePattern title="Welcome Back!" subtitle="Sign in to continue your conversations and catch up with your messages" />
    </div>

  </div>
</div>
  
);}   