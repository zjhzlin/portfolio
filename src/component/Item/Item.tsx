import "./item.css";

function Item() {
  // style={{ display: "none" }}>
  return (
    <li>
      <label>
        <input type="checkbox" />
        <span>I am a item</span>
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>
  );
}

export default Item;
