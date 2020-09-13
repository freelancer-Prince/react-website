import React from 'react';
import { Card } from 'react-bootstrap';
import CvImg from '../../images/IMG_6072_3 (5).png';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
const DownlodeCV = () => {
    return (
        <>
        <section  className="d-flex align-items-center ">
            <div className="container mt-5 ">
                <div className="row">
                    <div className="col-12">
                    <Card.Header>This is my CV</Card.Header>
                    <Card className="bg-light mb-5" >
                        <div className="row">
                    <div className=" col-md-4 pt-4 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center  ">
                        <div className="pt-5 pb-5">
                            <img src={CvImg} alt=""/>
                            
                        <div className="mt-2 py-lg-5">
                            <br/>
                            <h2>CONTACT</h2>
                            <br/>
                            <h5><strong>Phone</strong></h5>
                            <p> <PhoneIcon /> 01715280200</p>
                            <p> <PhoneIcon /> 01927865123</p>
                            <br/>
                            <h5><strong>Email</strong></h5>
                            <p> <EmailIcon /> msshajid200@gmail.com</p>
                            <p> <EmailIcon /> shahidrahaman706@gmail.com</p>
                            <br/>
                            <h5><strong>Social</strong></h5>
                            <p> <EmailIcon /> web.facebook.com/mdsajidrahman19266</p>
                            <p> <EmailIcon /> linkedin.com/mdsajidrahman19266</p>
                        </div>
                        </div>
                       
                        
                    </div>
                    <div className="col-md-8 order-2 order-lg-2">
                    <div className="pt-5 m-4 text">
                    <h1> <strong className="brand-name">Md Sajid</strong></h1>
                    <p>Web Design and Development</p>
                    <br/>
                    <h3>About Me</h3>
                    <p><strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, veritatis amet! Earum iusto molestiae est dolorum? Amet ad consequatur explicabo nesciunt, accusantium eligendi error eos quam mollitia, voluptate exercitationem asperiores ipsum iure inventore a, perferendis nobis magnam pariatur! Quo, vel.
                    </strong>
                    <br/>
                    <br/>
                     Repellendus odit ipsa maiores ea doloremque ducimus dolor quasi at blanditiis nobis aut, possimus fugit quibusdam unde est hic repudiandae facere illum? Rem, eveniet pariatur! Odit consequatur, architecto, quos animi esse veniam quia tempore eos eveniet, totam at dolores harum temporibus fugit.Sit amet consectetur adipisicing elit. Modi optio nesciunt ex ratione unde libero esse laborum, quod fuga veniam.
                    </p>
                    <br/>
                    <br/>

                    <h2>WORK EXPERIENCE</h2>
                    <br/>
                    <h5>Web Development</h5>
                    <p className="fontFamily">I am a freelancer</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo repellat dignissimos sequi recusandae vitae cupiditate quisquam error labore delectus architecto. Fugiat ea aperiam atque quidem reiciendis veniam! Amet voluptate nostrum quos corrupti. Quidem, voluptas in.</p>
                    <br/>
                    <h5>Web Design</h5>
                    <p className="fontFamily">I am a freelancer</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo repellat dignissimos sequi recusandae vitae cupiditate quisquam error labore delectus architecto. Fugiat ea aperiam atque quidem reiciendis veniam! Amet voluptate nostrum quos corrupti. Quidem, voluptas in.</p>
                    <br/>
                    <h5>Senior UI Designer</h5>
                    <p className="fontFamily">I am a freelancer</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo repellat dignissimos sequi recusandae vitae cupiditate quisquam error labore delectus architecto. Fugiat ea aperiam atque quidem reiciendis veniam! Amet voluptate nostrum quos corrupti. Quidem, voluptas in.</p>    <br/>
                    <h5>Wordpress</h5>
                    <p className="fontFamily">I am a freelancer</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo repellat dignissimos sequi recusandae vitae cupiditate quisquam error labore delectus architecto. Fugiat ea aperiam atque quidem reiciendis veniam! Amet voluptate nostrum quos corrupti. Quidem, voluptas in.</p>
                    </div> 
                    <div className="row pt-5 m-4 text">
                        <h2>SKILLS</h2>
                        
                        <div className="col-md-6">
                            <br/>
                            <p>Web Design <div className="progress"> <div style={{width:"70%"}} className="progress-bar" role="progressbar"  aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div></div></p>
                            <p>Web Development <div className="progress"> <div style={{width:"75%"}} className="progress-bar" role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div></div></p>
                            <p>Graphic Design<div className="progress"> <div style={{width:"80%"}} className="progress-bar" role="progressbar"  aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div></div></p>
                            <p>Marketing <div className="progress"> <div style={{width:"60%"}} className="progress-bar" role="progressbar"  aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div></div></p>
                            <p>UX/UI Design <div className="progress"> <div style={{width:"90%"}} className="progress-bar" role="progressbar"  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div></div></p>
                        </div>
                        <div className="col-md-6">
                            <br/>
                            <p>Branding <div className="progress"> <div style={{width:"50%"}} className="progress-bar" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div></div></p>
                            <p>UX Research <div className="progress"> <div style={{width:"45%"}} className="progress-bar" role="progressbar"  aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">45%</div></div></p>
                            <p>Prototype <div className="progress"> <div style={{width:"65%"}} className="progress-bar" role="progressbar"  aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div></div></p>
                            <p>Creativity <div className="progress"> <div style={{width:"35%"}} className="progress-bar" role="progressbar"  aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">35%</div></div></p>
                            <p>Collaborate <div className="progress"> <div style={{width:"95%"}} className="progress-bar" role="progressbar"  aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div></div></p>
                        </div>
                    </div>
                    </div>
                   
                    </div>
                    </Card>
                    </div>
                    
                </div>
            </div>
            </section>
        </>
    );
};

export default DownlodeCV;