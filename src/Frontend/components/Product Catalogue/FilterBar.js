import { useState } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const FilterBar = () => {
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

  return (
    <Stack direction="row">
      <Chip
        label="Base"
        color={selected.includes("base") ? "primary" : "default"}
        onClick={() => handleSelection("base")}
      />
      <Chip
        label="PCB"
        color={(selected.includes("pcb") ? "primary" : "default")}
        onClick={() => handleSelection("pcb")}
      />
      <Chip
        label="Switches"
        color={(selected.includes("switches") ? "primary" : "default")}
        onClick={() => handleSelection("switches")}
      />
      <Chip
        label="Keycaps"
        color={(selected.includes("keycaps") ? "primary" : "default")}
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

export default FilterBar;
