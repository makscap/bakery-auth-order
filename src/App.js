import "./App.css";
import CardBox from "./components/Card/Card";
import logo from "./images/bread.png";
import TableOfResults from "./components/TableOfResults/TableOfResults";
import React, { useState } from "react";

function App() {
  const [state, setState] = useState([]);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  return (
    <div className="App">
      <header
        style={{
          display: "flex",
          alignItems: "center",
          height: "50px",
          borderBottom: "1px solid darkgrey",
        }}
      >
        <img src={logo} alt="logo" width="40px" />
        <span style={{ fontWeight: "700" }}>BREAD</span>
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
