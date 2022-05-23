import "./App.css";
import CardBox from "./components/Card/Card";
import logo from "./images/bread.png";
import TableOfResults from "./components/TableOfResults/TableOfResults";
import React, { useState } from "react";
import Button from "@mui/material/Button";

function App() {
  const [state, setState] = useState([]);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const showApi = () => {
    return console.log(state);
  };

  return (
    <div className="App">
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "50px",
          borderBottom: "1px solid darkgrey",
        }}
      >
        <div>
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              height: "50px",
              borderBottom: "1px solid darkgrey",
              marginLeft: "10px",
              textDecoration: "none",
              color: "black",
            }}
          >
            <img src={logo} alt="logo" width="40px" />
            <span style={{ fontWeight: "700", marginLeft: "10px" }}>BREAD</span>
          </a>
        </div>
        <div style={{ marginRight: "10px" }}>
          <Button variant="outlined" onClick={showApi}>
            POST (console!)
          </Button>
        </div>
      </header>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CardBox
          state={state}
          setState={setState}
          total={total}
          setTotal={setTotal}
          quantity={quantity}
          setQuantity={setQuantity}
          setTotalQuantity={setTotalQuantity}
          totalQuantity={totalQuantity}
        />
        <TableOfResults
          state={state}
          setState={setState}
          total={total}
          setTotal={setTotal}
          quantity={quantity}
          setQuantity={setQuantity}
          totalQuantity={totalQuantity}
        />
      </div>
    </div>
  );
}

export default App;
