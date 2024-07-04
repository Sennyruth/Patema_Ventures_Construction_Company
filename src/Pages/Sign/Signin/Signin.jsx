
import {useFormik} from "formik"
import * as Yup from "yup"
import { Link } from "react-router-dom"

function Signin() {
  const validationschema = Yup.object ({
    firstname:Yup.string().required("firstname is required")
    .min(4,"Firstname should not be less than 4 characters")
    .max(10,"Firstname should not be more than 10 characters")
    .matches(/^[a-zA-Z]+$/,"Firstname should contain only alphabets"),

    lastname:Yup.string().required("lastname is required")
    .min(4,"Lastname should not be less than 4 characters")
    .max(10,"Lastname should not be more than 10 characters")
    .matches(/^[a-zA-Z]+$/,"Lastname should contain only alphabets"),

    email:Yup.string().required("email is required")
    .email("Invalid email format"),

    password:Yup.string().required("password is required")
    .min(8,"Password should not be less than 8 characters")
    .max(15,"Password should not be more than 15 characters")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/,"Password should contain atleast one uppercase,one lowercase,one digit and one special character"),
    

  })

  const formik = useFormik({
    initialValues: {
      firstname:"",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: ""
      },
      onSubmit: (formState) => {
        console.log(formState)
        },
        validationSchema: validationschema
  })
  
  console.log(formik.values);
  return (
    <div className="form-maincontainer">
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-container">
          <div className="firstname">
          <label htmlFor="name">FirstName</label><br />
         <input type="text"  id="name" placeholder="Enter your name" name="firstname" value ={formik.values.firstname} onChange ={formik.handleChange} onBlur={formik.handleBlur}/>
         <br />
         {formik.errors.firstname && formik.touched.firstname ? <div className="error">{formik.errors.firstname}</div> : null}

        </div>
         
         
<div className="lastname">
<label htmlFor="lname">LastName</label><br />
         <input type="text"  id="lname" placeholder="Enter your name" name="lastname" value ={formik.values.lastname}  onChange ={formik.handleChange} onBlur={formik.handleBlur} /><br />
         {formik.errors.lastname && formik.touched.lastname ? <div className="error">{formik.errors.lastname}</div> : null}


</div>
         <div className="email">
         <label htmlFor="email">Email</label><br />
         <input type="email"  id="email" placeholder="Enter your email" name="email" value ={formik.values.email} onChange ={formik.handleChange} onBlur={formik.handleBlur}/><br />
         {formik.errors.email && formik.touched.email ? <div className="error">{formik.errors.email}</div> : null}


         </div>
         <div className="pass">
         <label htmlFor="password">Password</label><br />
         <input type="password"  id="password" placeholder="Enter your password" name="password"value ={formik.values.password} onChange ={formik.handleChange} onBlur={formik.handleBlur}/><br />
         {formik.errors.password && formik.touched.password ? <div className="error">{formik.errors.password}</div>:null}


         </div>
         {/* <div className="password">
         <label htmlFor="password">Confirm Password</label><br />
         <input type="password"  id="password" placeholder="Enter your password" name="confirmpassword"value ={formik.values.confirmpassword}  onChange ={formik.handleChange} onBlur={formik.handleBlur}/><br />
         {formik.errors.confirmpassword && formik.touched.confirmpassword ? <div className="error">{formik.errors.confirmpassword}</div> : null}


         </div> */}
         
         <button type="submit" className="form-btn">Register</button>
         <p className="formtext">Dont have an account? <Link to="/sign up">Sign Up</Link></p>

         
        </div>
      </form>
    </div>
  )
}

export default Signin;
