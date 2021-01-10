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

    componentDidMount() {
        this.setState({productsData: products})
    }
    render() {
        return <h1>Shop Page {products[0].title}</h1>
    }
}

export default Shop
