import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from ".././styles/Styles";
import { Link, useNavigate } from "react-router-dom";
import { server } from "../server";
import axios from "axios";
import { toast } from "react-toastify";

const LogData = () => {
  // const [email, setEmail] = useState("");
  // const [name, setName] = useState("")
  const [state,setState] = useState({
    password: '',
    email: ''
  })
  // const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate()

// console.log(state);
// console.log(avatar);
  
  

   
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
    console.log(state);
  }
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const config = {headers: {"Content-type":"application/json","Accept":"application/json"}};
    
    
    console.log(state);
    axios.post(`${server}/user/login-user`, state, config,{withCredentials: true}).then((res) =>{
      console.log(res.data);
      let ttt = res.data;
      toast.success(ttt.message,{position:"bottom-left",theme:"colored"})
      localStorage.setItem("token",ttt.token)
      navigate("/")
      // window.location.reload(true);
      console.log(ttt);
    }).catch((err) =>{
      console.log(err.response.data);
      let fff = err.response.data;
      toast.error(fff,{position: "top-right",theme: "dark"});
    })
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login to your account
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  type={"text"}
                  name="email"
                  placeholder="enter email"
                  value={state.email}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  placeholder="enter password"
                  value={state.password}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>

            <div className={`${styles.noramlFlex} justify-between`}>
              <div className={`${styles.noramlFlex}`}>
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href=".forgot-password"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full h-(40px) flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                submit
              </button>
            </div>
            <div className={`${styles.noramlFlex}w-full`}>
              <h4>Not have any account</h4>
              <Link to="/sign-up" className="text-blue-600 pl-2">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogData;
