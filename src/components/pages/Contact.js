
import "../styling/Contact.css"
// import emailjs from "@emailjs/browser";
// import {useState} from 'react';
// import {useRef} from 'react';



function Contact() {
    // <Contact/>

    // const form = useRef();
    // const [showForm, setShowForm] = useState(true);
   
    //  const handleSubmit = (e) => {
    //    e.preventDefault();
   
    //    emailjs
    //      .sendForm(
    //        "service ID",
    //        "template_jg7l49p",
    //        form.current,
    //        "private key"
    //      )
    //      .then(
    //        (result) => {
    //          console.log(result.text);
    //        },
    //        (error) => {
    //          console.log(error.text);
    //        }
    //      );
   
    //    clicked();
    //  };
   
    //  const clicked = () => setShowForm(false);


  return (
    <div className='contact'>
  
    <h3>Get in touch</h3>  
   <div className='contact-form'>
<h2>Contact Us</h2>
<form action="mailto:wendley.saurel16@allisonacademy.com" method="get" enctype="text/plain"
// ref={form} onSubmit={handleSubmit} /*method="post"*/ target="blank">
>

  <div className='form-group'>
  
    <label htmlFor='name'>Name</label>
    <input type="text" id='name' name='name' required  placeholder='Add your name '></input>
    </div>

   <div className='form-group'>
   <label htmlFor='email'>Email</label>
    <input type="text" id='email' name='email' required placeholder='Add Your  Email'></input>
    </div>

    <div className='form-group'>
    <label htmlFor='message'>Message</label>
    <input id='message' name='message' required placeholder='Message Goes Here '></input>

    <button type='submit'>Submit</button>

   </div>
</form>
   
    <div className="sentForm">
      Thanks for your message
    </div>
    
    
   
</div>
</div>
  )
  
}
 
export default Contact;
