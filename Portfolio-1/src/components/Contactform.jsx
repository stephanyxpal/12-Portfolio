import React, {useState} from 'react';
import '../style/contact.css';

function Contactform(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
       // console.log("Form Submitted");
       if (!name || !email || !message) {
            setErrorMessage('Please fill out all fields');
        } 
        else if (!validateEmail(email) ) {
          setErrorMessage('Email is invalid');
      }
        else {
            setErrorMessage('Message Sent');
            setName('');
            setEmail('');
            setMessage('');
        }
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }

    const handleInputChange = (e) => {
      const { name, value } = e.target;   
        console.log(e.target.value);
        if (name === 'name') setName(value);
    else if (name === 'email') setEmail(value);
    else if (name === 'message') setMessage(value);
       // return name === 'name' ? setName(e.target.value) : email === 'email' ? setEmail(e.target.value) : setMessage(e.target.value);
    }   

    return (
        <div className="contact-form">
            <h2> Contact Me</h2>
            <form className="form" onSubmit={handleFormSubmit}>
                <p>Name : </p>
                <input type="text" 
                 name="name"
                 value={name}
                placeholder='Your Name'  
                onChange={handleInputChange} 
                />

                <p>Email : </p>
                <input type="email" 
                 name="email"
                 value={email}
                placeholder="Email.@mail.com"
                onChange={handleInputChange}
                />

                <p>Message : </p>
                <textarea 
                 name="message"
                 value={message}
                placeholder="Your Message"
                onChange={handleInputChange}
                ></textarea>

                <button type="submit">Send</button> 
                </form>    
                {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
            
      </div>



    )

}

export default Contactform;