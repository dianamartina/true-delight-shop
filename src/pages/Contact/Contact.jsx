import React from "react";
import Layout from "../../components/Layout/Layout";
import { ReactComponent as House } from "../../assets/icons/house.svg";
import { ReactComponent as Email } from "../../assets/icons/mail.svg";
import { ReactComponent as Phone } from "../../assets/icons/phone.svg";
import { ReactComponent as Web } from "../../assets/icons/web.svg";
import "./Contact.css";

function Contact() {
  return (
    <Layout>
      <div className="container-fluid container-min-max-width">
        <div className="title">
          <p className="title-h2-p">we are waiting for you</p>
          <h2 className="title-h2 h1">Contact</h2>
        </div>
        <div className="row text-left d-flex align-items-start">
          <div className=" col-md-5 d-flex justify-content-center mb-4">
            <div className="table-hours border-table">
              <table className=" table border-table text-center text ">
                <tbody>
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
                    <td>10:00 - 19:00h </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-7 home-text px-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              itaque impedit nostrum eveniet. Rem earum, eius eligendi cumque
              alias quis possimus consequatur. Nulla quaerat fugiat neque
              praesentium labore iste modi voluptates in enim
            </p>
            <div className=" d-flex flex-column justify-content-center contact-info mt-5">
              <div className="contact-adress-line">
                <span className="adress-info ">
                  <span className="adress-icon mr-1">
                    <House />
                  </span>
                  <span className="adress-details">Bucharest, District 2</span>
                </span>

                <span className="adress-info ">
                  <span className="adress-icon mr-1">
                    <Email />
                  </span>
                  <span className="adress-details">true-delight@td.com</span>
                </span>
              </div>
              <div className="contact-adress-line">
                <span className="adress-info ">
                  <span className="adress-icon mr-1">
                    <Phone />
                  </span>
                  <span className="adress-details">+40 0768 684 133</span>
                </span>
                <span className="adress-info ">
                  <span className="adress-icon mr-1">
                    <Web />
                  </span>
                  <span className="adress-details">www.true-delight.com</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
