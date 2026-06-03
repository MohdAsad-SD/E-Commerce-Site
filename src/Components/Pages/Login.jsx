import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({login,setlogin}) => {
  const [newacc, setnewacc] = useState(false);
  
  const [name,setname]=useState("");
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const navigate=useNavigate();
    const handlesubmit=(e)=>{
        e.preventDefault();
        if(newacc){
          const users=JSON.parse(localStorage.getItem("users"))||[];

          const exist=users.find((u)=>
            u.email===email
          );
          if(exist){
            alert("User Already Exist");
            return;
          }
          users.push({
            name,
            email,
            password
          });
          localStorage.setItem("users",JSON.stringify(users));
          alert("Account Created");
        }
        else{
          const users=JSON.parse(localStorage.getItem("users"))||[];
          const exist2=users.find(
            (u)=>
              u.email===email&&u.password===password
          );
          if(exist2){
            setlogin(true);
            alert("Login Success");
            navigate('/');
          }
          else{
            alert("Invalid Email or Password");
          }
        }
    };
  return (
    <div className="flex flex-col justify-center items-center md:px-15 px-4 mt-5">
      <div className="md:w-[30%] w-full flex flex-col ">
        <div className="flex justify-center items-center gap-2">
          <h1 className="text-3xl text-gray-700 font-semibold">Login</h1>
          <p className="w-11 bg-gray-700 h-[2px]"></p>
        </div>
        <form onSubmit={handlesubmit} className="flex flex-col gap-3 w-full mt-4 text-left ">
          <input
            placeholder="Name"
            required={newacc}
            value={name}
            onChange={(e)=>setname(e.target.value)}
            className={`${newacc ? "block" : "hidden"} py-3 pl-4  pr-18 border `}
            type="text"
          />
          <input
            placeholder="Email"
            className="pr-18 pl-4 py-3  border"
            type="email"
            onChange={(e)=>setemail(e.target.value)}
            value={email}
            required
          />
          <input
            placeholder="Password"
            className="pr-18 pl-4  py-3 border"
            type="password"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            required
          />
          <div className="flex justify-between w-full  text-gray-800">
          <p className="cursor-pointer">Forget your password?</p>
          <p className="cursor-pointer" onClick={() => setnewacc(!newacc)}>
            {newacc ? "Already have an account?" : "Create account"}
          </p>
        </div>
        <button className="p-3 mt-1 cursor-pointer bg-black text-white w-1/2 self-center" type="submit">{newacc ? "Sign Up":"Login"}</button>
        </form>
        
      </div>
    </div>
  );
};

export default Login;
