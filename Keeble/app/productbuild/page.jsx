'use client';
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import ProductContainer from "@components/ProductContainer";

const FilterBar = ({ selected, handleSelection }) => {
    return (
        <Stack className="justify-evenly mt-1" direction="row" alignItems="center" spacing="2">
            <Chip
                label="Base"
                color={selected.includes("base") ? "primary" : "default"}
                onClick={() => handleSelection("base")}
            />
            <Chip
                label="PCB"
                color={selected.includes("pcb") ? "primary" : "default"}
                onClick={() => handleSelection("pcb")}
            />
            <Chip
                label="Switches"
                color={selected.includes("switches") ? "primary" : "default"}
                onClick={() => handleSelection("switches")}
            />
            <Chip
                label="Keycaps"
                color={selected.includes("keycaps") ? "primary" : "default"}
                onClick={() => handleSelection("keycaps")}
            />
            <Chip
                label="Accessories"
                color={selected.includes("accessories") ? "primary" : "default"}
                onClick={() => handleSelection("accessories")}
            />
        </Stack>
    );
};

const AssemblyItem = ({ product }) => {
    const handleBuy = () => {
        window.alert("redirected to seller");
    };

    return (
        <div className="flex flex-row items-center">
            <Card className="w-full h-[140px] flex flex-row justify-center items-center text-center">
            <CardMedia
                component="img"
                sx={{ height: 140 }}
                image={product.imageLink}
                title="dummy-image"
            />
            <div className="flex flex-col items-center text-center">
                <CardContent>
                <Typography variant="h7">{product.name}</Typography>
                </CardContent>
                <CardActions>
                <Button size="small" color="primary" onClick={handleBuy}>
                    Buy One
                </Button>
                </CardActions>
            </div>
            </Card>
        </div>
    );};

const ProductBuild = () => {
    const [products, setProducts] = useState([]);
    const [selected, setSelected] = useState([]);

    const handleAddToAssembly = (currentproduct) => {
        const nextProducts = products.map((product) => {
            if (product._id === currentproduct._id) {
                product.addedassembly = !product.addedassembly;
            }
            return product;
        });
        setProducts(nextProducts);
    };

    const handleSelection = (filter) => {
        const isSelected = selected.includes(filter);
        if (isSelected) {
            setSelected(
                selected.filter((selectedFilter) => selectedFilter !== filter)
            );
        } else {
            setSelected([...selected, filter]);
        }
    };

    const filterItems = (items) => {
        if (selected.length === 0) {
            return items;
        }
        return items.filter((product) => selected.some(r=> product.categories.includes(r)));
    };

    // Fetching the products from DB:
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('/api/products');
            const data = await response.json();
            await console.log(data);
            setProducts(data);

        }
        fetchProducts();
console.log(products);

    }, []); // The products should be in the products variable

    const ProductGrid = ({ text }) => {
        return (
            <div className="flex flex-col bg-card-black w-[full] min-h-[300px] m-2 p-2 text-[#d9d9d9] rounded shadow-lg">
                {text}
                <FilterBar selected={selected} handleSelection={handleSelection} />
                <div>
                    {products.map(product => {
                        return (<ProductContainer product={product}/>)
                    })}
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="flex flex-col bg-grid-black w-[50%] h-[85vh] rounded mt-5 ml-5 overflow-y-auto">
                <ProductGrid text="Step 1: Choose a base"/>
                <ProductGrid text="Step 2: Choose a switch"/>
                <ProductGrid text="Step 3: Choose keycaps"/>
                <ProductGrid text="Optional: Choose accessories"/>
            </div>
        </>
    )
}

export default ProductBuild;