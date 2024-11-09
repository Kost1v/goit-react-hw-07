import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
  
  const selectNameFilter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Find contacts</p>
      <input
        className={css.searchInput}
        type="text"
        value={selectNameFilter}
        placeholder="Enter keyword to search"
        onChange={(event) => {
          const action = changeFilter(event.target.value);
          dispatch(action);
        }}
      />
    </div>
  );
};

export default SearchBox;
