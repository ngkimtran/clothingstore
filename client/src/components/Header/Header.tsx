import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Cart from "../Cart/Cart";
import { RootState } from "../redux/store";
import "./Header.scss";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const products = useSelector((state: RootState) => state.cart.products);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>

          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>

          <div className="item">
            <Link to="/products/women" className="link">
              Women
            </Link>
          </div>

          <div className="item">
            <Link to="/products/men" className="link">
              Men
            </Link>
          </div>

          <div className="item">
            <Link to="/products/children" className="link">
              Children
            </Link>
          </div>
        </div>

        <div className="center">
          <Link to="/" className="link">
            CLOTHINGSTORE
          </Link>
        </div>

        <div className="right">
          <div className="item">
            <Link to="/" className="link">
              Homepage
            </Link>
          </div>

          <div className="item">
            <Link to="/about" className="link">
              About
            </Link>
          </div>

          <div className="item">
            <Link to="/contact" className="link">
              Contact
            </Link>
          </div>

          <div className="item">
            <Link to="/stores" className="link">
              Stores
            </Link>
          </div>

          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>

      {open && <Cart />}
    </div>
  );
};

export default Header;
