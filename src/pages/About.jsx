import React from 'react';
import Layout from '../components/Layout'
import signature from '../assets/images/signature.png';

function About() {
    return (
        <div>
            <Layout>
                <div className="container mb-5">
                    
                    <div className="home-title"> 
                        <p className="home-title-h2-p">family tradition</p>
                        <h2 className="home-title-h2 h1">our story</h2>
                       
                    </div>
                    <div className="text-left">
                        <p className="home-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste itaque impedit nostrum eveniet. Rem earum, eius eligendi cumque alias quis possimus consequatur. Nulla quaerat fugiat neque praesentium labore iste modi voluptates in enim voluptatibus fugit provident, laboriosam, corporis repudiandae. Itaque consequatur consequuntur consectetur officiis maiores aspernatur, sequi laudantium voluptates minima!
                        </p>
                        <p className="home-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste itaque impedit nostrum eveniet. Rem earum, eius eligendi cumque alias quis possimus consequatur. Nulla quaerat fugiat neque praesentium labore iste modi voluptates in enim voluptatibus fugit provident, laboriosam, corporis repudiandae. Itaque consequatur consequuntur consectetur officiis maiores aspernatur, sequi laudantium voluptates minima!
                        </p>
                        <p className="home-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste itaque impedit nostrum eveniet. Rem earum, eius eligendi cumque alias quis possimus consequatur. Nulla quaerat fugiat neque praesentium labore iste modi voluptates in enim voluptatibus fugit provident, laboriosam, corporis repudiandae. Itaque consequatur consequuntur consectetur officiis maiores aspernatur, sequi laudantium voluptates minima!
                        </p>
                        <p className="home-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste itaque impedit nostrum eveniet. Rem earum, eius eligendi cumque alias quis possimus consequatur. Nulla quaerat fugiat neque praesentium labore iste modi voluptates in enim voluptatibus fugit provident, laboriosam, corporis repudiandae. Itaque consequatur consequuntur consectetur officiis maiores aspernatur, sequi laudantium voluptates minima!
                        </p>
                    </div>
                    <div className="text-right mr-5">
                        <img src={signature} alt="signature" className="signature"/>
                    </div>
                </div>
                
            </Layout>
        </div>
    )
}

export default About
