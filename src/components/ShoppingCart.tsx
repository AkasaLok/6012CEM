import { Col, Row } from "react-bootstrap";
import "../components/css/cart.css";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { SelectedCupcake } from "./Cupcake";
import { ProductCard } from "./ProductCard";

export function Cart(){
    const [cookies, setCookie] = useCookies(['6012CEM-TorontoCupcake']);
    const [selectedCupcakes, setSelectedCupcakes] = useState<SelectedCupcake[]>([]);
    const cupcakeCookie = cookies['6012CEM-TorontoCupcake'];


    //Load Cookies at the first time
    useEffect(() => {
        if (cupcakeCookie !== undefined){
            setSelectedCupcakes(cupcakeCookie);
        }
    }, []);

    useEffect(() => {

        if (selectedCupcakes.length > 0){
            setCookie('6012CEM-TorontoCupcake', selectedCupcakes, {path: '/'});
            console.log(selectedCupcakes);
        }

    }, [selectedCupcakes])

    return (
        <div className="cart-container">
            <div className="cart-sub-container">
                <img src="img/Cupcake.png" style={{height: 72, width: 195.2}}></img>
                <span className="cart-title">Your cart</span>
            </div>

            <div className="cart-sub-container2">

                <span className="cart-text" 
                    style={{
                        paddingTop: "25px", 
                        paddingBottom: "10px", 
                        paddingRight: "0px",
                        textAlign: "left",
                        justifyContent: "start",
                        width: "50%"
                    }}>
                        Product
                </span>

                <span className="cart-text" 
                    style={{
                        paddingTop: "25px",
                        paddingBottom: "10px",
                        paddingRight: "0px",
                        width: "191.6px"
                    }}>
                        Quantity
                </span>
                <span className="cart-text" 
                    style={{
                        paddingTop: "25px", 
                        paddingBottom: "10px", 
                        paddingRight: "0px",
                        textAlign: "right",
                        justifyContent: "end",
                        width: "10%"
                    }}>
                        Total
                </span>
            </div>
            <div className="cart-line"/>

            <div className="cart-sub-container3">
                <Row className="cart-product-container">
                    {selectedCupcakes.map((product, number) => (
                        <Col key={number} className="mb-4 ml-5 mr-5" xs='auto' sm='auto' md='auto' lg='auto' style={{width: "100%"}}>
                            <ProductCard cupcakeId={product.cupcakeId} amount={product.amount}/>
                        </Col>
                    ))}
                </Row>
            </div>

            <br></br>
            <div className="cart-line"/>
        </div>
    )
}