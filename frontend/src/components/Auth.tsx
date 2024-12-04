import { SignupInput} from "common-medium-pavan";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {BACKEND_URL}from "../Config"

 export const Auth=({type} :{ type :"SignUp" | "SignIn"} ) => {
    const navigate= useNavigate()
    const [PostInputs , setPostInputs]= useState <SignupInput>({
        name : "",
        username : "",
        password : ""
    });

    async function sendRequest (){
        try {
          const responce =  await axios.post(`${BACKEND_URL}/api/v1/user/${type === "SignUp" ? "signup" : "SignIn"}`, PostInputs);
            const jwt = responce.data;
            localStorage.setItem("token" , jwt);
            navigate("/blogs")
        } catch (error) {
            alert("Error while signing up" + error)
        }
     
     }
    return <div className="h-screen flex justify-center flex-col">
    <div className=" flex justify-center">
        <div>
            <div className="px-10">
            <div className="font-extrabold text-3xl">
      Create an account
   </div>
         
   <div className="text-slate-500 ">
   {type == "SignIn" ? "Don't have an account?" : " Already have an account?"}
     <Link className="underline pl-2"  to={ type=== "SignIn" ? "/signup" : "/signin"}>
    { type === "SignIn" ? "SignUp" : "SignIn"}
     </Link>
     </div>
   </div>
 
   <div className="pt-8">
   { type == "SignUp" ?<LabeledInput  label="name" placeholder="pavan" onchange={(e)=>{
        setPostInputs({
            ...PostInputs,
            name:e.target.value
        })
    }}/> : null}
      <LabeledInput  label="username" placeholder="pavan@gmail.com" onchange={(e)=>{
        setPostInputs({
            ...PostInputs,
            username:e.target.value
        })
    }}/>
    <LabeledInput  label="Password"  type= "password" placeholder="*******" onchange={(e)=>{
        setPostInputs({
            ...PostInputs,
            password:e.target.value
        })
    }}/>
 <button type="button" onClick={sendRequest}
 className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full mt-3">
    {type== "SignUp" ? "SignUp" : "SignIn"}</button>

   </div>
</div>
</div>
</div>
 }

 interface LabledInputTypes {
    label :string;
    placeholder:string;
    onchange : (e : ChangeEvent<HTMLInputElement>) => void;
    type?: string;
 }

 function LabeledInput ( {label,placeholder,onchange,type} : LabledInputTypes){
    return (
        <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-2">{label}</label>
        <input type={ type||"text"} onChange={onchange} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
        placeholder={placeholder} required />

        </div>
    )
 }
