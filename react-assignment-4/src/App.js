// import logo from "./logo.svg"
import "./App.css"
import Footer from "./footer"
import Header from "./header"
import Home from "./Components/homepage"
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
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
                <Router>
                    {/* <Switch> */}
                    {/* <Header /> */}
                    <Route exact path="/" component={Home}>
                        <Home />
                    </Route>
                    <Route path="/about" component={About}>
                        <About />
                    </Route>
                    <Route path="/shop" component={Shop}>
                        <Shop />
                    </Route>
                    <Route path="/product" component={Product} />
                    <Route path="/donate" component={Donate}>
                        <Donate />
                    </Route>
                    <Route path="/contact" component={Contact}>
                        <Contact />
                    </Route>
                    {/* <Footer /> */}
                    {/* </Switch> */}
                </Router>
            </Provider>
        </>
    )
}

export default App
