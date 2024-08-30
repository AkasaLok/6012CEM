import { Box, Button, Card, CardActions, CardContent, CardMedia, TextField, Typography } from "@mui/material";
import { Cupcake } from "../models/cupcakes";
import "../components/css/cupcake.css"
import { useState } from "react";

interface CupcakeCardProps{
    cupcake: Cupcake
    onSelectCupcake: (product: Cupcake, amount: number) => void
    onOpenCupcakeDetail: (product: Cupcake) => void
}

export function CupcakeCard(props: CupcakeCardProps){
    const [amount, setAmount] = useState<number>(1);
    let cupcake = props.cupcake;

    const handleSelectCupcake = () => {
        props.onSelectCupcake(props.cupcake, amount);
    }

    const handleChangeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {

        var oldAmount = amount;

        if(!/[0-9]/.test(event.target.value)){
            setAmount(oldAmount);
            return;
        }

        if(parseInt(event.target.value) <= 0){
            setAmount(oldAmount);
            return;
        }

        setAmount(parseInt(event.target.value));
    }

    const handleDetail = () => {
        props.onOpenCupcakeDetail(props.cupcake);
    }

    return(
        <Card className="cupcake-card" sx={{
            display: "flex",
            flexDirection: "column",
            boxShadow: "none",
            border: "1px solid #3A3A3A",
        }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <CardMedia
                    sx={{height: 250, width: 195, objectFit: 'contain', paddingTop: "5px", paddingBottom: "5px"}}
                    component="img"
                    image={cupcake.image}
                    title={cupcake.name}
                    onClick={handleDetail}
                />
            </Box>
            <CardContent sx={{paddingBottom: 0}}>
                <Typography gutterBottom variant="body1" color="text.secondary" sx={{lineHeight: 1.2, fontFamily: "'SeoulNamsan', sans-serif", minHeight: "38.4px"}}>
                    {cupcake.name}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <div className="cupcake-card-actioncontainer">
                    <Typography sx={{fontFamily: "'SeoulNamsan', sans-serif"}}>
                        ${cupcake.price.toFixed(2)} x 
                    </Typography>
                    <TextField className="cupcake-card-textfield"
                        hiddenLabel
                        size="small"
                        value={amount}
                        onKeyDown={(event) => {
                            if (!/[0-9]/.test(event.key) && event.key !== 'Backspace') 
                            {
                                event.preventDefault();
                            }
                        }}
                        onChange={handleChangeAmount}
                        inputProps={{
                            min: 1,
                            max: 1,
                            step: 1,
                            maxLength: 2,
                            style: { 
                                padding: 0, 
                                textAlign: "center", 
                            }
                        }}
                        sx={
                        {
                            paddingTop: "2.5px",
                            paddingLeft: "5px",
                            paddingRight: "10px"
                        }}
                    />
                    <Button
                        size="small"
                        variant="contained"
                        sx={{ 
                            height: "25px",
                            fontSize: "12px",
                            color: "#000000",
                            backgroundColor: "#F6A6C1",
                            textTransform: "none",
                            boxShadow: "none",
                            "&:hover": {
                                color: "#000000",
                                backgroundColor: "#D48EA6",
                                boxShadow: "none"
                            }
                        }}
                        onClick={handleSelectCupcake}
                    >
                        Add To Cart
                    </Button>
                </div>
            </CardActions>
        </Card>
    )
}