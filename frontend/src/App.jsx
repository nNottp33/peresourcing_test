import { useEffect, useReducer, Component } from "react";
import "./App.css";
import { Box, Container, Paper, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import axios from "axios";
import Configs from "./configs/Config";
import Child from "./components/Child";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, fibonucci: 0 };
  }

  getResultFibonacci = ({ number }) => {
    const config = {
      methods: "GET",
      url: `${Configs.uri}/calculate/fibonacci?number=${number}`,
    };

    axios(config).then((response) => {
      let result = response?.data?.result?.fibonucci || 0;
      this.setState((prevState) => {
        return {
          ...prevState,
          count: number,
          fibonucci: result,
        };
      });
    });
  };

  render() {
    return (
      <div className="App">
        <div className="app-box">
          <Container maxWidth="lg">
            <div className="calulate-section">
              <Box
                className="minus-control"
                sx={{ px: 1, py: 4, bgcolor: "#5f9be5" }}
              >
                <Fab
                  onClick={() =>
                    this.getResultFibonacci({
                      number: this.state.count - 1,
                    })
                  }
                  size="small"
                  className="minus-button"
                  aria-label="add"
                  sm={{ mx: 1, my: 4, color: "#ffffff", bgcolor: "#000000" }}
                >
                  <RemoveIcon />
                </Fab>
              </Box>
              <Box
                sm={{
                  px: 1,
                  py: 10,
                }}
              >
                <div className="monitor">
                  <div className="number-display">
                    <Child number={this.state.count} />
                  </div>
                  <div className="number-display">
                    <Child number={this.state.fibonucci} />
                  </div>
                </div>
              </Box>
              <Box
                className="plus-control"
                sx={{ px: 1, py: 4, bgcolor: "#ff5454 " }}
              >
                <Fab
                  onClick={() =>
                    this.getResultFibonacci({
                      number: this.state.count + 1,
                    })
                  }
                  size="small"
                  className="plus-button"
                  aria-label="add"
                >
                  <AddIcon />
                </Fab>
              </Box>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
