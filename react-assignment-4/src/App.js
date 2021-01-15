// import logo from "./logo.svg"
import "./App.css"
import Footer from "./footer"
import Header from "./header"
import Home from "./Components/homepage"
import {BrowserRouter, Route, Link} from "react-router-dom"
import {Provider} from "react-redux"
import About from "./Components/aboutpage"
import Shop from "./Components/shoppage"
import Product from "./Components/product"
import Donate from "./Components/donate"
import Contact from "./Components/contact"
import store from "./redux/store"

function App() {
    return (
        <>
            <Provider store={store}>
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/shop" component={Shop} />
                <Route path="/product" component={Product} />
                <Route path="/donate" component={Donate} />
                <Route path="/contact" component={Contact} />
                <Footer />
            </Provider>
        </>
    )
}

export default App
