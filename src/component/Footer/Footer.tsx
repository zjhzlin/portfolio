import "./footer.css";

function Footer() {
  return (
    <div className="todo-footer">
      <label>
        <input type="checkbox" />
      </label>
      <span>
        <span>Done</span> / All 2
      </span>
      <button className="btn btn-danger">Delete all done tasks</button>
    </div>
  );
}

export default Footer;
