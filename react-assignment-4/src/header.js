import React, {Component} from "react"
import "./header.css"

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <>
                <div className="header-main">
                    <div className="header">
                        <div className="logo">
                            <a href="#" className="logo-link">
                                <img
                                    src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg"
                                    alt="logo"
                                />
                            </a>
                        </div>
                        <div className="nav">
                            <div className="nav-item-list">
                                <span className="nav-item">Home</span>
                                <span className="nav-item">About</span>
                                <span className="nav-item">Shop</span>
                                <span className="nav-item">Donate</span>
                                <span className="nav-item">Contact</span>
                            </div>
                            <div>
                                <i
                                    class="fa fa-shopping-cart"
                                    aria-hidden="true"
                                >
                                    <span className="cart-count">0</span>
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Header
