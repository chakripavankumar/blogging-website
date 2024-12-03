import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"

const SignIn = () => {
  return (
    <div className=" grid grid-cols-2 text-center">
       
           <div>
         <Auth type="SignIn"/>
           </div>
           <div className="hidden lg:block">
            <Quote/>
           </div>
            </div>
  )
}

export default SignIn
