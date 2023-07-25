import CircularProgress from "@mui/material/CircularProgress";
import Card from "../Card/Card";
import { ListPropsType, ProductDataFields } from "../../types/DataTypes";
import useFetch from "../../hooks/useFetch";
import "./List.scss";

const List = ({ category, filterParams }: ListPropsType) => {
  const catFilterParams = `&filters[categories][title][$eq]=${category}`;

  const subCatFilterParams = filterParams?.selectedSubCats
    ?.map((subCat) => `&filters[sub_categories][title][$eq]=${subCat}`)
    .join("");

  const priceFilterParams = `&filters[newPrice][$gte]=${filterParams?.price[0]}&filters[newPrice][$lte]=${filterParams?.price[1]}`;

  const sortByParams = filterParams?.sortBy
    ? `&sort=newPrice:${filterParams?.sortBy}`
    : ``;

  const { data, loading, error } = useFetch<ProductDataFields[]>(
    `/api/products?populate=*${catFilterParams}${subCatFilterParams}${priceFilterParams}${sortByParams}`
  );

  return (
    <div className="list">
      {error ? (
        <div className="error">An error occured.</div>
      ) : loading ? (
        <CircularProgress className="progress-bar" />
      ) : (
        Array.isArray(data) &&
        data?.map((item) => <Card item={item} key={item.id} />)
      )}
    </div>
  );
};

export default List;
