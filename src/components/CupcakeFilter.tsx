import "../components/css/cupcake.css";
import { Checkbox, FormControlLabel, FormGroup, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export enum SortState {
    None = 0,
    Hot = 1,
    PriceLowToHigh = 2,
    PriceHighToLow = 3,
}

interface FilterProps{
    onFilterChange: (sort: SortState, category: { holiday: boolean, specialEvent: boolean, custom: boolean}) => void;
    amount: number;
}

export function CupcakeFilter({ onFilterChange, amount }: FilterProps){

    const [sort, setSortState] = useState(SortState.None);
    const [category, setCategory] = useState({
        holiday: false,
        specialEvent: false,
        custom: false
    });

    useEffect(() => {
        handleFilterChange();
    }, [sort, category])

    var { holiday, specialEvent, custom } = category;
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategory({
            ...category,
            [event.target.name]: event.target.checked
        })
    }

    const handleSort = (event: SelectChangeEvent) => {
        setSortState(parseInt(event.target.value));
    }

    const handleFilterChange = () => {
        onFilterChange(sort, category);
    }

    return (
        <div className="cupcake-filter-container">
            <div className="cupcake-filter-sidecontainer">
                <span className="cupcake-filter-text">Category:</span>
                <FormGroup row sx={{justifyContent: "center"}}>
                    <FormControlLabel
                        control={
                            <Checkbox checked={holiday} onChange={handleChange} name="holiday"/>
                        }
                        label={
                            <Typography color="#6b6b6b">
                                Holiday
                            </Typography>
                        }
                        style={{ marginRight: '8px'}}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={specialEvent} onChange={handleChange} name="specialEvent"/>
                        }
                        label={
                            <Typography color="#6b6b6b">
                                Special Event
                            </Typography>
                        }
                        style={{ marginLeft: '8px'}}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={custom} onChange={handleChange} name="custom"/>
                        }
                        label={
                            <Typography color="#6b6b6b">
                                Custom
                            </Typography>
                        }
                        style={{ marginLeft: '8px'}}
                    />
                </FormGroup>
            </div>
            <div className="cupcake-filter-sidecontainer">
                <span className="cupcake-filter-text">Sort by:</span>
                <Select
                    className="cupcake-filter-sort"
                    value={sort.toString()}
                    size="small"
                    sx={{
                        height: "35px",
                        width: "225px",
                        top: "3px",
                        textAlign: "start"
                    }}
                    onChange={handleSort}
                >
                    <MenuItem value={SortState.None}>
                        Select an options
                    </MenuItem>
                    <MenuItem value={SortState.Hot}>Best Selling</MenuItem>
                    <MenuItem value={SortState.PriceLowToHigh}>Price, Low to High</MenuItem>
                    <MenuItem value={SortState.PriceHighToLow}>Price, High to Low</MenuItem>
                </Select>
                <span className="cupcake-filter-text" style={{paddingLeft: "80px", minWidth: "100px", justifyContent: "center"}}>{amount} Product</span>
            </div>
        </div>
        
    )
}