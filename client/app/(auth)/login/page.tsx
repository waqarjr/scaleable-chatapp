import { Eye, EyeOff, MessageSquare, User , Mail , Loader2 ,Lock} from "lucide-react";
// import { Link } from "next/link";
import AuthImagePattern from "@/components/AuthImagePattern";
import toast from "react-hot-toast";

export default function Login() {
    return (
          <div className="min-h-screen grid lg:grid-cols-2 " >
    {/* Left side  */}
  <div className="flex flex-col items-center justify-center p-6 sm:p-12 " >
    <div className="w-full max-w-md space-y-8   p-3 group">
      {/* LoGO */}
      <div className="text-center mb-8">
          <div className="flex flex-col items-center gap-2 ">
            <div className="size-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
              <MessageSquare className="size-6"  />
            </div>
            <h1 className="text-2xl font-bold mt-2 text-white">Welcome Back</h1>
            <p className="text-base-content/60">Sign in to your account</p>
          </div>
      </div>
      <form  className="grid gap-6">

        <div className="grid gap-3" >
          <span className="text-white font-bold " >Name</span>
          <div className="flex items-center justify-center border rounded-sm" >
            <Mail className="size-6 mx-1" />
            <input value="" type="email" placeholder="You@exemple.com" className="input border-0 w-full bg-base-200  focus:outline-none "
            />
          </div>
        </div>

        <div className="grid gap-3" >
          <span className="text-white" >Password</span>
          <div className="flex items-center justify-center border rounded-sm" >
            <Lock className="size-6 mx-1" />
            <input   placeholder="******" className="input border-0 w-full bg-base-200  focus:outline-none"
            value="" />
            <button type="button" className="hover:cursor-pointer"  >  </button>
          </div>  
        </div>
          {/* Submit button */}
          <button type="submit" className="btn btn-seconda w-full"  >Sign in</button>
      </form>
      {/* sign in */}
    <div className="text-center" >
        <p className="text-base-content/60" >
        Don't have a account? &nbsp;
             
        </p>       
    </div>
    </div>
  </div>
    {/* Right side  */}
    <AuthImagePattern title="Welcome back !"
    subtitle="Sign in to continue your conversations and cauth up with your messages"
    />
</div>
    );
}   