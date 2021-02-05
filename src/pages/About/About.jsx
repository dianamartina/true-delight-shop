import React from 'react';
import Layout from '../../components/Layout/Layout';
import Signature from '../../assets/images/signature.png';

function About() {
    return (
        <Layout>
            <div className="container-fluid container-min-max-width ">
                <div className="title"> 
                    <p className="title-h2-p">family tradition</p>
                    <h2 className="title-h2 h1">our story</h2>
                </div>
                <div className="text-left">
                    <p className="text-18">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste itaque impedit nostrum eveniet. Rem earum, eius eligendi cumque alias quis possimus consequatur. Nulla quaerat fugiat neque praesentium labore iste modi voluptates in enim voluptatibus fugit provident, laboriosam, corporis repudiandae. Itaque consequatur consequuntur consectetur officiis maiores aspernatur, sequi laudantium voluptates minima!
                    </p>
                    <p className="text-18">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste itaque impedit nostrum eveniet. Rem earum, eius eligendi cumque alias quis possimus consequatur. Nulla quaerat fugiat neque praesentium labore iste modi voluptates in enim voluptatibus fugit provident, laboriosam, corporis repudiandae. Itaque consequatur consequuntur consectetur officiis maiores aspernatur, sequi laudantium voluptates minima!
                    </p>
                    <p className="text-18">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste itaque impedit nostrum eveniet. Rem earum, eius eligendi cumque alias quis possimus consequatur. Nulla quaerat fugiat neque praesentium labore iste modi voluptates in enim voluptatibus fugit provident, laboriosam, corporis repudiandae. Itaque consequatur consequuntur consectetur officiis maiores aspernatur, sequi laudantium voluptates minima!
                    </p>
                    <p className="text-18">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste itaque impedit nostrum eveniet. Rem earum, eius eligendi cumque alias quis possimus consequatur. Nulla quaerat fugiat neque praesentium labore iste modi voluptates in enim voluptatibus fugit provident, laboriosam, corporis repudiandae. Itaque consequatur consequuntur consectetur officiis maiores aspernatur, sequi laudantium voluptates minima!
                    </p>
                </div>
                <div className="text-right mr-5">
                    <img src={Signature} alt="signature" className="signature"/>
                </div>
            </div>
        </Layout>
    )
}

export default About;
