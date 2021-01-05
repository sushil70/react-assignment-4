import "./footer.css"
import React, {Component} from "react"

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <>
                <div className="footer-main">
                    <div className="footer-top">
                        <div className="footer-icon">
                            <img
                                src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg"
                                alt="logo"
                            />
                        </div>
                        <div className="social-icon">
                            <i
                                class="fa fa-twitter-square fa-2x"
                                aria-hidden="true"
                            ></i>
                            <i
                                class="fa fa-facebook-square fa-2x"
                                aria-hidden="true"
                            ></i>
                            <i
                                class="fa fa-instagram fa-2x"
                                aria-hidden="true"
                            ></i>
                        </div>
                    </div>
                    <div className="footer-lower">
                        Made In <a href="https://webflow.com/">Webflow</a>. ©
                        2020.
                    </div>
                </div>
            </>
        )
    }
}

export default Footer
