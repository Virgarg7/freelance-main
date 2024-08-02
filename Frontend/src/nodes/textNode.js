import { useRef, useState, useEffect } from "react";
import { Position, useReactFlow, Handle } from "reactflow";
import { Node } from "./node";
import { TextArea } from "./textarea";

export const TextNode = ({ id, data }) => {
  const reactFlowInstance = useReactFlow();
  const [currText, setCurrText] = useState(data?.text);
  const [handleId, setHandleId] = useState(null);
  const inputRef = useRef();

  const adjustHeight = () => {
    const input = inputRef.current;
    input.style.height = "auto";
    input.style.height = `${input.scrollHeight}px`;
  };

  const handleTextChange = (e) => {
    const newValue = e.target.value;
    setCurrText(newValue);
    adjustHeight();
    updateHandleId(newValue);
  };

  const updateHandleId = (text) => {
    const match = text.match(/{{\s*(\w+)\s*}}/);
    if (match) {
      const variable = match[1];
      const newHandleId = `${id}-${variable}`;
      setHandleId(newHandleId);
    } else {
      setHandleId(null);
    }
  };

  const handleRemoveNode = () => {
    reactFlowInstance.setNodes((nds) =>
      nds.filter((node) => node.id !== id)
    );
  };

  useEffect(() => {
    adjustHeight();
  }, []);

  return (
    <Node name={"Text"} icon id={`${id}-output`} position={Position.Right}>
      <div style={{ width: "100%" }}>
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
        <TextArea
          ref={inputRef}
          label={"Text:"}
          value={currText}
          onChange={handleTextChange}
        />
       {handleId && <Handle
        type="target"
        position={Position.Left}
        id={`${id}-input`}
        style={{ top: `${100 / 3}%` }}
      />
       }
      </div>
    </Node>
  );
};
