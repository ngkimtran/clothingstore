import { Link, useParams } from "react-router-dom";
import { SingleProductPropsType } from "../../types/DataTypes";
import "./Card.scss";

const Card = ({ item }: SingleProductPropsType) => {
  const { category } = useParams();

  return (
    <Link className="link" to={`/products/${category}/${item.id}`}>
      <div className="card">
        <div className="images">
          {item.attributes?.images?.data ? (
            <>
              {item.attributes.isNew && <span>New season</span>}
              {item.attributes.images.data.map((image) => (
                <img
                  src={
                    process.env.REACT_APP_CLOTHINGSTORE_API_URL +
                    image.attributes.url
                  }
                  alt=""
                  key={image.id}
                />
              ))}
            </>
          ) : (
            <div>No data received.</div>
          )}
        </div>

        <h2>{item.attributes.title}</h2>

        <div className="prices">
          {item.attributes.oldPrice && (
            <h3 className="old">${item.attributes.oldPrice}</h3>
          )}
          <h3 className="new">${item.attributes.newPrice}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
