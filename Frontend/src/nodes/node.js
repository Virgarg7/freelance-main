// node.js

import { Handle } from "reactflow";
import { Icons } from "../icon";
export const Node = ({
  id,
  position,
  children,
  name,
  icon = true,
  asChild = false,
  type,
}) => {
  return (
    <div
      style={{
        minwidth: 200,
        boxShadow: "0px 0px 5px #58709d ",
        padding: "10px",
        borderRadius: "5px",
        background: "white",
      }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          fontSize: "14px",
          fontWeight: "500",
          color: "#5f71d5",
        }}>
        {icon && <Icons name={name.toLowerCase()} />}
        <span>{name}</span>
      </div>
      <div style={{ padding: "10px", display: "grid", gap: "10px" }}>
        {children}
      </div>
      {!asChild && (
        <Handle type={type} position={position} id={id} color="red" />
      )}
    </div>
  );
};
