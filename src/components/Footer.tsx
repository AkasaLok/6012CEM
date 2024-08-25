import "../components/css/footer.css";

export function Footer(){

    return(
        <div style={{paddingTop: 20, paddingBottom: 10}}>
            <div className="footer-custom">
                <span className="footer-title footer-object">Toronto Cupcake</span>
                <div className="footer-object footer-row">
                    <a href="/" className="footer-link" style={{paddingTop: 7}}>Home</a>
                    <a href="/about" className="footer-link">About</a>
                    <a href="/faq" className="footer-link">FAQs</a>
                </div>
                <div className="footer-object footer-row">
                    <a href="/cupcake" className="footer-link" style={{paddingTop: 7}}>Buy Cupcake</a>
                    <a href="/cart" className="footer-link">View Cart</a>
                </div>
                <div className="footer-object footer-row">
                    <span className="footer-link" style={{paddingTop: 7}}>Corporate Events</span>
                    <span className="footer-link">Occasions</span>
                    <span  className="footer-link">Community</span>
                    <span className="footer-link">Resources</span>
                </div>
                <div className="footer-object footer-row">
                    <span className="footer-link" style={{paddingTop: 7}}>Employment</span>
                    <span className="footer-link">Privacy Policy</span>
                    <a href="/" className="footer-link">Contact Us</a>
                </div>
            </div>
        </div>
    )
}