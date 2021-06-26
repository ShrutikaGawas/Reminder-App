import React, { useState } from "react";

function Signin() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div className="container">
      <form>
      <h1 class="login_form_"> Hello </h1>
        <div class="group">
        <input
          onChange={handleChange}
          name="fName"
          value={contact.fName}
          placeholder="First Name"
        />
        </div>
        <div class="group">
        <input
          onChange={handleChange}
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
        />  
        </div>
        <div class="group">
        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email"
        />
        </div>
        
        <button>Submit</button>
      </form>
        
  {/* <form class="login_form">
    <h1 class="login_form_">Hello</h1>
     <div class="group">
        <input
          onChange={handleChange}
          name="fName"
          value={contact.fName}
          placeholder="First Name"
        />
    </div>
     <div class="group">
        <input
          onChange={handleChange}
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
        />
    </div>
     <div class="group">
        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email"
        />
    </div>
        <button>Submit</button>
      </form> */}
  
    </div>
  );
}

export default Signin;
