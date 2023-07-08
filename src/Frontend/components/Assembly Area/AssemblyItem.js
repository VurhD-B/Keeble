import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import dummyImage from "../../images/dummy-image.jpg";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const AssemblyItem = () => {
  const handleClick = () => {
    console.log("remove from assembly area");
  };

  return (
    <div className="flex flex-row items-center">
      <Card
        className="w-full h-full flex flex-row justify-center items-center "
        sx={{ height: 140 }}
      >
        <CardMedia
          component="img"
          sx={{ height: 140 }}
          image={dummyImage}
          title="dummy-image"
        />

        <div className="w-full h-full flex flex-col justify-center items-center">
          <CardContent>
            <Typography>Full Size | 100%</Typography>
          </CardContent>
          <CardActions className="-mt-5">
            <Button size="small" color="primary">
              Buy One
            </Button>
          </CardActions>
        </div>
      </Card>
      <RemoveCircleOutlineIcon
        className="ml-2 cursor-pointer"
        style={{ color: "#424874" }}
        onClick={handleClick}
      />
    </div>
  );
};

export default AssemblyItem;
