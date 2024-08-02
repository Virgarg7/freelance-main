// draggableNode.js

import { Icons } from "./icon";

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      style={{
        cursor: "grab",
        minWidth: "80px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        borderRadius: "8px",
        backgroundColor: "#ffffff",
        justifyContent: "center",
        flexDirection: "column",
        border: "1px solid #d9d9d9",
        boxShadow: "inset 8px 8px 16px #d9d9d9, inset -8px -8px 16px #ffffff",
      }}
      draggable>
      <Icons name={label.toLowerCase()} size={20} color={"#1c2536"} />
      <span style={{ color: "#1c2536", fontWeight: 500 }}>{label}</span>
    </div>
  );
};
