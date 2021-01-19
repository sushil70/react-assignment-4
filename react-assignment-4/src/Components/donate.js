import React, {Component} from "react"
import Header from "../header"
import Footer from "../footer"
import {Link} from "react-router-dom"

class Donate extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <>
                <Header />
                <div className="donate-explainer">
                    <div className="container cont1">
                        <div className="donate-heading-1">
                            Here at Acme Outdoors
                        </div>
                        <div className="donate-heading-2">
                            every dollar counts
                        </div>
                        <p className="donate-paragraph">
                            Acme Outdoors is more than just a company, we're a
                            community of people who care for one another and for
                            our city. During this time, due to shelter in place
                            orders, only a select few of our staff are able to
                            work. Any donations you make to Acme will help make
                            sure our employees are cared for and can stay safe
                            in these uncertain times.{" "}
                        </p>
                    </div>
                </div>

                <div className="content-section">
                    <div className="container">
                        <div className="donate-wrapper">
                            <div className="donate-collection w-dyn-list">
                                <div role="list" className="w-dyn-items">
                                    <div role="listitem" className="w-dyn-item">
                                        <Link
                                            to="/product?Donate $100"
                                            // href="/product/Donate $100"
                                            className="donate-link-block w-inline-block"
                                        >
                                            <div className="text-block">
                                                Donate $100
                                            </div>
                                        </Link>
                                    </div>
                                    <div role="listitem" className="w-dyn-item">
                                        <Link
                                            to="/product?Donate $50"
                                            // href="/product/Donate $50"
                                            className="donate-link-block w-inline-block"
                                        >
                                            <div className="text-block">
                                                Donate $50
                                            </div>
                                        </Link>
                                    </div>
                                    <div role="listitem" className="w-dyn-item">
                                        <Link
                                            to="/product?Donate $25"
                                            // href="/product/Donate $25"
                                            className="donate-link-block w-inline-block"
                                        >
                                            <div className="text-block">
                                                Donate $25
                                            </div>
                                        </Link>
                                    </div>
                                    <div role="listitem" className="w-dyn-item">
                                        <Link
                                            to="/product?Donate $15"
                                            // href="/product/Donate $15"
                                            className="donate-link-block w-inline-block"
                                        >
                                            <div className="text-block">
                                                Donate $15
                                            </div>
                                        </Link>
                                    </div>
                                    <div role="listitem" className="w-dyn-item">
                                        <Link
                                            to="/product?Donate $5"
                                            // href="/product/Donate $5"
                                            className="donate-link-block w-inline-block"
                                        >
                                            <div className="text-block">
                                                Donate $5
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default Donate
