import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/Styles";
import { Link,useNavigate } from "react-router-dom";
import {RxAvatar} from "react-icons/rx";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";

const Signup = () => {
  // const [email, setEmail] = useState("");
  // const [name, setName] = useState("")
  const [state,setState] = useState({
    name: '',
    password: '',
    email: ''
  })
  // const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);  
  const navigate = useNavigate()

// console.log(state);
// console.log(avatar);
  
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  }

   
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
    console.log(state);
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
      const config = {headers: {"Content-type":"multipart/form-data","Accept":"application/json"}};
    const newForm = new FormData();

    newForm.append("file", avatar);
    newForm.append("name",state.name);
    newForm.append("email", state.email);
    newForm.append("password", state.password)
    console.log(newForm.getAll("email"));

    axios.post(`${server}/user/create-user`, newForm, config).then((res) =>{
      // console.log(res.data);
      let ttt = res.data;
      toast.success(ttt,{position:"bottom-left",theme:"colored"})
      navigate("/login")
      // console.log(res);
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
            Register as a new user
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit} >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
               Name
              </label>
              <div className="mt-1">
                <input
                  type={'text'} name='name' placeholder='enter name' value={state.name} onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

           

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  type={'text'} name='email' placeholder='enter email' value={state.email} onChange={handleChange}
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
                   placeholder='enter password' value={state.password} onChange={handleChange}
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

              <div>
                  <label htmlFor="avatar"
                  className="block text-sm font-medium text-gray-700"
                  >

                  </label>
                    <div className="mt-2 flex items-center">
                      <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                          {
                              avatar?
                              (
                                  <img src="{URL.createObjectURL(avatar)}" alt="avatar" className="h-full w-full object-cover rounded-full" />
                              ) :(
                                  <RxAvatar className="h-8 w-8"/>
                              )
                                  }
                      </span>
                      <label htmlFor="file-input"
                      className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                      >
                          <span>Upload a file</span>
                          <input
                          type="file" 
                          name="avatar" 
                          id="file-input" 
                          accept=".jpg,.jpeg,.png"
                          onChange={handleFileInputChange}
                          className="sr-only"
                          // value={state.avatar} onChange={handleChange}
                          />

                      </label>
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
                  <h4>Already have any account</h4>
                  <Link to="/login" className="text-blue-600 pl-2">
                    Sign In
                  </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
