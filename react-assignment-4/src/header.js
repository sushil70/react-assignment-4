import React, {Component, version} from "react"
import "./header.css"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import About from "./Components/aboutpage"
import Shop from "./Components/shoppage"
// import App from "./App"
import Home from "./Components/homepage"

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
                                {/* <Router> */}
                                <Link to="/" className="nav-item">
                                    Home
                                </Link>
                                {/* <span className="nav-item">Home</span> */}
                                <Link to="/about" className="nav-item">
                                    About
                                </Link>
                                <Link to="/shop" className="nav-item">
                                    Shop
                                </Link>
                                {/* <span className="nav-item">Shop</span> */}
                                <span className="nav-item">Donate</span>
                                <span className="nav-item">Contact</span>

                                {/* <Route path="/about" component={About} />
                                    <Route path="/shop" component={Shop} />
                                    <Route exact path="/" component={Home} />
                                </Router> */}
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
