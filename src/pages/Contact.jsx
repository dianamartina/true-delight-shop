import React from 'react'
import Layout from '../components/Layout';
import { ReactComponent as House } from '../assets/icons/house.svg';
import { ReactComponent as Email } from '../assets/icons/mail.svg';
import { ReactComponent as Phone } from '../assets/icons/phone.svg';
import { ReactComponent as Web } from '../assets/icons/web.svg';
import './Contact.css';

function Contact() {
    return (
        <div>
            <Layout>               
                <div className="container mb-5">                    
                    <div className="home-title"> 
                        <p className="home-title-h2-p">we are waiting for you</p>
                        <h2 className="home-title-h2 h1">Contact</h2>
                    </div>
                    <div className="row text-left ">
                        <div className=" col-lg-4 d-flex justify-content-center">
                            <div className="table-hours border-table">
                                <table class=" table border-table text-center home-text ">
                                <tr>
                                    <td>Monday</td>
                                    <td>09:00 - 21:00h</td>
                                </tr>
                                <tr>
                                    <td>Tuesday</td>
                                    <td>09:00 - 21:00h</td>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <td>09:00 - 21:00h</td>
                                </tr>
                                <tr>
                                    <td>Thursday</td>
                                    <td>09:00 - 21:00h</td>
                                </tr>
                                <tr>
                                    <td>Friday</td>
                                    <td>09:00 - 21:00h</td>
                                </tr>
                                <tr>
                                    <td>Saturday</td>
                                    <td>10:00 - 21:00h</td>
                                </tr>
                                <tr>
                                    <td>Sunday</td>
                                    <td>10:00 - 19:00h
</td>
                                </tr>
                            </table>
                            </div>
                            
                        </div>
                        <div className="col-lg-8 home-text"> 
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste itaque impedit nostrum eveniet. Rem earum, eius eligendi cumque alias quis possimus consequatur. Nulla quaerat fugiat neque praesentium labore iste modi voluptates in enim voluptatibus fugit provident, laboriosam, corporis repudiandae. Itaque consequatur consequuntur consectetur officiis maiores aspernatur, sequi laudantium voluptates minima!
                            </p>
                            <div className=" d-flex flex-column text-center contact-info">
                                <div className="mb-5 ">
                                    <span className="mr-5">
                                        <span  className="adress-icon mr-1"><House /></span>
                                        Lorem ipsum dolor sit.1
                                    </span>

                                    <span >
                                        <span  className="adress-icon mr-1"><Email /></span>
                                        Lorem ipsum dolor sit.1
                                    </span>
                                </div>
                                <div className=" ">
                                <span className="mr-5">
                                        <span  className="adress-icon mr-1"><Phone /></span>
                                        Lorem ipsum dolor sit.1
                                    </span>
                                    <span >
                                        <span  className="adress-icon mr-1"><Web /></span>
                                        Lorem ipsum dolor sit.1
                                    </span>
                                </div>
                            </div>
                        </div>

                        
                        
                    </div>
                    
                </div>
                
            </Layout>
        </div>
    )
}

export default Contact
