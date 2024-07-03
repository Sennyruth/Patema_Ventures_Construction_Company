import { IoHome } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import "./Contacts.css"
function Contacts() {
  return (
    <div>
      <div className="contact-hero">
        <div className="contact-hero-text">
          <h1 className="maintitle">Contact Us</h1>
        <p>Have a project in mind? Reach out to us today for expert guidance,<br></br> personalized solutions, and exceptional construction services.</p>
        </div>
      </div>
      
        <div className="contact-container-text">
          <h2>Get In Touch</h2>
        </div>
        <div className="contact-cards">
        <div className="contact-container-visit">
        <div className="contact-icons"><IoHome /></div>
          <h3>VISIT US</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam modi impedit in. Officia autem, sapiente alias laudantium ratione nulla! Neque.</p>
          <p className="cont-text">Address: 1234 Main St, Anytown, CA 12345</p>
          

        </div>
        <div className="contact-container-visit">
        <div className="contact-icons"><IoCall /></div>
          <h3>CALL US</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam minus neque fuga dicta eaque natus distinctio ab molestias molestiae!</p>
          <p className="cont-text">Phone: (+254) 456-7890</p>

        </div>
        <div className="contact-container-visit">
        <div className="contact-icons"><MdEmail /></div>
          <h3>CONTACT US</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quaerat harum minima nesciunt ratione recusandae quae nisi distinctio, adipisci eveniet.</p>
       <p className="cont-text">Email: info@patemaventures.com</p>

        </div>

        </div>
        <div className="map">
          <h2 className="maptitle">Find Us on Google Maps</h2>
          </div>
          <div className="location-form">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.3586905214!2d36.682579697185325!3d-1.3028602801147329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1719995632940!5m2!1sen!2ske" width="600" height="450"></iframe>
        
        
        
        
 <div className="form-containers">
 <h2 className="newsletter-title">Book a Service</h2>
 <form className="newsletter-form-container">
           <label htmlFor="fname">FirstName</label><br />
           <input type="text" id="fname" name="firstname" placeholder="Your firstname"/><br />
           <label htmlFor="lname">LastName</label><br />
           <input type="text" id="lname" name="lastname" placeholder="Your lastname"/><br />
           <label htmlFor="email">Email</label><br />
           <input type="text" id="email" name="email" placeholder="Your email address"/><br />
           
           <label htmlFor="lname">Service</label><br />
           <select name="" id="" className="select">
             <option value="monthly">Architectural design</option>
             <option value="weekly">Rennovations</option>
             <option value="weekly">Interior design</option>
             <option value="weekly">Building Construction</option>
             <option value="weekly">Road construction</option>
           </select><br />
           <button type="submit"className="form-btn">Submit</button>
           </form>
 </div>
 
         
           
       
       
        
         </div>
         
       </div>
       
          
       
    
  )
}

export default Contacts
