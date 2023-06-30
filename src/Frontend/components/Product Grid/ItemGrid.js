import Item from "./Item";
import Grid from "@mui/material/Grid";
import "./ItemGrid.css";

const ItemGrid = () => {
  return (
    <Grid className="grid" container spacing={5}>
      <Grid item xs={3}>
        <Item text={"item here"}></Item>
      </Grid>
      <Grid item xs={3}>
        <Item text={"item here"}></Item>
      </Grid>
      <Grid item xs={3}> 
        <Item text={"item here"}></Item>
      </Grid>
      <Grid item xs={3}>
        <Item text={"item here"}></Item>
      </Grid>
    </Grid>
  );
};

export default ItemGrid;
