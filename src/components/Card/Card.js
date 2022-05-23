import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import data from "../../data";

export default function CardBox({
  state,
  setState,
  total,
  setTotal,
  totalQuantity,
  setTotalQuantity,
}) {
  // const [data, setData] = useState([]);
  const [breadZhitniy, setBreadZhitniy] = useState(0);
  const [breadPoloninskiy, setBreadPoloninskiy] = useState(0);
  const [breadBlack, setBreadBlack] = useState(0);
  const [breadHome, setBreadHome] = useState(0);
  const [breadArtizansky, setBreadArtizansky] = useState(0);
  const [breadDerevensky, setBreadDerevensky] = useState(0);

  // useEffect(() => {
  //   fetch("http://localhost:3000/items")
  //     .then((r) => r.json())
  //     .then(setData);
  // }, []);

  const setStatePlus = (e) => {
    let check = state.some((elem) => elem.id === e.id);

    switch (e.name) {
      case "Bakery Zhitny":
        if (check) {
          const newState = state.filter((elem) => elem.id !== e.id);
          setState([...newState, { ...e, quantity: breadZhitniy + 1 }]);
        }

        if (!check) {
          setState([...state, { ...e, quantity: breadZhitniy + 1 }]);
        }

        return setBreadZhitniy(breadZhitniy + 1);

      case "Bakery Poloninsky":
        if (check) {
          const newState = state.filter((elem) => elem.id !== e.id);
          setState([...newState, { ...e, quantity: breadPoloninskiy + 1 }]);
        }

        if (!check) {
          setState([...state, { ...e, quantity: breadPoloninskiy + 1 }]);
        }

        return setBreadPoloninskiy(breadPoloninskiy + 1);

      case "Bakery Black":
        if (check) {
          const newState = state.filter((elem) => elem.id !== e.id);
          setState([...newState, { ...e, quantity: breadBlack + 1 }]);
        }

        if (!check) {
          setState([...state, { ...e, quantity: breadBlack + 1 }]);
        }

        return setBreadBlack(breadBlack + 1);

      case "Bakery Home":
        if (check) {
          const newState = state.filter((elem) => elem.id !== e.id);
          setState([...newState, { ...e, quantity: breadHome + 1 }]);
        }

        if (!check) {
          setState([...state, { ...e, quantity: breadHome + 1 }]);
        }

        return setBreadHome(breadHome + 1);

      case "Bakery Artizansky":
        if (check) {
          const newState = state.filter((elem) => elem.id !== e.id);
          setState([...newState, { ...e, quantity: breadArtizansky + 1 }]);
        }

        if (!check) {
          setState([...state, { ...e, quantity: breadArtizansky + 1 }]);
        }

        return setBreadArtizansky(breadArtizansky + 1);

      case "Bakery Derevensky":
        if (check) {
          const newState = state.filter((elem) => elem.id !== e.id);
          setState([...newState, { ...e, quantity: breadDerevensky + 1 }]);
        }

        if (!check) {
          setState([...state, { ...e, quantity: breadDerevensky + 1 }]);
        }

        return setBreadDerevensky(breadDerevensky + 1);

      default:
        return e;
    }
  };

  const setStateMinus = (e) => {
    let check = state.some((elem) => elem.id === e.id);
    let haveInState = state.filter((elem) => elem.id === e.id);

    switch (e.name) {
      case "Bakery Zhitny":
        if (check) {
          setTotal(total - e.price);
          setTotalQuantity(totalQuantity - 1);
        }
        if (breadZhitniy > 1) {
          if (check) {
            const newState = state.filter((elem) => elem.id !== e.id);
            setState([...newState, { ...e, quantity: breadZhitniy - 1 }]);
          }

          if (!check) {
            setState([...state, { ...e, quantity: breadZhitniy - 1 }]);
          }

          return setBreadZhitniy(breadZhitniy - 1);
        }

        if (breadZhitniy === 1) {
          if (check) {
            const newState = state.filter((elem) => elem.id !== e.id);
            setState([...newState]);
          }

          return setBreadZhitniy(0);
        }

        return e;

      case "Bakery Poloninsky":
        if (check) {
          setTotal(total - e.price);
          setTotalQuantity(totalQuantity - 1);
        }
        if (breadPoloninskiy > 1) {
          if (check) {
            const newState = state.filter((elem) => elem.id !== e.id);
            setState([...newState, { ...e, quantity: breadPoloninskiy - 1 }]);
          }

          if (!check) {
            setState([...state, { ...e, quantity: breadPoloninskiy - 1 }]);
          }

          return setBreadPoloninskiy(breadPoloninskiy - 1);
        }

        if (breadPoloninskiy === 1) {
          if (check) {
            const newState = state.filter((elem) => elem.id !== e.id);
            setState([...newState]);
          }

          return setBreadPoloninskiy(0);
        }

        return e;

      case "Bakery Black":
        if (check) {
          setTotal(total - e.price);
          setTotalQuantity(totalQuantity - 1);
        }
        if (breadBlack > 1) {
          if (check) {
            const newState = state.filter((elem) => elem.id !== e.id);
            setState([...newState, { ...e, quantity: breadBlack - 1 }]);
          }

          if (!check) {
            setState([...state, { ...e, quantity: breadBlack - 1 }]);
          }

          return setBreadBlack(breadBlack - 1);
        }
        if (breadBlack === 1) {
          if (check) {
            const newState = state.filter((elem) => elem.id !== e.id);
            setState([...newState]);
          }

          return setBreadBlack(0);
        }

        return e;

      case "Bakery Home":
        if (check) {
          setTotal(total - e.price);
          setTotalQuantity(totalQuantity - 1);
        }
        if (breadHome > 1) {
          if (check) {
            const newState = state.filter((elem) => elem.id !== e.id);
            setState([...newState, { ...e, quantity: breadHome - 1 }]);
          }

          if (!check) {
            setState([...state, { ...e, quantity: breadHome - 1 }]);
          }

          return setBreadHome(breadHome - 1);
        }

        if (breadHome === 1) {
          if (check) {
            const newState = state.filter((elem) => elem.id !== e.id);
            setState([...newState]);
          }

          return setBreadHome(0);
        }
        return e;

      case "Bakery Artizansky":
        if (check) {
          setTotal(total - e.price);
          setTotalQuantity(totalQuantity - 1);
        }
        if (breadArtizansky > 1) {
          if (check) {
            const newState = state.filter((elem) => elem.id !== e.id);
            setState([...newState, { ...e, quantity: breadArtizansky - 1 }]);
          }

          if (!check) {
            setState([...state, { ...e, quantity: breadArtizansky - 1 }]);
          }

          return setBreadArtizansky(breadArtizansky - 1);
        }

        if (breadArtizansky === 1) {
          if (check) {
            const newState = state.filter((elem) => elem.id !== e.id);
            setState([...newState]);
          }

          return setBreadArtizansky(0);
        }
        return e;

      case "Bakery Derevensky":
        if (check) {
          setTotal(total - e.price);
          setTotalQuantity(totalQuantity - 1);
        }
        if (breadDerevensky > 1) {
          if (check) {
            const newState = state.filter((elem) => elem.id !== e.id);
            setState([...newState, { ...e, quantity: breadDerevensky - 1 }]);
          }

          if (!check) {
            setState([...state, { ...e, quantity: breadDerevensky - 1 }]);
          }

          return setBreadDerevensky(breadDerevensky - 1);
        }

        if (breadDerevensky === 1) {
          if (check) {
            const newState = state.filter((elem) => elem.id !== e.id);
            setState([...newState]);
          }

          return setBreadDerevensky(0);
        }
        return e;

      default:
        return e;
    }
  };

  return (
    <>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          height: "300px",
          flexWrap: "wrap",
          maxWidth: 500,
        }}
      >
        {data &&
          data.map((e) => (
            <li
              key={e.id}
              style={{
                display: "flex",
                marginRight: "10px",
                marginBottom: "20px",
              }}
            >
              <Card sx={{ maxWidth: 150 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={e.photo}
                  alt={e.name}
                />
                <CardContent sx={{ height: "80px" }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    value={e.name}
                  >
                    {e.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    value={e.price}
                  >
                    Price: {e.price} UAH
                  </Typography>
                </CardContent>
                <form>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={(el) => {
                        setStateMinus(e);
                      }}
                    >
                      <FaMinus />
                    </Button>
                    <Button
                      size="small"
                      onClick={(el) => {
                        setStatePlus(e);
                        setTotal(total + e.price);
                        setTotalQuantity(totalQuantity + 1);
                      }}
                    >
                      <FaPlus />
                    </Button>
                  </CardActions>
                </form>
              </Card>
            </li>
          ))}
      </ul>
    </>
  );
}
