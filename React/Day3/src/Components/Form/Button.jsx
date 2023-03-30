import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function OutlinedButtons({dataHandler}) {
  // const clickHandler = () => {
    
  // };
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" onClick={dataHandler}>
        Add
      </Button>
    </Stack>
  );
}
