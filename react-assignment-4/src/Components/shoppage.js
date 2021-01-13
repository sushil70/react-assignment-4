import React, {Component} from "react"

const products = [
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
]

class Shop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productsData: [],
        }
    }

    // giftcard = () => {
    //     alert("clicked")
    // }

    componentDidMount() {
        this.setState({productsData: products})
    }
    render() {
        return (
            <>
                <div className="page-title-section">
                    <div className="container">
                        <h1 className="page-title">Shop Our Products</h1>
                    </div>
                </div>

                <div className="content-section featured-section">
                    <div className="container">
                        <div className="w-dyn-list">
                            <div role="list" className="w-dyn-items">
                                <div role="listitem" className="w-dyn-item">
                                    <a
                                        // style={{
                                        //     backgroundImage: url(
                                        //         "https://assets.website-files.com/5e853c3383474026e43f2c78/5e856e41c718420c18dd6751_patrick-hendry-eDgUyGu93Yw-unsplash.jpg"
                                        //     ),
                                        // }}
                                        href="/product/White Tent"
                                        className="featured-wrapper w-inline-block"
                                    >
                                        <div className="pill-2 badge primary featured">
                                            Featured Item
                                        </div>
                                        <div className="feature-text-wrapper">
                                            <h3 className="featured-item-name">
                                                White Tent
                                            </h3>
                                            <div
                                                data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                                className="featured-price"
                                            >
                                                $&nbsp;200.00&nbsp;USD
                                            </div>
                                        </div>
                                        <div className="featured-gradient-overlay"></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="content-section">
                    <div class="container">
                        <div class="shop-page-wrapper">
                            <div class="shop-category-menu">
                                <h2 class="category-menu-heading">
                                    Shop by Category
                                </h2>
                                <div class="w-dyn-list">
                                    <div role="list" class="w-dyn-items">
                                        <div
                                            role="listitem"
                                            class="category-menu-item w-dyn-item"
                                        >
                                            <div
                                                onClick={this.giftcard}
                                                href="/category/gift-cards"
                                                class="btn dark outline cat-menu w-button"
                                            >
                                                Gift Cards
                                            </div>
                                        </div>
                                        <div
                                            role="listitem"
                                            class="category-menu-item w-dyn-item"
                                        >
                                            <a
                                                href="/category/tents"
                                                class="btn dark outline cat-menu w-button"
                                            >
                                                Tents
                                            </a>
                                        </div>
                                        <div
                                            role="listitem"
                                            class="category-menu-item w-dyn-item"
                                        >
                                            <a
                                                href="/category/accessories"
                                                class="btn dark outline cat-menu w-button"
                                            >
                                                Accessories
                                            </a>
                                        </div>
                                        <div
                                            role="listitem"
                                            class="category-menu-item w-dyn-item"
                                        >
                                            <a
                                                href="/category/packs"
                                                class="btn dark outline cat-menu w-button"
                                            >
                                                Packs
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="shop-list">
                                <div class="products-list-wrapper w-dyn-list">
                                    <div
                                        role="list"
                                        class="products-list w-dyn-items"
                                    >
                                        <div role="listitem" class="w-dyn-item">
                                            <div class="shop-item-wrapper">
                                                <a
                                                    href="/product/Gift Card"
                                                    class="shop-item-link-wrapper w-inline-block"
                                                >
                                                    <div
                                                        // style='background-image:url("https://assets.website-files.com/5e853c3383474026e43f2c78/5e861d123df4d175e80e8beb_acme-gift-card.jpg")'
                                                        class="shop-image tumbler-1 narrow-list image1"
                                                    >
                                                        <div
                                                            data-wf-sku-conditions="%7B%22condition%22%3A%7B%22fields%22%3A%7B%22default-sku%3Acompare-at-price%22%3A%7B%22exists%22%3A%22yes%22%2C%22type%22%3A%22CommercePrice%22%7D%7D%7D%2C%22timezone%22%3A%22America%2FChicago%22%7D"
                                                            class="pill-2 badge primary sale w-condition-invisible"
                                                        >
                                                            Sale
                                                        </div>
                                                    </div>
                                                    <div class="shop-details-wrapper">
                                                        <div class="shop-details-left">
                                                            <div class="shop-item-name">
                                                                Gift Card
                                                            </div>
                                                            <div class="price-wrapper">
                                                                <div class="shop-item-price">
                                                                    $&nbsp;25.00&nbsp;USD
                                                                </div>
                                                                <div class="shop-item-price compare w-condition-invisible w-dyn-bind-empty"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div class="shop-button-wrapper">
                                                    <a
                                                        href="/product/Gift Card"
                                                        class="btn w-button"
                                                    >
                                                        Details
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div role="listitem" class="w-dyn-item">
                                            <div class="shop-item-wrapper">
                                                <a
                                                    href="/product/Tin Coffee Tumbler"
                                                    class="shop-item-link-wrapper w-inline-block"
                                                >
                                                    <div
                                                        // style='background-image:url("https://assets.website-files.com/5e853c3383474026e43f2c78/5e8542c1248e59128e08e3e9_ryan-holloway-JyDmUaXMib4-unsplash.jpg")'
                                                        class="shop-image tumbler-1 narrow-list image2"
                                                    >
                                                        <div class="pill-2 badge primary sale w-condition-invisible">
                                                            Sale
                                                        </div>
                                                    </div>
                                                    <div class="shop-details-wrapper">
                                                        <div class="shop-details-left">
                                                            <div class="shop-item-name">
                                                                Tin Coffee
                                                                Tumbler
                                                            </div>
                                                            <div class="price-wrapper">
                                                                <div class="shop-item-price">
                                                                    $&nbsp;35.00&nbsp;USD
                                                                </div>
                                                                <div class="shop-item-price compare w-condition-invisible w-dyn-bind-empty"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div class="shop-button-wrapper">
                                                    <a
                                                        href="/product/Tin Coffee Tumbler"
                                                        class="btn w-button"
                                                    >
                                                        Details
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div role="listitem" class="w-dyn-item">
                                            <div class="shop-item-wrapper">
                                                <a
                                                    href="/product/Blue Convas Pack"
                                                    class="shop-item-link-wrapper w-inline-block"
                                                >
                                                    <div
                                                        // style='background-image:url("https://assets.website-files.com/5e853c3383474026e43f2c78/5e85425605cae11f20d46181_denisse-leon-J7CjWufjmg4-unsplash.jpg")'
                                                        class="shop-image tumbler-1 narrow-list image3"
                                                    >
                                                        <div class="pill-2 badge primary sale">
                                                            Sale
                                                        </div>
                                                    </div>
                                                    <div class="shop-details-wrapper">
                                                        <div class="shop-details-left">
                                                            <div class="shop-item-name">
                                                                Blue Canvas Pack
                                                            </div>
                                                            <div class="price-wrapper">
                                                                <div class="shop-item-price">
                                                                    $&nbsp;95.00&nbsp;USD
                                                                </div>
                                                                <div class="shop-item-price compare">
                                                                    $&nbsp;145.00&nbsp;USD
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div class="shop-button-wrapper">
                                                    <a
                                                        href="/product/Blue Convas Pack"
                                                        class="btn w-button"
                                                    >
                                                        Details
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div role="listitem" class="w-dyn-item">
                                            <div class="shop-item-wrapper">
                                                <a
                                                    href="/product/Green Convas Pack"
                                                    class="shop-item-link-wrapper w-inline-block"
                                                >
                                                    <div
                                                        // style='background-image:url("https://assets.website-files.com/5e853c3383474026e43f2c78/5e8542198347409e463f436b_jakob-owens-O_bhy3TnSYU-unsplash.jpg")'
                                                        class="shop-image tumbler-1 narrow-list image4"
                                                    >
                                                        <div class="pill-2 badge primary sale w-condition-invisible">
                                                            Sale
                                                        </div>
                                                    </div>
                                                    <div class="shop-details-wrapper">
                                                        <div class="shop-details-left">
                                                            <div class="shop-item-name">
                                                                Green Canvas
                                                                Pack
                                                            </div>
                                                            <div class="price-wrapper">
                                                                <div class="shop-item-price">
                                                                    $&nbsp;125.00&nbsp;USD
                                                                </div>
                                                                <div class="shop-item-price compare w-condition-invisible w-dyn-bind-empty"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div class="shop-button-wrapper">
                                                    <a
                                                        href="/product/Green Convas Pack"
                                                        class="btn w-button"
                                                    >
                                                        Details
                                                    </a>
                                                </div>
                                            </div>
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

export default Shop
