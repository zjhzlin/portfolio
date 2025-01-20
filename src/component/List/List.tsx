import Item from "../Item/Item";
import "./list.css";

function List() {
  return (
    <ul className="todo-main">
      <Item />
      <Item />
    </ul>
  );
}

export default List;
