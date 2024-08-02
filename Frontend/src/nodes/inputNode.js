import { useState } from "react";
import { Handle, Position, useReactFlow } from "reactflow";
import { Node } from "./node";
import { Input } from "./input";
import { Select } from "./select";

export const InputNode = ({ id, data }) => {
  const reactFlowInstance = useReactFlow();
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  const handleRemoveNode = () => {
    reactFlowInstance.setNodes((nds) => nds.filter((node) => node.id !== id));
  };

  return (
    <Node name={"Input"} icon id={`${id}-value`} position={Position.Right} type="source">
      <div style={{ width: "100%", padding: "10px"}}>
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
            value={inputType}
            onChange={handleTypeChange}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </Select>
        </div>
      </div>
      <Handle type="source" position={Position.Right} id={`${id}-input`} />
    </Node>
  );
};
