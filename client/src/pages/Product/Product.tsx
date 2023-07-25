import { useState } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { ProductDataFields } from "../../types/DataTypes";
import "./Product.scss";

const Product = () => {
  const { id } = useParams();
  const [selectedImg, setSelectedImg] = useState<number>(0);
  const [productQuantity, setProductQuantity] = useState<number>(1);

  const { data, loading, error } = useFetch<ProductDataFields>(
    `/api/products/${id}?populate=*`
  );
  // console.log(data);

  return (
    <div className="product">
      {error ? (
        <div className="error">An error occured.</div>
      ) : loading ? (
        <CircularProgress className="progress-bar" />
      ) : (
        !Array.isArray(data) && (
          <>
            <div className="left">
              <div className="images">
                {data?.attributes?.images?.data &&
                  data.attributes.images.data.map((image, index) => (
                    <img
                      src={
                        process.env.REACT_APP_CLOTHINGSTORE_API_URL +
                        image.attributes.url
                      }
                      alt=""
                      onClick={() => setSelectedImg(index)}
                    />
                  ))}
              </div>
              <div className="main-img">
                {data?.attributes?.images?.data && (
                  <img
                    src={
                      process.env.REACT_APP_CLOTHINGSTORE_API_URL +
                      data.attributes.images.data[selectedImg].attributes.url
                    }
                    alt=""
                  />
                )}
              </div>
            </div>

            <div className="right">
              <h1>{data?.attributes?.title}</h1>
              <span className="price">${data?.attributes?.newPrice}</span>
              <p>{data?.attributes?.desc}</p>

              <div className="quantity">
                <button
                  onClick={() =>
                    productQuantity === 1
                      ? 1
                      : setProductQuantity((prev) => prev - 1)
                  }
                >
                  -
                </button>
                {productQuantity}
                <button onClick={() => setProductQuantity((prev) => prev + 1)}>
                  +
                </button>
              </div>

              <button className="add">
                <AddShoppingCartIcon /> ADD TO CART
              </button>

              <div className="links">
                <div className="item">
                  <FavoriteBorderIcon /> ADD TO WISHLIST
                </div>
                <div className="item">
                  <BalanceIcon /> ADD TO COMPARE
                </div>
              </div>

              <div className="info">
                <span>Vendor: </span>
                <span>Product Type: </span>
                <span>Tag: </span>
              </div>

              <hr />

              <div className="info">
                <span>DESCRIPTION</span>
                <hr />
                <span>ADDITIONAL INFORMATION</span>
                <hr />
                <span>FAQ</span>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default Product;
