import React, { useState } from 'react';

const Contact = () => {
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
           <h1 className="text-center">Contact US</h1>
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

            <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent}></textarea>
            </div>
            <div className="col-12">
                <button className="btn btn-primary" type="submit"> Submit form</button>
            </div>
            </form>
            </div>
            </div>
       </div> 
       </>
    );
};

export default Contact;