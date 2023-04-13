import React from "react";
import { Stack, Chip } from "@mui/material";

function Child(props) {
  return (
    <Stack style={{ justifyContent: "center" }} direction="row" spacing={1}>
      <Chip
        style={{ width: 150, textAlign: "center", backgroundColor: "#fcfcfc" }}
        label={props.number}
      />
    </Stack>
  );
}

export default Child;
