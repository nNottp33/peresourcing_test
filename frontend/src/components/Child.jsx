import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

function Child(props) {
  return (
    <Stack direction="row" spacing={3}>
      <strong>Result: </strong>
      <Chip className="chip" label={props.resultNumber} />
    </Stack>
  );
}

export default Child;
