import React from 'react'
import { useState } from 'react';
import "./Forminfo.css"


const Forminfo = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [eduction, setEduction] = useState("");
    const [email, setEmail] = useState("");
    const [exp, setExp] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(fname,lname,eduction,email,exp,phone,address);     
       
    }

  return (
    <>
   <div className="container hg">
    <form onSubmit={handleSubmit} className="form-group" >
  
      First Name:
       <input type="text" className="form-control"  placeholder="Enter Your First Name"
         value={fname}
         onChange={(e) => setFname(e.target.value)}/>
       Last Name:
       <input  type="text" className="form-control"  placeholder="Enter Your Last Name"
          value={lname}
          onChange={(e) => setLname(e.target.value)}/>
        Eduction:
       <input  type="text" className="form-control"  placeholder="Enter Your Education"
          value={eduction}
          onChange={(e) => setEduction(e.target.value)}/>
         Email:
       <input  type="text" className="form-control"  placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
           Phone:
       <input  type="text" className="form-control"  placeholder="Enter Your Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}/>
           Experiance:
       <input  type="text" className="form-control" placeholder="Enter Your Experiance"
          value={exp}
          onChange={(e) => setExp(e.target.value)}/>
           Address:
       <input  type="text" className="form-control"  placeholder="Enter Your Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}/><br/>


       <input type="submit" value="Submit"  className="btn btn-success"/>

       </form>
    </div>
   
    </>
  )

}

export default Forminfo