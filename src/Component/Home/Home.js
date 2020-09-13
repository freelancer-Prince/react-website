import React from 'react';
import './Home.css'
import { NavLink } from 'react-router-dom';
import img from '../../images/bbd681bcd96c64917912828e02a4ce7f (1).png'
const Home = () => {
    return (
    <>
        <section id="header" className="d-flex align-items-center ">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>Hello Welcome <br/> I am <strong className="brand-name">Md Sajid</strong></h1>
                            <h2 className="my-2">We are the team of talented developer making websites</h2>
                            <div className="mt-2">
                                 <NavLink className="btn-get-started" to="/service">Get Started</NavLink> 
                            </div>
                        </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={img} className="img-fluid animated"  alt="home img"/>
                    </div>
                    </div>
                    </div>
                </div>                
            </div>
        </section>
    </>
    );
};

export default Home;