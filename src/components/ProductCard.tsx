
import { Box, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import "../components/css/cart.css";
import { Cupcake, cupcakeTemplateData } from "../models/cupcakes";
import { SelectedCupcake } from "./Cupcake";
import { useEffect, useState } from "react";
import { Add, DeleteOutline, Remove } from "@mui/icons-material";

export function ProductCard(props: SelectedCupcake){
    const [cupcake, setCupcake] = useState<Cupcake>();
    
    useEffect(() => {
        //Read cupcake data
        var data = cupcakeTemplateData.find(p => p._id === props.cupcakeId);
        if(data !== undefined){
            setCupcake(data);
        }
    }, [])

    return(
        <Card className="cart-product-card" sx={{
            display: "flex",
            flexDirection: "row",
            flexGrow: 1,
            width: "100%",
            boxShadow: "none",
            borderRadius: 0,
            borderWidth: 0
        }}
        >
            <Box sx={{display: "flex", width: "50%"}}>
                <div>
                    <CardMedia
                        sx={{height: 250, width: 195, objectFit: 'contain', paddingTop: "5px", paddingBottom: "5px"}}
                        component="img"
                        image={cupcake?.image}
                        title={cupcake?.name}
                    />
                </div>

                <div className="cart-product-card-name-container">
                    <span className="cart-product-card-name">{cupcake?.name}</span>
                    <span className="cart-product-card-price">${cupcake?.price.toFixed(2)}</span>
                </div>
            </Box>

            <div className="cart-product-quantity-container">
                <div className="cart-product-quantity-border">
                    <div>
                        <IconButton>
                            <Remove/>
                        </IconButton>
                    </div>
                    <span className="cart-product-quantity-text">{props.amount}</span>
                    <div>
                        <IconButton>
                            <Add/>
                        </IconButton>
                    </div>
                </div>
                <div>
                    <IconButton>
                        <DeleteOutline/>
                    </IconButton>
                </div>
            </div>

            <div className="cart-product-totalprice-container">
                <span className="card-product-totalprice">${cupcake?.price.toFixed(2)}</span>
            </div>

        </Card>
    )
}