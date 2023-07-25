import { useSelector, useDispatch } from "react-redux";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import { RootState } from "../redux/store";
import "./Cart.scss";
import { removeFromCart, resetCart } from "../redux/cartReducer";

const Cart = () => {
  const products = useSelector((state: RootState) => state.cart.products);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
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
              <div className="price">
                {item.quantity} x ${item.attributes.newPrice}
              </div>
            </div>
          </div>
          <DeleteOutlinedIcon
            fontSize="large"
            className="delete"
            onClick={() => dispatch(removeFromCart({ id: item.id }))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUB TOTAL</span>
        <span>
          $
          {products
            .reduce(
              (sum, item) => sum + item.attributes.newPrice * item.quantity,
              0
            )
            .toFixed(2)}
        </span>
      </div>

      <button className="checkout">PROCEED TO CHECKOUT</button>

      <div className="clear" onClick={() => dispatch(resetCart())}>
        <ClearIcon />
        <span>Clear shopping cart</span>
      </div>
    </div>
  );
};

export default Cart;
