// import logo from "./logo.svg"
import "./App.css"
import Footer from "./footer"
import Header from "./header"
import Home from "./Components/homepage"
import {BrowserRouter, Route, Link} from "react-router-dom"
import About from "./Components/aboutpage"
import Shop from "./Components/shoppage"
import Product from "./Components/product"

function App() {
    return (
        <>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/shop" component={Shop} />
            <Route path="/product" component={Product} />
            <Footer />
        </>
    )
}

export default App
