import { Grid } from "@mui/material";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import dummyImage from "../../images/dummy-image.jpg";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import AssemblyGrid from "./AssemblyGrid";

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

const FilterBar = ({ selected, handleSelection }) => {
  return (
    <Stack direction="row" alignItems="center" spacing="2">
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
    <div className="flex flex-row justify-evenly">
      <div className="ml-5 mb-3 border-spacing-1 bg-carolina-blue w-[50%] h-full overflow-x-auto rounded-md flex flex-col items-center justify-center">
        {/* FilterBar */}
        <div className="flex place-content-center mt-2">
          <FilterBar selected={selected} handleSelection={handleSelection} />
        </div>

        {/* Product Grid */}
        <div className="flex grow flex-wrap space-x-2 p-2 rounded-md overflow-x-auto place-items-center">
          <Grid>
            <div className="flex flex-nowrap space-x-2 overflow-x-auto h-full min-w-[50%] min-h-[80vh]">
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
                      {product.description.split("\n").map((line) => (
                        <Typography key={line.id}>{line}</Typography>
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

      {/* Assembly Grid */}
      <div className="ml-10 mr-5 pt-5 border-spacing-1 inline-block h-full text-center">
        <h2 className="mb-4">Assembly Area</h2>
        <div className="bg-carolina-blue p-4 rounded-md inline-block">
          <AssemblyGrid />
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
