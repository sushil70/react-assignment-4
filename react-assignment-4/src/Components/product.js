import React, {Component} from "react"

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [
                {
                    id: 1,
                    title: "White Tent",
                    price: "200.00",
                    oldprice: "",
                    prevew:
                        "https://assets.website-files.com/5e853c3383474026e43f2c78/5e856e41c718420c18dd6751_patrick-hendry-eDgUyGu93Yw-unsplash.jpg",
                },
                {
                    id: 2,
                    title: "Gift Card",
                    price: "25.00",
                    oldprice: "",
                    prevew:
                        "https://assets.website-files.com/5e853c3383474026e43f2c78/5e861d123df4d175e80e8beb_acme-gift-card.jpg",
                },
                {
                    id: 3,
                    title: "Tin Coffee Tumbler",
                    price: "35.00",
                    oldprice: "",
                    prevew:
                        "https://assets.website-files.com/5e853c3383474026e43f2c78/5e8542c1248e59128e08e3e9_ryan-holloway-JyDmUaXMib4-unsplash.jpg",
                },
                {
                    id: 4,
                    title: "Blue Convas Pack",
                    price: "95.00",
                    oldprice: "145.00",
                    prevew:
                        "https://assets.website-files.com/5e853c3383474026e43f2c78/5e85425605cae11f20d46181_denisse-leon-J7CjWufjmg4-unsplash.jpg",
                },

                {
                    id: 5,
                    title: "Green Convas Pack",
                    price: "125.00",
                    oldprice: "",
                    prevew:
                        "https://assets.website-files.com/5e853c3383474026e43f2c78/5e8542198347409e463f436b_jakob-owens-O_bhy3TnSYU-unsplash.jpg",
                },
            ],
        }
    }
    render() {
        const {products} = this.state
        console.log(this.state.products)
        const productItemCaller = this.props.location.pathname.split("/")[2]
        console.log(productItemCaller)
        return (
            <>
                {products.map((productitem) =>
                    productItemCaller == productitem.title ? (
                        <>
                            <div className="page-title-section">
                                <div className="container">
                                    <h1 className="page-title">
                                        {productitem.title}
                                    </h1>
                                </div>
                            </div>
                            <div className="shop-booking-main">
                                <div className="shop-image-main">
                                    <img
                                        className="shop-image"
                                        src={productitem.prevew}
                                        alt={productitem.title}
                                    />
                                </div>
                                <div className="shop-second">
                                    <h2>{productitem.title}</h2>
                                    <div className="shop-price-tag">
                                        $ {productitem.price} USD
                                    </div>
                                    <div>
                                        <form className="shop-form">
                                            <label className="qua">
                                                Quantity
                                            </label>
                                            <div className="shop-form-main">
                                                <input
                                                    type="number"
                                                    min="1"
                                                    className="shop-number-input"
                                                    // value="1"
                                                />
                                                <input
                                                    type="submit"
                                                    value="Add to Cart"
                                                    className="shop-submit-butt"
                                                />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="w-richtext">
                                        <h2>What’s a Rich Text element?</h2>
                                        <p>
                                            The rich text element allows you to
                                            create and format headings,
                                            paragraphs, blockquotes, images, and
                                            video all in one place instead of
                                            having to add and format them
                                            individually. Just double-click and
                                            easily create content.
                                        </p>
                                        <h4>
                                            Static and dynamic content editing
                                        </h4>
                                        <p>
                                            A rich text element can be used with
                                            static or dynamic content. For
                                            static content, just drop it into
                                            any page and begin editing. For
                                            dynamic content, add a rich text
                                            field to any collection and then
                                            connect a rich text element to that
                                            field in the settings panel. Voila!
                                        </p>
                                        <h4>
                                            How to customize formatting for each
                                            rich text
                                        </h4>
                                        <p>
                                            Headings, paragraphs, blockquotes,
                                            figures, images, and figure captions
                                            can all be styled after a class is
                                            added to the rich text element using
                                            the "When inside of" nested selector
                                            system.
                                        </p>
                                        <p>‍</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <></>
                    )
                )}
            </>
        )
    }
}

export default Product
