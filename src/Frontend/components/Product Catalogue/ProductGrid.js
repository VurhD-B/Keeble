import { Grid } from "@mui/material";
import FilterBar from "./FilterBar";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import dummyImage from "../../images/dummy-image.jpg";

const products = [
  {
    id: "1",
    name: "Full Size | 100%",
    type: "base",
    description:
      "Traditional Keys\nFunction Keys\n Arrow Keys\nFull-Size Number Pad\n \nFull Functionality\nGood for data entry\n \nLarge, takes up space ",
  },
  {
    id: "2",
    name: "Cherry MX Red",
    type: "switches",
    description: "Linear\n45g Actuation Force\n75g Bottom-Out Force",
  },
  {
    id: "3",
    name: "Akko Cool Gray Keycap Set",
    type: "keycaps",
    description:
      "132 Keys\nDouble Shot PBT Material\nCherry Profile\nMX Compatible\nCompatible up to 100% Keyboards",
  },
];

const ProductGrid = () => {
  const [selected, setSelected] = useState([]);

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
    return items.filter((item) => selected.includes(item.type));
  };

  return (
    <div>
      <FilterBar selected={selected} handleSelection={handleSelection} />
      <div className="flex flex-wrap space-x-2 p-2 rounded-md overflow-x-auto place-items-center">
        <Grid>
          <div className="flex flex-nowrap space-x-2 overflow-x-auto">
            {filterItems(products).map((product) => (
              <div className="flex-shrink-0 w-[10em] h-full">
                <Card className="w-full h-full flex flex-col justify-center items-center text-center">
                  <CardMedia
                    component="img"
                    sx={{ height: 140 }}
                    image={dummyImage}
                    title="dummy-image"
                  />
                  <CardContent>
                    <Typography variant="h6">{product.name}</Typography>
                    {product.description.split("\n").map((line, index) => (
                      <Typography key={index}>{line}</Typography>
                    ))}
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Add to Assembly Area
                    </Button>
                  </CardActions>
                </Card>
              </div>
            ))}
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default ProductGrid;
