
import "./Sign.css"
import {useFormik} from "formik"
function Signup() {
  return (
    <div className="form-maincontainer">
      <h1>Register Here</h1>
      <form>
        <div className="form-container">
         <label htmlFor="name">FirstName</label><br />
         <input type="text"  id="name" placeholder="Enter your name"/><br />

         <label htmlFor="lname">LastName</label><br />
         <input type="text"  id="lname" placeholder="Enter your name"/><br />

         <label htmlFor="email">Email</label><br />
         <input type="email"  id="email" placeholder="Enter your email"/><br />

         <label htmlFor="password">Password</label><br />
         <input type="password"  id="password" placeholder="Enter your password"/><br />

         <label htmlFor="password">Confirm Password</label><br />
         <input type="password"  id="password" placeholder="Enter your password"/><br />

         <button type="submit" className="form-btn">Register</button>
         <p className="formtext">Already have an account? <a href="http://localhost:5174/sign%20in">Login</a></p>

         
        </div>
      </form>
    </div>
  )
}

export default Signup