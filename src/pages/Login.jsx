import { User } from "lucide-react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Login = () => {
const [action, setAction] = useState("Sign Up")
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [showpassword, setShowpassword] = useState(false)

 const dashboard =useNavigate();
 const handleLogin = (e) => {
  e.preventDefault();
  dashboard("/dashboard")
 };
  return (
    <div className="w-full h-fit p-12  bg-[url('./images/headsetimage.jpg')] bg-cover bg-center">
    <span className="flex justify-center items-center p-2" >
   <div className="flex flex-col gap-4 justify-center items-center h-[430px] p-3 w-[470px] rounded-[40px] border border-white backdrop-blur-[6px]">
    <div className="text-white text-[22px] font-bold pb-2">{action}</div>
    <form onSubmit={handleLogin}>
<div className="flex flex-col gap-5">
 {action=== "Login"?<div></div>:<span className="flex flex-row items-center">
    <div className="border border-white w-[390px] h-10 py-2 px-3 rounded-[40px] text-white"> 
   <input value={username}
    onChange={(e) => setUsername(e.target.value) }
    className="outline-none bg-transparent h-[100%] w-[95%] placeholder-white" type="text" placeholder="Username" required />
  </div>
   <User className="absolute right-[10%] text-[#ff0000]" /> </span>}
 <span className="flex flex-row items-center ">
   <div  value={email}
    onChange={(e) => setEmail(e.target.value) }
   className="border border-white w-[390px] h-10 py-2 px-3 rounded-[40px] text-white">
    <input className="outline-none bg-transparent h-[100%] w-[95%] placeholder-white" type="email" placeholder="Email" required />
   </div>
   <MdEmail className="absolute right-[10%] text-[#ff0000]" />
 </span>
 <span className="flex flex-row items-center">
  <div className="border border-white w-[390px] h-10 py-2 px-3 rounded-[40px] text-white">
   <input  value={password}
   type={showpassword ? "text" : "password"}
   onChange={(e) => setPassword(e.target.value) }
   className="outline-none bg-transparent w-[95%] h-[100%] placeholder-white" placeholder="Password" required />
   </div>
   <div className="absolute right-[10%] text-[#ff0000] cursor-pointer" onClick={() => setShowpassword(!showpassword)}> {showpassword ? <FaEyeSlash  /> : <FaEye  />}</div>
 </span> 
 {action=== "Sign Up"?<div></div>:<p className="text-white cursor-pointer flex justify-end">Forget Password?</p>}
</div>
<span className="flex flex-col gap-2 ">
{action==="Login"?<div></div>:<button className="border text-[#ff0000] font-bold rounded-[40px] p-1 w-[390px]">Sign Up</button>}
{action==="Sign Up"?<div></div>:<button className="border  font-bold text-[#ff0000] rounded-[40px] p-1 w-[390px]" >Login</button>}
{action==="Sign Up"?<div></div>:<p className="text-white flex gap-3 ">Don't Have Account?<span className={`font-bold cursor-pointer ${action==="Sign Up"?"submit":"Don't"}`}   onClick={() => setAction("Sign Up")}>Sign Up</span></p>}
{action==="Login"?<div></div>:<p className="text-white flex gap-3 ">Already Have Account?<span className={`font-bold cursor-pointer ${action==="Sign Up"?"submit":"Don't"}`}   onClick={() => setAction("Login")}>Login</span></p>}
</span>
</form>
</div>
</span>
</div>
  )
}

export default Login;