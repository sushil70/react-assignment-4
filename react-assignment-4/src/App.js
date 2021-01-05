// import logo from "./logo.svg"
import "./App.css"
import Footer from "./footer"
import Header from "./header"

function App() {
    return (
        <>
            <Header />

            <div className="hero-section">
                <div className="container">
                    <div className="hero-wrapper">
                        <h1 className="hero-heading">
                            Serving you <br />
                            since 1989.
                        </h1>
                        <p className="hero-paragraph">
                            Acme Outdoors is an outdoor and adventure shop
                            located in the Boathouse District in Oklahoma City.
                        </p>
                        <div className="hero-button-wrapper">
                            <a
                                href="/shop"
                                className="btn light outline w-button"
                            >
                                Shop Merch
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </>
    )
}

export default App
