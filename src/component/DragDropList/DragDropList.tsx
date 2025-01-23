import DroppableList from "../Test/DroppableList";

function DragDropList() {
  return (
    <>
      <div className="p-8">
        <h1 className="text-lg font-bold mb-4">
          Virtualized Drag-and-Drop List
        </h1>
        <DroppableList />
      </div>

      {/* <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Menu projects={projects} />
    </div> */}
    </>
  );
}

export default DragDropList;
