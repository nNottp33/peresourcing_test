import { useState } from "react";
import "./App.css";
import { Box, TextField } from "@mui/material";
import axios from "axios";
import Child from "./components/Child";
import Configs from "./configs/Config";

function App() {
  const [result, setResult] = useState("");

  function getResultFibonacci(ev) {
    const config = {
      methods: "GET",
      url: `${Configs.uri}/calculate/fibonacci?number=${ev.target.value}`,
    };

    axios(config).then((response) => {
      let result = response?.data?.result?.fibonucci || 0;
      console.log("[DEBUG] Result: ", result);
      setResult(result);
    });
  }

  return (
    <div className="App">
      <div>
        <Box
          onChange={getResultFibonacci}
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            type="number"
            id="standard-basic"
            label="Enter number"
            variant="standard"
          />
        </Box>
      </div>
      <div className="result-component">
        <Child resultNumber={result} />
      </div>
    </div>
  );
}

export default App;
