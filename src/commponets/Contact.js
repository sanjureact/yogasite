import React from "react";

export default function Contact() {
  return (
    <>
      <section className="contact section" id="contact">
        <div className="container">
          <div className="row">
            <div className="ml-auto col-lg-5 col-md-6 col-12">
              <h2
                style={{ fontFamily: "Lora", letterSpacing: "2px" }}
                className="mb-4 pb-2"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Feel Free to ask anything
              </h2>

              <form
                action="#"
                method="post"
                className="contact-form webform"
                data-aos-delay="400"
                data-aos="fade-up"
                role="form"
              >
                <input
                  type="text"
                  name="cf-name"
                  className="form-control"
                  placeholder="Name"
                />
                <input
                  type="email"
                  name="cf-email"
                  className="form-control"
                  placeholder="Emails"
                />
                <textarea
                  name="cf-messgae"
                  rows="5"
                  className="form-control"
                  placeholder="Message"
                ></textarea>
                <button
                  type="submit"
                  className="form-control"
                  id="submit-button"
                  name="submit"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="mx-auto mt-4 mt-lg-0 mt-md-0 col-lg-5 col-md-6 col-12">
              <h2
                style={{ fontFamily: "Lora", letterSpacing: "2px" }}
                className="mb-4"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Where you can <span>find us</span>
              </h2>
              <p data-aos="fade-up" data-aos-delay="800">
                <i className="fa fa-map-marker mr-1"></i> 200-203 Luxuria
                Business club - Surat, Gujarat, India
              </p>
              <div
                className="google-map"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.122425043779!2d72.7575831148854!3d21.14752568593414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d80f5d96493%3A0x5f79790a213bd724!2sLuxuria%20Business%20Hub!5e0!3m2!1sen!2sin!4v1600443256886!5m2!1sen!2sin"
                  width="1920"
                  height="250"
                  frameBorder="0"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
