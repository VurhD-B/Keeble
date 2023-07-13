import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import dummyImage from "../../images/dummy-image.jpg";

const ProductItem = ({ product }) => {
  return (
    <div className="flex-shrink-0 w-[10em] h-full">
      <Card className="w-full h-full flex flex-col justify-center items-center">
        <CardMedia
          component="img"
          sx={{ height: 140 }}
          image={dummyImage}
          title="dummy-image"
        />
        <CardContent>
          <Typography>{product.name}</Typography>
          <Typography>{product.description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Add to Assembly Area
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductItem;
