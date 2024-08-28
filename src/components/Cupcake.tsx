import { Col, Row } from "react-bootstrap";
import "../components/css/cupcake.css";
import { cupcakeTemplateData } from "../models/cupcakes";
import { CupcakeCard } from "./CupcakeCard";

export function Cupcake(){

    const cupcakes = cupcakeTemplateData;

    return (
        <div className="cupcake-container">
            <span className="cupcake-title" style={{paddingBottom: 10}}>Cupcakes | Always Available</span>
            <span className="cupcake-text" style={{paddingLeft: 3}}>$3.75 each | $21.50 half dozen | $41.50 dozen</span>
            <br></br>

            <div>
                <Row className="cupcake-card-container" style={{gap: 20}}>
                    {cupcakes.map((cupcake, number) => (
                        <Col key={number} className="mb-4 ml-5 mr-5" xs='auto' sm='auto' md='auto' lg='auto'>
                            <CupcakeCard cupcake={cupcake}/>
                        </Col>
                    ))}
                </Row>
            </div>

        </div>
    )
}