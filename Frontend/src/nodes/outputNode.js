import { useState } from "react";
import { Handle, Position, useReactFlow } from "reactflow";
import { Node } from "./node";
import { Input } from "./input";
import { Select } from "./select";

export const OutputNode = ({ id, data }) => {
  const reactFlowInstance = useReactFlow();
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  const handleRemoveNode = () => {
    reactFlowInstance.setNodes((nds) => nds.filter((node) => node.id !== id));
  };

  return (
    <Node name={"Output"} icon id={`${id}-value`} position={Position.Left} type="target">
      <div style={{ width: "100%", padding: "10px" }}>
        <button
          onClick={handleRemoveNode}
          style={{
            position: "absolute",
            top: "5px",
            right: "5px",
            border: "none",
            background: "none",
            cursor: "pointer",
            fontSize: "16px",
            color: "#888"
          }}
        >
          ✕
        </button>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <Input
            label={"Name:"}
            type={"text"}
            value={currName}
            onChange={handleNameChange}
          />
          <Select
            label={"Type:"}
            value={outputType}
            onChange={handleTypeChange}
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </Select>
          </div>
          </div>
          <Handle type="target" position={Position.Left} id={`${id}-input`} />
          <Handle type="source" position={Position.Right} id={`${id}-output`} />
        </Node>
        );
};
