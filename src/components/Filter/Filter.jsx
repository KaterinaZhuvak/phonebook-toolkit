import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/contactsSlice";

export default function Filter() {
  const dispatch = useDispatch();

  return (
<input
  className="filter"
  placeholder="Search contacts..."
  onChange={e => dispatch(changeFilter(e.target.value))}
/>
  );
}