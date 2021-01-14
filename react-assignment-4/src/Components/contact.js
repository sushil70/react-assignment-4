import React, {Component} from "react"

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    submitClick = (e) => {
        e.preventDefault()
        let testing = document.getElementById("email-form")
        testing.style.display = "none"
        let success = document.getElementById("contact-success")
        success.style.display = "block"
    }

    render() {
        return (
            <>
                <div class="contact-hero-section">
                    <div class="contact-hero-bg-wrapper">
                        <div class="container contact">
                            <h1 class="heading">Contact Acme Outdoors</h1>
                            <div class="contact-block-wrapper">
                                <div class="contact-block">
                                    <img
                                        src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84ba313e8232516a7da902_chat-alt.svg"
                                        alt=""
                                        class="contact-icon"
                                    />
                                    <h2 className="contact-h2">Contact Us</h2>
                                    <p>
                                        Just want to say hi?&nbsp;We'd love to
                                        hear from you. We love our customers and
                                        community!&nbsp;
                                    </p>
                                    <a href="#contact" class="btn w-button">
                                        Send Us A Message
                                    </a>
                                </div>
                                <div class="contact-block">
                                    <img
                                        src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e850414db1f6ebfba8bc42d_chat-warning.svg"
                                        alt=""
                                        class="contact-icon"
                                    />
                                    <h2 className="contact-h2">Get Support</h2>
                                    <p>
                                        Have an issue with an order or with a
                                        product you purchased from us?&nbsp;Fill
                                        out our support form.
                                    </p>
                                    <a
                                        href="https://university.webflow.com/support"
                                        target="_blank"
                                        class="btn w-button"
                                    >
                                        Contact Support
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="contact-image-div"></div>
                    </div>
                </div>

                <div id="contact" class="content-section">
                    <div class="container">
                        <div class="contact-wrapper">
                            <div class="contact-left">
                                <h2>Contact Us</h2>
                                <div class="w-richtext">
                                    <p>
                                        Acme Outdoors
                                        <br />
                                        123 Rainy Street
                                        <br />
                                        Oklahoma City, OK 73129
                                    </p>
                                    <p>
                                        ‍<br />
                                        <strong>General Inquiries:</strong>
                                        &nbsp;(405) 555-5555
                                        <br />
                                        <strong>Customer Support:</strong>
                                        &nbsp;(405) 555-5556
                                    </p>
                                </div>
                            </div>
                            <div class="contact-right">
                                <h2>Contact Form</h2>
                                <p>
                                    Send us a message and we'll get back to you
                                    as soon as we can!{" "}
                                </p>
                                <div class="w-form">
                                    <form
                                        id="email-form"
                                        name="email-form"
                                        data-name="Email Form"
                                        className="contact-email-form"
                                        onSubmit={this.submitClick}
                                    >
                                        <label for="name">Name</label>
                                        <input
                                            type="text"
                                            class="input w-input"
                                            maxlength="256"
                                            name="name"
                                            data-name="Name"
                                            placeholder="Enter your name"
                                            id="name"
                                        />
                                        <label for="email">Email Address</label>
                                        <input
                                            type="email"
                                            class="input w-input"
                                            maxlength="256"
                                            name="email"
                                            data-name="Email"
                                            placeholder="Enter your email address"
                                            id="email"
                                            required=""
                                        />
                                        <label for="Message">
                                            Your Message
                                        </label>
                                        <textarea
                                            placeholder="Enter your message"
                                            maxlength="5000"
                                            id="Message"
                                            name="Message"
                                            data-name="Message"
                                            class="input w-input"
                                        ></textarea>
                                        <input
                                            type="submit"
                                            value="Submit"
                                            data-wait="Please wait..."
                                            class="btn w-button"
                                        />
                                    </form>
                                    <div
                                        class="contact-success w-form-done"
                                        id="contact-success"
                                    >
                                        <div>
                                            Thank you! Your submission has been
                                            received! We'll be in touch soon!
                                        </div>
                                    </div>
                                    <div class="contact-error w-form-fail">
                                        <div>
                                            Oops! Something went wrong while
                                            submitting the form.{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Contact
