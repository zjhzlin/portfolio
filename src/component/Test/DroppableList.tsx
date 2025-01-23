import React, { useState } from "react";
import { DndContext, useDraggable, DragEndEvent } from "@dnd-kit/core";
import { useVirtualizer } from "@tanstack/react-virtual";

interface Item {
  id: number;
  text: string;
}

const Draggable: React.FC<{ item: Item }> = ({ item }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: item.id.toString(),
  });

  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="p-4 border-b border-gray-300 bg-white cursor-grab"
      style={style}
    >
      {item.text}
    </div>
  );
};

const DroppableList: React.FC = () => {
  const [items, setItems] = useState(
    Array.from({ length: 1000 }, (_, i) => ({ id: i, text: `Item ${i}` }))
  );

  const parentRef = React.useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
    overscan: 5,
  });

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = items.findIndex(
        (item) => item.id.toString() === active.id
      );
      const newIndex = items.findIndex(
        (item) => item.id.toString() === over.id
      );

      const updatedItems = [...items];
      const [movedItem] = updatedItems.splice(oldIndex, 1);
      updatedItems.splice(newIndex, 0, movedItem);

      setItems(updatedItems);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div
        ref={parentRef}
        className="h-[400px] w-full overflow-y-auto border rounded-lg"
      >
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            position: "relative",
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const item = items[virtualRow.index];
            return (
              <div
                key={item.id}
                className="absolute top-0 left-0 w-full"
                style={{
                  transform: `translateY(${virtualRow.start}px)`,
                }}
              >
                <Draggable item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </DndContext>
  );
};

export default DroppableList;
