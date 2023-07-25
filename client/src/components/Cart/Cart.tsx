import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import CircularProgress from "@mui/material/CircularProgress";
import ClearIcon from "@mui/icons-material/Clear";
import useFetch from "../../hooks/useFetch";
import { ProductDataFields } from "../../types/DataTypes";
import "./Cart.scss";

const Cart = () => {
  const { data, loading, error } = useFetch<ProductDataFields[]>(
    `/api/products?populate=*`
  );

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {error ? (
        <div className="error">An error occured.</div>
      ) : loading ? (
        <CircularProgress className="progress-bar" />
      ) : (
        Array.isArray(data) && (
          <>
            {data?.map((item) => (
              <div className="item" key={item.id}>
                <div className="section">
                  {item.attributes?.images?.data && (
                    <img
                      src={
                        process.env.REACT_APP_CLOTHINGSTORE_API_URL +
                        item.attributes?.images?.data[0]?.attributes?.url
                      }
                      alt=""
                    />
                  )}
                  <div className="details">
                    <h1>{item.attributes.title}</h1>
                    <p>
                      {item.attributes.desc.substring(0, 100)}
                      {item.attributes.desc.length > 100 ? "..." : ""}
                    </p>
                    <div className="price">1 x ${item.attributes.newPrice}</div>
                  </div>
                </div>
                <DeleteOutlinedIcon fontSize="large" className="delete" />
              </div>
            ))}
            <div className="total">
              <span>SUB TOTAL</span>
              <span>
                ${data.reduce((sum, item) => sum + item.attributes.newPrice, 0)}
              </span>
            </div>

            <button className="checkout">PROCEED TO CHECKOUT</button>

            <div className="clear">
              <ClearIcon />
              <span>Clear shopping cart</span>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default Cart;
