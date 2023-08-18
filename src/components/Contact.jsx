import './contact.css';

const Contact = () => {
    return (
        <>
            <div className="skills_section">
                <div className="container">
                    <div className="seven">
                        <h1>Contact me</h1>
                    </div>


                </div>
                <div className="container">
                        <div className="contact-container">
                        <div className="contact1-pic js-tilt">
                        <img src="images/img-01.png" alt="IMG" />
                    </div>
                    <form className="contact1-form validate-form">
                        <span className="contact1-form-title">Get in touch</span>
                        <div
                            className="wrap-input1 validate-input"
                            data-validate="Name is required"
                        >
                            <input className="input1" type="text" name="name" placeholder="Name" />
                            <span className="shadow-input1" />
                        </div>
                        <div
                            className="wrap-input1 validate-input"
                            data-validate="Valid email is required: ex@abc.xyz"
                        >
                            <input className="input1" type="text" name="email" placeholder="Email" />
                            <span className="shadow-input1" />
                        </div>
                        <div
                            className="wrap-input1 validate-input"
                            data-validate="Subject is required"
                        >
                            <input
                                className="input1"
                                type="text"
                                name="subject"
                                placeholder="Subject"
                            />
                            <span className="shadow-input1" />
                        </div>
                        <div className="wrap-input1 validate-input"
                            data-validate="Message is required">
                            <textarea
                                className="input1"
                                name="message"
                                placeholder="Message"
                                defaultValue={""}
                            />
                            <span className="shadow-input1" />
                        </div>
                        <div className="container-contact1-form-btn">
                            <button className="contact1-form-btn">
                                <span>
                                    Send Email
                                    <i className="fa fa-long-arrow-right" aria-hidden="true" />
                                </span>
                            </button>
                        </div>
                    </form>
                        </div>
                </div>

            </div>
        </>
    )
}

export default Contact