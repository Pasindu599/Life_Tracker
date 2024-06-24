import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Area } from "recharts";
import { useGlobalContextProvider } from "@/app/ContextApi";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip({
  onChange,
}: {
  onChange: (selectedAreasItems: any) => void;
}) {
  const theme = useTheme();
  const { openTaskObject } = useGlobalContextProvider();
  const { openTask } = openTaskObject;
  const { allAreasObject } = useGlobalContextProvider();
  const { allAreas } = allAreasObject;

  const [selectedAreas, setSelectedAreas] = React.useState<string[]>([]);
  const [selectedAreasItems, setSelectedAreaItems] = React.useState<any>([]);

  const handleChange = (event: SelectChangeEvent<typeof selectedAreas>) => {
    const {
      target: { value },
    } = event;

    setSelectedAreas(typeof value === "string" ? value.split(",") : value);
  };

  React.useEffect(() => {
    if (openTask === true) {
      setSelectedAreas([]);
    }
  }, [openTask]);

  const filteredAreas = allAreas.filter((area) => area.name !== "All");

  React.useEffect(() => {
    const selectedAreaObjects = selectedAreas.map((selectedArea) => {
      return allAreas.find((area) => area.name === selectedArea);
    });

    setSelectedAreaItems(selectedAreaObjects);
  }, [selectedAreas]);

  React.useEffect(() => {
    onChange(selectedAreasItems);
  }, [selectedAreasItems]);

  return (
    <div>
      <FormControl
        sx={{
          m: 1,
          width: 300,
          "& .Mui-focused .MuiInputLabel-root": {
            color: "white",
          },
          "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
        }}
      >
        <InputLabel
          id="demo-multiple-chip-label"
          sx={{
            "&.Mui-focused": {
              color: "white",
            },
          }}
        >
          Choose Your Area
        </InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selectedAreas}
          onChange={handleChange}
          input={
            <OutlinedInput
              id="select-multiple-chip"
              label="Chip"
              sx={{
                "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
              }}
            />
          }
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {filteredAreas.map((area) => (
            <MenuItem
              key={area.id}
              value={area.name}
              style={getStyles(area.name, selectedAreas, theme)}
            >
              <FontAwesomeIcon
                className="text-white"
                icon={area.icon}
                style={{
                  marginRight: 8,
                }}
              />
              {area.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
