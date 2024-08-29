import { Col, Row } from "react-bootstrap";
import "../components/css/cupcake.css";
import { Category, Cupcake, cupcakeTemplateData } from "../models/cupcakes";
import { CupcakeCard } from "./CupcakeCard";
import { CupcakeFilter, SortState } from "./CupcakeFilter";

import { useEffect, useRef, useState } from "react";
import { useCookies } from "react-cookie";

export interface SelectedCupcake{
    cupcakeId: string;
    amount: number;
}

export function Cupcakes(){
    const [cookies, setCookie] = useCookies(['6012CEM-TorontoCupcake']);
    const [selectedCupcakes, setSelectedCupcakes] = useState<SelectedCupcake[]>([]);
    const cupcakeCookie = cookies['6012CEM-TorontoCupcake'];

    const [product, setProduct] = useState<Cupcake[]>([]);
    const [amount, setAmount] = useState<number>(0);

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

    const filterCupcakes = (sort: SortState, category: {holiday: boolean, specialEvent: boolean, custom: boolean}) => {
        var postFilter = cupcakeTemplateData;

        if (category.holiday){
            postFilter = postFilter.filter(cupcake => cupcake.category.includes(Category.Holidays));
        }

        if (category.specialEvent){
            postFilter = postFilter.filter(cupcake => cupcake.category.includes(Category.SpecialEvents));
        }

        if (category.custom){
            postFilter = postFilter.filter(cupcake => cupcake.category.includes(Category.Custom));
        }

        switch (sort){
            case SortState.Hot:
                const hotCupcakes = postFilter.filter(cupcake => cupcake.category.includes(Category.Hot))
                const nonHotCupcakes = postFilter.filter(cupcake => !cupcake.category.includes(Category.Hot))
                var sortedCupcake = [...hotCupcakes, ...nonHotCupcakes];
                setProduct(sortedCupcake);
                setAmount(sortedCupcake.length);
                return;
            case SortState.PriceLowToHigh:
                var sortedCupcake = [...postFilter].sort((a,b) => a.price - b.price);
                setProduct(sortedCupcake)
                setAmount(sortedCupcake.length);
                return;
            case SortState.PriceHighToLow:
                var sortedCupcake = [...postFilter].sort((a,b) => b.price - a.price);
                setProduct(sortedCupcake)
                setAmount(sortedCupcake.length);
                return;
        }

        setAmount(postFilter.length);
        setProduct(postFilter);
    }

    const handleSelectCupcake = (product: Cupcake, amount: number) => {
        const existingIndex = selectedCupcakes.findIndex(p => p.cupcakeId === product._id);

        if (existingIndex !== -1) {
            var updatedCupcakes = [...selectedCupcakes];
            updatedCupcakes[existingIndex].amount += amount;

            setSelectedCupcakes(updatedCupcakes);
        } else {
            var updatedCupcakes = [...selectedCupcakes, { cupcakeId: product._id, amount: amount}]
            setSelectedCupcakes(updatedCupcakes);
        }
    }

    return (
        <div className="cupcake-container">
            <span className="cupcake-title" style={{paddingBottom: 10}}>Cupcakes | Always Available</span>
            <span className="cupcake-text" style={{paddingLeft: 3}}>$3.75 each | $21.50 half dozen | $41.50 dozen</span>
            <br></br>

            <CupcakeFilter onFilterChange={filterCupcakes} amount={amount}/>
            <div className="cupcake-filter-line"/>
            <br></br>

            <div>
                <Row className="cupcake-card-container" style={{gap: 20}}>
                    {product.map((product, number) => (
                        <Col key={number} className="mb-4 ml-5 mr-5" xs='auto' sm='auto' md='auto' lg='auto'>
                            <CupcakeCard cupcake={product} onSelectCupcake={handleSelectCupcake}/>
                        </Col>
                    ))}
                </Row>
            </div>

        </div>
    )
}