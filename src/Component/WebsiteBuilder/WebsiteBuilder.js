import React from 'react';
import { Card } from 'react-bootstrap';
import cvImg from '../../images/IMG_6072_3.png'
import { NavLink } from 'react-router-dom';
const WebsiteBuilder = () => {
    return (
        <>
        <section  className="d-flex align-items-center">
            <div className="container mt-5 ">
                <div className="row">
                    
                    <Card.Header>Website Builder</Card.Header>
                    <Card>
                    <div className="col-md-12  mx-auto text-center">
                    <Card.Body>
                        <img src={cvImg} alt=""/>
                    <Card.Title><h2> My name is <strong className="brand-name">Md Sajid</strong></h2></Card.Title>
                    <Card.Text>
                    I am a web designer and developer. I have skill 
                    </Card.Text>
                    <div className="mt-2">
                        <NavLink  className="btn-get-started"to="/downlodeCV"> Downlode CV</NavLink> 
                    </div>
                    </Card.Body>
                    </div>
                    </Card>
                </div>
            </div>
            </section>
        </>
    );
};

export default WebsiteBuilder;