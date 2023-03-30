import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import OutlinedButtons from "./Button";

export default function BasicTextFields({ setStudent }) {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");

  const dataHandler = (e) => {
    e.preventDefault();
    setStudent((prevState) => {
      // console.log(prevState);
      return [...prevState, { name, age }];
    });
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" value={name} onChange={(e) => setName(e.target.value)} label="Name" variant="filled" />
      <TextField id="filled-basic" value={age} onChange={(e) => setAge(e.target.value)} label="Age" variant="filled" />
      <OutlinedButtons dataHandler={dataHandler} />
    </Box>
  );
}
