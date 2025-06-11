import Input from "../components/UI/Input";

export default function Login() {
  return (
    <div className="w-screen h-screen flex justify-center items-center p-4">
      <div className="bg-white lg:w-[500px] shadow-lg rounded-md w-full flex flex-col lg:p-6 p-3">
        <h2 className="text-xl font-semibold pl-3">Log in</h2>
        <div className="w-full flex flex-col items-center p-3 gap-3">
          <Input placeholder="Email Address" />
          <Input placeholder="Password" />
          <div className="w-full flex lg:flex-row flex-col justify-between text-sm">
            <h2 className="flex items-center gap-1">
              <input type="checkbox" name="" id="" /> Remember me
            </h2>
            <h2 className="text-blue-600 cursor-pointer hover:underline">Forgot Password?</h2>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 font-semibold rounded-md hover:bg-blue-900 cursor-pointer">Login</button>
         <div className="text-sm flex gap-2">
         <h2 >Don't have an account?</h2>
          <h2 className="text-blue-600 cursor-pointer hover:underline">Create an account</h2>
         </div>
        </div>
      </div>
    </div>
  );
}
