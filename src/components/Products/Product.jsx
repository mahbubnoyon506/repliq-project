import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import CircleIcon from "@mui/icons-material/Circle";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Button } from "@mui/material";
import { ADD_TO_CART } from "../../state/ProductState/actionTypes";
import { useProducts } from "../../context/ProductProvider";
import ComponentLoader from "../loader/CoponentLoader";

const Product = () => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const [value, setValue] = React.useState(5);
  const { dispatch } = useProducts();
  const {
    state: { products, loading, error },
  } = useProducts();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setProduct(products.find((item) => item._id == id));
  }, [products, id]);

  if (loading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <ComponentLoader />;
  }

  return (
    <div>
      <div className="lg:grid grid-cols-2 gap-10 lg:p-20 md:p-10 p-5">
        <div className="w-96">
          <img src={product?.image} alt="" />
        </div>
        <div className="">
          <h2 className="text-2xl text-neutral">{product?.model}</h2>
          <p className="text-lg font-semibold py-3">{product?.price} Taka</p>
          <div className="">
            <Box
              sx={{
                "& > legend": { mt: 5 },
              }}
            >
              <Rating
                sx={{ fontSize: "20px" }}
                name="read-only"
                value={value}
                readOnly
              />
            </Box>
          </div>
          <p>
            {" "}
            <span className="text-sm text-success">
              <CircleIcon style={{ fontSize: "15px" }} />
            </span>{" "}
            In Stack
          </p>
          <div className="pt-5">
            <p className="text-neutral pt-2">{product?.keyFeature}</p>
          </div>

          <div className="w-48 my-5">
            <Button
              onClick={() => dispatch({ type: ADD_TO_CART, payload: product })}
              sx={{
                width: "100%",
                borderRadius: "0px",
                background: "#ff1e00",
                padding: "5px 20px",
                "&:hover": { backgroundColor: "#011B39" },
              }}
              variant="contained"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
