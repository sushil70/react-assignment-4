import React, {Component} from "react"
import Header from "../header"
import Footer from "../footer"
import {Link} from "react-router-dom"

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <>
                <Header />
                <div className="hero-section">
                    <div className="container cont1">
                        <div className="hero-wrapper">
                            <h1 className="hero-heading">
                                Serving you <br />
                                since 1989.
                            </h1>
                            <p className="hero-paragraph">
                                Acme Outdoors is an outdoor and adventure shop
                                located in the Boathouse District in Oklahoma
                                City.
                            </p>
                            <div className="hero-button-wrapper">
                                <Link
                                    to="/shop"
                                    // href="/shop"
                                    className="btn light outline w-button"
                                >
                                    Shop Merch
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="support-section">
                    <div className="container">
                        <div className="support-top-wrapper">
                            <div className="support-top-left">
                                <div className="support-top-details-text">
                                    Ways to support
                                </div>
                                <h2 className="support-top-heading">
                                    Support Acme Outdoors.
                                </h2>
                            </div>
                            <div className="support-top-right">
                                <p>
                                    COVID-19 has forced us to close our retail
                                    space, but we need support from patrons like
                                    yourself now more than ever. Below, we’ve
                                    listed the best ways to help us through this
                                    season.
                                </p>
                            </div>
                        </div>
                        <div className="support-wrapper">
                            <div className="support-column">
                                <div className="support-square">
                                    <div className="support-square-number">
                                        01
                                    </div>
                                    <div className="support-square-text">
                                        SHOP
                                        <br />
                                        PRODUCTS
                                    </div>
                                    <img
                                        src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57a5836db2a07bab0e3_Circle.svg"
                                        alt="Circle Decoration in Shop Products Block"
                                        className="support-square-image"
                                    />
                                </div>
                                <p>
                                    Our full product line is still available
                                    online here on our site! Getting outside and
                                    hiking is still something you can do. Get
                                    your gear now!
                                </p>
                            </div>
                            <div className="support-column">
                                <div className="support-square">
                                    <div className="support-square-number">
                                        02
                                    </div>
                                    <div className="support-square-text">
                                        Donate
                                    </div>
                                    <img
                                        src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adc54453434efb9ee_Triangle.svg"
                                        alt="Triangle Decoration in Donate Block"
                                        className="support-square-image triangle"
                                    />
                                </div>
                                <p>
                                    Since we've changed the way we operate to
                                    online only, and to ensure your safety, not
                                    all our staff is working. Donate to keep
                                    them afloat.
                                </p>
                            </div>
                            <div className="support-column">
                                <div className="support-square">
                                    <div className="support-square-number">
                                        03
                                    </div>
                                    <div className="support-square-text">
                                        Buy <br />
                                        GIFT CARDS
                                    </div>
                                    <img
                                        src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57afea9a31a44d66db0_Rectangle.svg"
                                        alt="Rectangle Decoration in Buy Gift Cards Block"
                                        className="support-square-image rectangle"
                                    />
                                </div>
                                <p>
                                    Have all the outdoor gear you need for
                                    now?&nbsp;Buy a gift card and use it later
                                    or share it with friends and family.{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="safe-section">
                    <div className="container">
                        <div className="safe-wrapper">
                            <h2 className="safe-heading">
                                How we're keeping you safe during COVID-19
                            </h2>
                            <p className="safe-paragraph">
                                As an outdoor shop, we’ve taken precautionary
                                measures to ensure the safety of all our
                                customers and team members.
                            </p>
                            <div className="safe-button-wrapper">
                                <a
                                    href="#"
                                    className="btn light hero safe w-button"
                                >
                                    Read Our Statement
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="products-section">
                    <div className="container">
                        <div className="shop-top-wrapper">
                            <div className="support-top-left">
                                <div className="support-top-details-text">
                                    shop products
                                </div>
                                <h2 className="support-top-heading">
                                    Open 24/7/365.
                                </h2>
                            </div>
                            <div className="support-top-right"></div>
                        </div>
                        <div className="products-list-wrapper w-dyn-list">
                            <div
                                role="list"
                                className="products-list w-dyn-items"
                            >
                                <div role="listitem" className="w-dyn-item">
                                    <div className="shop-item-wrapper">
                                        <Link
                                            to="/product?White Tent"
                                            // href="/product/white-tent"
                                            className="shop-item-link-wrapper w-inline-block"
                                        >
                                            <div class="shop-image home-shop-3"></div>
                                            <div className="shop-details-wrapper">
                                                <div className="shop-details-left">
                                                    <div className="shop-item-name">
                                                        White Tent
                                                    </div>
                                                    <div className="price-wrapper">
                                                        $&nbsp;200.00&nbsp;USD
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="shop-button-wrapper">
                                            <Link
                                                to="/product?White Tent"
                                                // href="/product/white-tent"
                                                className="btn w-button"
                                            >
                                                Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="w-dyn-item">
                                    <div className="shop-item-wrapper">
                                        <Link
                                            to="/product?Tin Coffee Tumbler"
                                            // href="/product/white-tent"
                                            className="shop-item-link-wrapper w-inline-block"
                                        >
                                            <div class="shop-image home-shop"></div>
                                            <div className="shop-details-wrapper">
                                                <div className="shop-details-left">
                                                    <div className="shop-item-name">
                                                        Tin Coffee Tumbler
                                                    </div>
                                                    <div className="price-wrapper">
                                                        $&nbsp;35.00&nbsp;USD
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="shop-button-wrapper">
                                            <Link
                                                to="/product?Tin Coffee Tumbler"
                                                // href="/product/white-tent"
                                                className="btn w-button"
                                            >
                                                Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="w-dyn-item">
                                    <div className="shop-item-wrapper">
                                        <Link
                                            to="/product?Blue Canvas Pack"
                                            // href="/product/white-tent"
                                            className="shop-item-link-wrapper w-inline-block"
                                        >
                                            <div class="shop-image home-shop-2"></div>
                                            <div className="shop-details-wrapper">
                                                <div className="shop-details-left">
                                                    <div className="shop-item-name">
                                                        Blue Canvas Pack
                                                    </div>
                                                    <div className="price-wrapper">
                                                        $&nbsp;95.00&nbsp;USD
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="shop-button-wrapper">
                                            <Link
                                                to="/product?Blue Canvas Pack"
                                                // href="/product/white-tent"
                                                className="btn w-button"
                                            >
                                                Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="shop-more">
                            <Link
                                to="/shop"
                                // href="/shop"
                                className="btn dark w-button"
                            >
                                View All Products
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="shop-local-section">
                    <div className="container shop-local-container">
                        <div className="shop-local-wrapper">
                            <div className="shop-local-left"></div>
                            <div className="shop-local-right">
                                <div className="shop-local-content-wrapper">
                                    <h2 className="shop-local-heading">
                                        Shop Local.
                                    </h2>
                                    <p>
                                        We know that during COVID-19, a lot of
                                        folks around the city and state are
                                        feeling uneasy about the future - we’re
                                        not sure what the future holds either.
                                    </p>
                                    <p>
                                        That said: we know that we love making
                                        sure you have the gear you need for your
                                        adventures, and we’re going to keep
                                        doing that - with our team - until the
                                        city tells us we can’t.
                                    </p>
                                    <p>
                                        But as long as folks like yourself
                                        support small businesses around the
                                        city, then we’ll be here — every day,
                                        making sure your orders arrive on time.
                                    </p>
                                    <p>-------</p>
                                    <div>Jane &amp; John Doe</div>
                                    <div>
                                        <strong>Acme Outdoors</strong>
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

export default Home
