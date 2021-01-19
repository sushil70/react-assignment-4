import React, {Component, version} from "react"
import "./header.css"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import About from "./Components/aboutpage"
import Shop from "./Components/shoppage"
// import App from "./App"
import Home from "./Components/homepage"
import {connect} from "react-redux"

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            carted: 0,
        }
    }
    componentDidMount() {
        this.setState({carted: this.props.tester})
        // alert(this.state.carted)
    }

    render() {
        return (
            <>
                <div id="header-main">
                    <div className="header-main">
                        <div className="header">
                            <div className="logo">
                                <Link to="/" href="#" className="logo-link">
                                    <img
                                        src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg"
                                        alt="logo"
                                    />
                                </Link>
                            </div>
                            <div className="nav">
                                <div className="nav-item-list">
                                    {/* <Router> */}
                                    {/* <Route exact path="/" component={Home} /> */}
                                    <Link
                                        to="/"
                                        className="nav-item links"
                                        style={{
                                            textDecoration: "none",
                                        }}
                                    >
                                        Home
                                    </Link>
                                    {/* <span className="nav-item">Home</span> */}
                                    <Link
                                        to="/about"
                                        className="nav-item"
                                        style={{
                                            textDecoration: "none",
                                        }}
                                    >
                                        About
                                    </Link>
                                    <Link
                                        to="/shop"
                                        className="nav-item"
                                        style={{
                                            textDecoration: "none",
                                        }}
                                    >
                                        Shop
                                    </Link>
                                    {/* <span className="nav-item">Shop</span> */}
                                    {/* <span className="nav-item">Donate</span> */}
                                    <Link
                                        to="/donate"
                                        className="nav-item"
                                        style={{
                                            textDecoration: "none",
                                        }}
                                    >
                                        Donate
                                    </Link>
                                    {/* <span className="nav-item">Contact</span> */}
                                    <Link
                                        to="/contact"
                                        className="nav-item"
                                        style={{
                                            textDecoration: "none",
                                        }}
                                    >
                                        Contact
                                    </Link>

                                    {/* <Route path="/about" component={About} /> */}
                                    {/* <Route path="/shop" component={Shop} /> */}
                                    {/* <Route exact path="/" component={Home} /> */}
                                    {/* </Router> */}
                                </div>

                                <div>
                                    <i
                                        className="fa fa-shopping-cart"
                                        aria-hidden="true"
                                    >
                                        <span className="cart-count">
                                            {this.props.tester}
                                        </span>
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

// export default Header

const mapStateToProps = (state) => {
    let carted = state.testdata
    new Header().state.carted = carted
    // alert(carted)
    return {
        tester: state.testdata,
    }
}

export default connect(mapStateToProps)(Header)
