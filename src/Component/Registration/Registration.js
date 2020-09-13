import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Form } from 'react-bootstrap';

const Registration = () => {
    const [data, setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        msg:"",
    });
    const InputEvent =(event) =>{
        const {name, value} =event.target;
        setData((preVal) =>{
            return{
                ...preVal,
                [name]: value,
            };
        });
    };

    const formSubmit=(e)=> {
        e.preventDefault();
        alert(`My Name is ${data.fullname}. My Mobile number is ${data.phone}. My Email address is ${data.email}. Here is what I want to say ${data.msg}`)
    };
    

    return (
        <>
        <div className="my-5">
            <h1 className="text-center">Registration</h1>
        </div>
        <div className="container contact_div"> 
             <div className="row">
                 <div className="col-md-6 col-10 mx-auto">
             <form onSubmit={formSubmit}>
                 <div class="mb-3">
             <label for="exampleFormControlInput1" class="form-label">Your Full Name</label>
             <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name..." name="fullname" value={data.fullname} onChange={InputEvent} />
             </div>
             
             <div class="mb-3">
             <label for="exampleFormControlInput1" class="form-label">Your Phone number</label>
             <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter your phone number" name="phone" value={data.phone} onChange={InputEvent} />
             </div>
             
             <div class="mb-3">
             <label for="exampleFormControlInput1" class="form-label">Your email address</label>
             <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your email" name="email" value={data.email} onChange={InputEvent} />
             </div>
 
             <Form.Group className="mt-4 mb-4" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label=" I accept the Terms of Use & Privacy Policy" />
            </Form.Group>
             <div className="mt-2">
                <button className="btn-get-started" type="submit" > Register Now</button> 
            </div>
             </form>
             </div>
             </div>
        </div> 
        </>
    );
};

export default Registration;