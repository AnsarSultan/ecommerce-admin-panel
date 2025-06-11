import {useNavigate,  Link } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function SignUp() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User created successfully!");
      navigate("/sign-in");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center p-4">
      <div className="bg-white lg:w-[500px] shadow-lg rounded-md w-full flex flex-col lg:p-6 p-3">
        <h2 className="text-xl font-semibold pl-3">Register Yourself</h2>
        <div className="w-full flex flex-col items-center p-3 gap-3">
          <input type="text" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)}  className="w-full px-3 py-2 border-1 border-gray-300 rounded-md"/>
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border-1 border-gray-300 rounded-md"/>
          
          <button onClick={handleSignup} className="w-full bg-blue-600 text-white py-2 font-semibold rounded-md hover:bg-blue-900 cursor-pointer">Login</button>
         <div className="text-sm flex gap-2">
         <h2>Already have an Account?</h2>
         <Link to="/sign-in" className="text-blue-600 cursor-pointer hover:underline">Login</Link>
         </div>
        </div>
      </div>
    </div>
  );
}
