import "../components/css/header.css";
import { Navbar } from "react-bootstrap";
import { IconButton } from '@mui/material';
import { ShoppingCart } from "@mui/icons-material";

export function Header(){

    const handleTitleClick = () => {
        window.location.href = "/";
    };

    return(
        <div style={{paddingTop: 10, paddingBottom: 20}}>
            <div className="title-container" style={{display: "flex", paddingBottom: 5}} onClick={handleTitleClick}>
                <img src="img/transparent-TO-logo.png" style={{height: 122, width: 122}}></img>
                <span className="title">Toronto Cupcake</span>
            </div>
            <Navbar className="navbar-custom" expand="lg" variant="dark">
                <div>
                    <a href="/" className="navbar-link">Home</a>
                    <a href="/about" className="navbar-link">About</a>
                    <a href="/cupcake" className="navbar-link">Cupcake</a>
                    <a href="/faq" className="navbar-link">FAQs</a>
                    <a href="/contact" className="navbar-link">Contact</a>
                </div>
                <div>
                    <IconButton>
                        <ShoppingCart fontSize="large"/>
                    </IconButton>
                </div>
            </Navbar>
        </div>
    )
}