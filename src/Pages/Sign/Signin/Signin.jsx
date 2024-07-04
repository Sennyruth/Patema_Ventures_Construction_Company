

function Signin() {
  return (
    <div className="form-maincontainer">
      
    <h1>Login</h1>
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

         <button type="submit" className="form-btn">Login</button>
         <p className="formtext">Dont have an account? <a href="http://localhost:5174/sign%20up">Sign Up</a></p>


         
        </div>
      </form> 
    </div>
  )
}

export default Signin;
