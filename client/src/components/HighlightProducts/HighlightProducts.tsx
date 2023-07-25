import Card from "../Card/Card";
import CircularProgress from "@mui/material/CircularProgress";
import {
  HighlightProductsPropsType,
  ProductDataFields,
} from "../../types/DataTypes";
import useFetch from "../../hooks/useFetch";
import "./HighlightProducts.scss";

const HighlightProducts = ({ type }: HighlightProductsPropsType) => {
  const { data, loading, error } = useFetch<ProductDataFields[]>(
    `/api/products?populate=*&filters[type][$eq]=${type}`
  );

  return (
    <div className="featured-products">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          possimus cupiditate in, quos suscipit iure natus ratione esse non cum
          inventore molestiae expedita neque ullam praesentium blanditiis
          commodi ducimus eos placeat voluptates. A itaque exercitationem odio
          nulla dolore, facere minima.
        </p>
      </div>

      <div className="bottom">
        {error ? (
          <div className="error">An error occured.</div>
        ) : loading ? (
          <CircularProgress className="progress-bar" />
        ) : (
          Array.isArray(data) &&
          data.map((item) => <Card item={item} key={item.id} />)
        )}
      </div>
    </div>
  );
};

export default HighlightProducts;
