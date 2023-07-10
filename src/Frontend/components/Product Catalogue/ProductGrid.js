import ProductItem from "./ProductItem";
import { Grid } from "@mui/material";
import FilterBar from "./FilterBar";

// const products = []

const ProductGrid = () => {
  return (
    <div>
      <FilterBar />
      <div className="flex flex-wrap space-x-2 p-2 rounded-md overflow-x-auto place-items-center">
        <Grid>
          <div className="flex flex-nowrap space-x-2 overflow-x-auto">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default ProductGrid;
