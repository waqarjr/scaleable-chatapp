"use client"

import { useState } from "react";

import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";
import toast from "react-hot-toast";

export const Signup = () => {
  const [password, setPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  })


  const validationForm = () => {
    if (!formData.fullname.trim()) return toast.error("Fullname is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Email is invalid");
    if (!formData.password.trim()) return toast.error("Password is required")
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters long");
    return true;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const suceed = validationForm();
    if (suceed) console.log(formData);
  };

    return (
        <>
            <form onSubmit={handleSubmit} className="grid gap-6 ">

            <div className="grid gap-3" >
              <span className="text-white font-bold " >Name</span>
              <div className="flex items-center justify-center border rounded-sm">
                <User className="size-6 mx-1" />
                <input type="text" placeholder="Full Name" className="input border-0 my-2 w-full bg-base-200  focus:outline-none "
                  value={formData.fullname} onChange={(e) => setFormData({ ...formData, fullname: e.target.value })} />
              </div>
            </div>

            <div className="grid gap-3" >
              <span className="text-white font-bold " >Email</span>
              <div className="flex items-center justify-center border rounded-sm" >
                <Mail className="size-6 mx-1" />
                <input type="email" placeholder="You@exemple.com" className="input border-0 my-2 w-full bg-base-200  focus:outline-none "
                  value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              </div>
            </div>

            <div className="grid gap-3" >
              <span className="text-secondary font-bold " >Password</span>
              <div className="flex items-center justify-center border border-secondary rounded-sm " >
                <Lock className="size-6 mx-1 text-secondary my-2" />
                <input type={password ? "text" : "password"} placeholder="******" className="input  border-0 px-2 w-full bg-gray-700 text-secondary focus:outline-none"
                  value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                <button type="button" className="hover:cursor-pointer text-secondary" onClick={() => setPassword(!password)} > {password ? <Eye className="size-6 mx-1" /> : <EyeOff className="size-6 mx-1" />} </button>
              </div>
            </div>

            {/* Submit button */}
            <button type="submit" className="btn btn-primary w-full" >Sign up</button>

          </form>            
        </>
    )
}
export default Signup;