'use client';
import { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import BuildProductContainer from "@components/Containers/BuildProductContainer";
import Carousel from "@components/carousel";
import { useSession } from "next-auth/react";

const baseFilters = ["100%", "TKL", "75%", "65%", "60%"]
const switchesFilters = ["Linear", "Tactile", "Clicky"]
const keycapsFilters = ["ABS", "PBT", "OEM", "Cherry", "DSA"]
const accessoriesFilters = ["Cable", "Foam", "Lubricant", "Carrying Case", "Pullers", "Others"]

const FilterBar = ({ filters, selected, handleSelection }) => {
    return (
        <Stack className="justify-evenly mt-1" direction="row" alignItems="center" spacing="2">
            {filters.map(filter => {
                return (
                    <Chip
                        className={selected.includes(filter) ?
                            "bg-gradient-to-r from-warm-blue to-cool-blue" :
                            "bg-gray text-text-white"}
                        style={{
                            fontFamily: "Josefin Sans, sans-serif",
                        }}
                        label={filter}
                        onClick={() => handleSelection(filter)}
                    />
                )
            })}

        </Stack>
    );
};

const ProductBuild = () => {
    const [products, setProducts] = useState([]);
    const bases = products.filter((product) => product.categories[0] === "Base")
    const [baseselectedfilters, setBaseSelectedFilters] = useState([]);
    const keycaps = products.filter((product) => product.categories[0] === "Keycaps")
    const [keycapsselectedfilters, setKeycapsSelectedFilters] = useState([]);
    const switches = products.filter((product) => product.categories[0] === "Switches")
    const [switchesselectedfilters, setSwitchesSelectedFilters] = useState([]);
    const accessories = products.filter((product) => product.categories[0] === "Accessories")
    const [accessoriesselectedfilters, setAccessoriesSelectedFilters] = useState([]);

    //adds a selected product to Assembly Area
    const handleAddToAssembly = (currentproduct) => {
        const category = currentproduct.categories[0];

        if (category === "Accessories") {
            const nextProducts = products.map((product) =>
                product._id === currentproduct._id ? { ...product, addedassembly: !product.addedassembly } : product
            );
            setProducts(nextProducts);
        } else {
            const nextProducts = products.map((product) =>
                product.categories[0] === category ? { ...product, addedassembly: product._id === currentproduct._id } : product
            );
            setProducts(nextProducts);
        }
    };

    // Fetching the products from DB:
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('/api/products');
            const data = await response.json();
            await console.log(data);
            setProducts(data);
            // console.log(products);
        }
        fetchProducts();
    }, []); // The products should be in the products variable

    const ProductGrid = ({ filters, products, text, btnaction, btnactionfunc, selected, setSelected }) => {
        //handles filter bar filters
        const handleFiltersSelection = (filter) => {
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
            // console.log(items);
            if (selected.length === 0) {
                return items;
            }
            return items.filter((product) => selected.every(r => product.categories.includes(r)));
            // return items;
        };
        const filteredproducts = filterItems(products);
        return (
            <div className="flex flex-col bg-card-black min-h-[400px] m-2 p-2 overflow-y-hidden rounded shadow-lg ">
                <div className="flex flex-col ">
                    {text}
                    {filters ?
                        <FilterBar className="sticky" filters={filters} selected={selected} handleSelection={handleFiltersSelection} />
                        : null}
                </div>
                <div className="gap-3 mt-4 w-full">
                    <Carousel>
                        {filteredproducts.map((product) => {
                            return (
                                <div className="carousel-item text-center relative w-72 h-full snap-start">
                                    <BuildProductContainer
                                        product={product}
                                        btnaction={product.addedassembly ? "Added" : "Add"}
                                        btnactionfunc={btnactionfunc}>
                                    </BuildProductContainer>
                                </div>

                            )
                        })}
                    </Carousel>
                </div>


            </div>

        )
    }






    const AssemblyGrid = ({ products, text, btnaction, btnactionfunc }) => {
        const {data:session} = useSession();
        const email = session?.user.email;
        const [buildName, setBuildName] = useState("")
        const [savedBuild, setSavedBuild] = useState([])
        
        const saveBuild = async (e) => {
            e.preventDefault();
            const savedProducts = products.filter((product) => product.addedassembly).map((product) => product._id);
            
            setSavedBuild(savedProducts);

            try {
                const response = await fetch('api/builds/new', {
                    method: 'POST',
                    body: JSON.stringify({
                        name: buildName,
                        email: email,
                        parts: savedProducts
                    })
                })
                if(response.ok) {
                    alert('The build has been sucessfully saved');
                    window.location.reload();
                }
            } catch(error) {
                console.log(error);
            }
        }

        return (
            <div className="flex flex-col bg-card-black min-h-[300px] m-2 p-2 overflow-y-hidden rounded shadow-lg">
                {text}
                <form onSubmit={saveBuild}> 
                    <label>
                        <input type="text" value={buildName} onChange={(e) => setBuildName(e.target.value)} placeholder="Name your build..." required/>
                    </label>
                    <button className="fancy_button" type="submit">Save Build</button>
                </form>
                <div className="flex flex-col gap-3 mt-4 min-h-full min-w-full flex-wrap overflow-x-auto">
                    {products.map((product) => {
                        if (product.addedassembly)
                            return (
                                <BuildProductContainer className="min-w-[200px] flex-shrink-0" product={product} btnaction={"Remove"} btnactionfunc={btnactionfunc} />
                            )
                    })}
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-row">
            <div className="flex flex-col bg-grid-black w-[50%] h-[85vh] rounded mt-5 ml-5 overflow-y-auto">
                <ProductGrid
                    filters={baseFilters}
                    products={bases}
                    selected={baseselectedfilters}
                    setSelected={setBaseSelectedFilters}
                    text="Step 1: Choose a base"
                    btnactionfunc={handleAddToAssembly} />
                <ProductGrid
                    filters={switchesFilters}
                    products={switches}
                    selected={switchesselectedfilters}
                    setSelected={setSwitchesSelectedFilters}
                    text="Step 2: Choose a switch"
                    btnactionfunc={handleAddToAssembly} />
                <ProductGrid
                    filters={keycapsFilters}
                    products={keycaps}
                    selected={keycapsselectedfilters}
                    setSelected={setKeycapsSelectedFilters}
                    text="Step 3: Choose keycaps"
                    btnactionfunc={handleAddToAssembly} />
                <ProductGrid
                    filters={accessoriesFilters}
                    products={accessories}
                    selected={accessoriesselectedfilters}
                    setSelected={setAccessoriesSelectedFilters}
                    text="Optional: Choose accessories"
                    btnactionfunc={handleAddToAssembly} />
            </div>
            <div className="flex flex-col bg-grid-black w-[50%] h-[85vh] rounded mt-5 ml-5 overflow-y-auto">
                <AssemblyGrid products={products} text="Assembly area" btnactionfunc={handleAddToAssembly} />
            </div>
        </div>
    )
}

export default ProductBuild;