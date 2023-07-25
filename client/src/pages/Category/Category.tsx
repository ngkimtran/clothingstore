import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Slider from "@mui/material/Slider";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import {
  FilterParamsPropsType,
  ProductDataFields,
} from "../../types/DataTypes";
import "./Category.scss";

const Category = () => {
  const [price, setPrice] = useState<number[]>([0, 1000]);
  const [sortBy, setSortBy] = useState<string>("");
  const [selectedSubCats, setSelectedSubCats] = useState<string[]>([]);

  const [filterParams, setFilterParams] = useState<FilterParamsPropsType>({
    price: [0, 1000],
    sortBy: "",
    selectedSubCats: [],
  });

  const { category } = useParams();

  const { data, loading, error } = useFetch<ProductDataFields[]>(
    `/api/sub-categories?filters[categories][title][$eq]=${category}`
  );

  const handleSelectedSubCatsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedSubCats(
      e.target.checked
        ? [...selectedSubCats, e.target.value]
        : selectedSubCats.filter((item) => item !== e.target.value)
    );
  };

  return (
    <div className="category">
      {error ? (
        <div className="error">An error occured.</div>
      ) : loading ? (
        <CircularProgress className="progress-bar" />
      ) : (
        Array.isArray(data) && (
          <>
            <div className="left">
              <div>
                <div className="filter-item">
                  <h2>Product categories</h2>
                  {data.map((item) => (
                    <div className="input-item" key={item.id}>
                      <input
                        type="checkbox"
                        id={item.attributes.title}
                        value={item.attributes.title}
                        onChange={handleSelectedSubCatsChange}
                      />
                      <label htmlFor={item.attributes.title}>
                        {item.attributes.title}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="filter-item">
                  <h2>Filter by price</h2>

                  <div className="input-item">
                    <Slider
                      size="small"
                      max={1000}
                      min={0}
                      value={price}
                      onChange={(_event, newValue: number | number[]) =>
                        setPrice(newValue as number[])
                      }
                      valueLabelDisplay="auto"
                      disableSwap
                    />
                  </div>
                </div>

                <div className="filter-item">
                  <h2>Sort by</h2>

                  <div className="input-item">
                    <input
                      type="radio"
                      name="price"
                      id="asc"
                      value="asc"
                      onChange={(e) => setSortBy(e.target.value)}
                    />
                    <label htmlFor="asc">Price (Lowest first)</label>
                  </div>

                  <div className="input-item">
                    <input
                      type="radio"
                      name="price"
                      id="desc"
                      value="desc"
                      onChange={(e) => setSortBy(e.target.value)}
                    />
                    <label htmlFor="asc">Price (Highest first)</label>
                  </div>
                </div>
              </div>

              <button
                className="filter-button"
                onClick={() =>
                  setFilterParams({ price, sortBy, selectedSubCats })
                }
              >
                Filter
              </button>
            </div>

            <div className="right">
              <img
                className="category-img"
                src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <List category={category} filterParams={filterParams} />
            </div>
          </>
        )
      )}
    </div>
  );
};

export default Category;
