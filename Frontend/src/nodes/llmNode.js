import { useState } from "react";
import { Handle, Position, useReactFlow } from "reactflow";
import { Node } from "./node";
import { Select } from "./select";

export const LLMNode = ({ id, data }) => {
  const reactFlowInstance = useReactFlow();
  const [systemValue, setSystemValue] = useState(data?.system || '');
  const [promptValue, setPromptValue] = useState(data?.prompt || '');

  const handleRemoveNode = () => {
    reactFlowInstance.setNodes((nds) => nds.filter((node) => node.id !== id));
  };

  const handleSystemChange = (e) => {
    setSystemValue(e.target.value);
  };

  const handlePromptChange = (e) => {
    setPromptValue(e.target.value);
  };

  return (
    <Node name={"LLM"} icon id={id} asChild>
      <div style={{width: "100%", padding: "10px" }}>
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
          <Select label={"System:"} value={systemValue} onChange={handleSystemChange}>
            <option value="">Select System</option>
            <option value="system1">System 1</option>
            <option value="system2">System 2</option>
          </Select>
          <Select label={"Prompt:"} value={promptValue} onChange={handlePromptChange}>
            <option value="">Select Prompt</option>
            <option value="prompt1">Prompt 1</option>
            <option value="prompt2">Prompt 2</option>
          </Select>
        </div>
      </div>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{ top: `${100 / 3}%` }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{ top: `${200 / 3}%` }}
      />
      <Handle type="source" position={Position.Right} id={`${id}-response`} />
    </Node>
  );
};
