import { FC } from "react";
import {
  AddCircleOutlineOutlined,
  RemoveCircleOutlineOutlined,
} from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

interface Props {
  count: number;
}
export const ItemCounter: FC<Props> = ({ count }) => {
  return (
    <Box display="flex" alignItems="center">
      <IconButton>
        <RemoveCircleOutlineOutlined />
      </IconButton>
      <Typography sx={{ width: 40, textAlign: "center" }}>1</Typography>
      <IconButton>
        <AddCircleOutlineOutlined />
      </IconButton>
    </Box>
  );
};
